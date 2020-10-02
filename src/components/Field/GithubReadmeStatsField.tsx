import React, { useContext } from 'react';
import { Input, Row, Col, Button, Dropdown, Menu, Form, Switch } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../../styles/fields.module.scss';
import { faAlignLeft, faExpandArrowsAlt } from '@fortawesome/free-solid-svg-icons';
import { FieldProps } from '.';
import { globalContext } from '../../context/GlobalContextProvider';

const { TextArea } = Input;

export enum STATS_ALIGNMENT {
    LEFT = 'left',
    CENTRE = 'center',
    RIGHT = 'right',
}

export enum VARIANT {
    LANGUAGE_STATS = 'languages',
    ACTIVITY_STATS = 'activity',
}

export interface GithubReadmeStatsOptions {
    height?: string;
    width?: string;
    alignment?: STATS_ALIGNMENT;
    fitImage?: boolean;
    variant?: VARIANT;
}

export interface GithubReadmeStatsData {
    username?: string;
}

export interface GithubReadmeStatsProps extends FieldProps {
    id?: string;
    data?: GithubReadmeStatsData;
    options?: GithubReadmeStatsOptions;
}

export const generateAlignmentTags = (alignment: STATS_ALIGNMENT, type: 'start' | 'end') => {
    if ((alignment === STATS_ALIGNMENT.CENTRE || alignment === STATS_ALIGNMENT.RIGHT) && type === 'start')
        return `<div align="${alignment}">`;
    else if ((alignment === STATS_ALIGNMENT.CENTRE || alignment === STATS_ALIGNMENT.RIGHT) && type === 'end')
        return `</div>`;
    else return '';
};

export const generateImageTag = (data: GithubReadmeStatsData, options: GithubReadmeStatsOptions) => {
    let statsUrl: string;
    if (!options.variant || options.variant === VARIANT.ACTIVITY_STATS)
        statsUrl = `https://github-readme-stats.vercel.app/api?username=${data.username}&show_icons=true&count_private=true`;
    else if (options.variant === VARIANT.LANGUAGE_STATS)
        statsUrl = `https://github-readme-stats.vercel.app/api/top-langs/?username=${data.username}`;

    if (options.fitImage)
        return `<img src="${statsUrl}" align="${
            options.alignment ? options.alignment : 'left'
        }" style="width: 100%" />`;
    else if (
        options.alignment &&
        (options.alignment === STATS_ALIGNMENT.CENTRE || options.alignment === STATS_ALIGNMENT.RIGHT)
    )
        return `<img src="${statsUrl}" align="${options.alignment ? options.alignment : 'left'}" />`;
    else return `![Github Readme Stats](${statsUrl})`;
};

export const generateGithubReadmeStatsMarkdown = ({ data, options }: GithubReadmeStatsProps) => {
    if (!options) options = {};
    if (!data)
        data = {
            username: '',
        };
    return (
        `${generateAlignmentTags(options.alignment, 'start')}` +
        `${generateImageTag(data, options)}` +
        `${generateAlignmentTags(options.alignment, 'end')}`
    );
};

export const GithubReadmeStatsField = (
    imageFieldProps: GithubReadmeStatsProps &
        Required<
            Pick<GithubReadmeStatsProps, 'id' | 'sectionId' | 'sectionIndex' | 'columnIndex' | 'fieldIndex' | 'type'>
        >,
) => {
    const { modifyField } = useContext(globalContext);

    const localGithubReadmeStatsProps: typeof imageFieldProps = {
        options: {},
        data: {},
        ...imageFieldProps,
    };

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;
        if (name === 'username')
            modifyField({
                ...localGithubReadmeStatsProps,
                data: {
                    ...localGithubReadmeStatsProps.data,
                    username: value,
                },
            });
    };

    const toggleFitImage = () => {
        modifyField({
            ...localGithubReadmeStatsProps,
            options: {
                ...localGithubReadmeStatsProps.options,
                fitImage: localGithubReadmeStatsProps.options.fitImage ? false : true,
            },
        });
    };

    const changeAlignment = (alignment: typeof localGithubReadmeStatsProps.options.alignment) => {
        const localProps = { ...localGithubReadmeStatsProps };
        if (!localProps.options) localProps.options = {};
        localProps.options.alignment = alignment;
        modifyField(localProps);
    };

    const changeVariant = (variant: VARIANT) => {
        const localProps = { ...localGithubReadmeStatsProps };
        if (!localProps.options) localProps.options = {};
        localProps.options.variant = variant;
        modifyField(localProps);
    };

    const alignmentMenu = (
        <Menu>
            <Menu.Item key="1" onClick={() => changeAlignment(STATS_ALIGNMENT.LEFT)}>
                Left
            </Menu.Item>
            <Menu.Item key="2" onClick={() => changeAlignment(STATS_ALIGNMENT.CENTRE)}>
                Centre
            </Menu.Item>
            <Menu.Item key="3" onClick={() => changeAlignment(STATS_ALIGNMENT.RIGHT)}>
                Right
            </Menu.Item>
        </Menu>
    );

    const variantMenu = (
        <Menu>
            <Menu.Item key="1" onClick={() => changeVariant(VARIANT.ACTIVITY_STATS)}>
                Activity stats
            </Menu.Item>
            <Menu.Item key="2" onClick={() => changeVariant(VARIANT.LANGUAGE_STATS)}>
                Language stats
            </Menu.Item>
        </Menu>
    );

    return (
        <>
            <Row justify="space-between" style={{ marginBottom: 10 }}>
                <Col>
                    <Dropdown overlay={variantMenu}>
                        <Button style={{ paddingLeft: 5, paddingRight: 5 }}>
                            Variant <DownOutlined />{' '}
                        </Button>
                    </Dropdown>
                    <Dropdown overlay={alignmentMenu}>
                        <Button
                            style={{ paddingLeft: 5, paddingRight: 5, width: 50 }}
                            icon={
                                <>
                                    <FontAwesomeIcon icon={faAlignLeft} /> <DownOutlined />
                                </>
                            }
                        />
                    </Dropdown>
                    <Button
                        icon={
                            <>
                                <FontAwesomeIcon icon={faExpandArrowsAlt} />
                            </>
                        }
                        onClick={() => toggleFitImage()}
                        className={[
                            styles.optionButton,
                            localGithubReadmeStatsProps.options && localGithubReadmeStatsProps.options.fitImage
                                ? styles.selected
                                : styles.unselected,
                        ].join(' ')}
                    />
                </Col>
            </Row>
            <Form layout="vertical">
                <Form.Item label="Github username">
                    <TextArea name="username" value={localGithubReadmeStatsProps.data.username} onChange={onChange}/>
                </Form.Item>
            </Form>
        </>
    );
};

export default GithubReadmeStatsField;
