import React, { useContext } from 'react';
import { Input, Row, Col, Button, Dropdown, Menu, Form, Switch } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../../styles/fields.module.scss';
import { faAlignLeft } from '@fortawesome/free-solid-svg-icons';
import { FieldProps } from '.';
import { globalContext } from '../../context/GlobalContextProvider';

export enum STATS_ALIGNMENT {
    LEFT = 'left',
    CENTRE = 'center',
    RIGHT = 'right',
}

export interface FiledOptions {
    alignment?: STATS_ALIGNMENT;
}

export interface FieldData {
    username?: string;
}

export interface ProfileVisitorCounterProps extends FieldProps {
    id?: string;
    data?: FieldData;
    options?: FiledOptions;
}

export const generateAlignmentTags = (alignment: STATS_ALIGNMENT, type: 'start' | 'end') => {
    if ((alignment === STATS_ALIGNMENT.CENTRE || alignment === STATS_ALIGNMENT.RIGHT) && type === 'start')
        return `<div key="visitor-counter-img-div" align="${alignment}">\n`;
    else if ((alignment === STATS_ALIGNMENT.CENTRE || alignment === STATS_ALIGNMENT.RIGHT) && type === 'end')
        return `\n</div>`;
    else return '';
};

export const generateImageTag = (data: FieldData, options: FiledOptions) => {
    const statsUrl = `https://komarev.com/ghpvc/?username=${data.username}&&style=flat-square`;
    if (
        options.alignment &&
        (options.alignment === STATS_ALIGNMENT.CENTRE || options.alignment === STATS_ALIGNMENT.RIGHT)
    )
        return `<img key="visitor-counter-img" alt="Visitor Counter" src="${statsUrl}" />`;
    else return `![Profile views counter](${statsUrl})`;
};

export const generateProfileVisitorCounterMarkdown = ({ data, options }: FieldProps) => {
    if (!options) options = {};
    if (!data)
        data = {
            username: '',
        };
    if (!data.username) return ``;
    return (
        `${generateAlignmentTags(options.alignment, 'start')}` +
        `${generateImageTag(data, options)}` +
        `${generateAlignmentTags(options.alignment, 'end')}` +
        `  \n`
    );
};

export const ProfileVisitorCounterField = (
    props: ProfileVisitorCounterProps &
        Required<Pick<ProfileVisitorCounterProps, 'sectionIndex' | 'columnIndex' | 'fieldIndex' | 'type'>>,
) => {
    const { modifyField } = useContext(globalContext);

    const localProps: typeof props = {
        options: {},
        data: {},
        ...props,
    };

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;
        if (name === 'username')
            modifyField({
                ...localProps,
                data: {
                    ...localProps.data,
                    username: value,
                },
            });
    };

    const changeAlignment = (alignment: typeof localProps.options.alignment) => {
        if (!localProps.options) localProps.options = {};
        localProps.options.alignment = alignment;
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

    return (
        <>
            <Row justify="space-between" style={{ marginBottom: 10 }}>
                <Col>
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
                </Col>
            </Row>
            <Form layout="vertical">
                <Form.Item label="Github username">
                    <Input name="username" value={localProps.data.username} onChange={onChange} />
                </Form.Item>
            </Form>
        </>
    );
};

export default ProfileVisitorCounterField;
