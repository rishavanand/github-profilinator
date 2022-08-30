import React, { useContext } from 'react';
import { Input, Row, Col, Button, Dropdown, Menu, Form, Switch, Tooltip } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../../styles/fields.module.scss';
import { faAlignLeft } from '@fortawesome/free-solid-svg-icons';
import { FieldProps } from '.';

const { TextArea } = Input;

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
        return `<div align="${alignment}">\n`;
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
        return `<img src="${statsUrl}" align="${options.alignment}" />`;
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

export const ProfileVisitorCounterField = ({
    fieldProps,
    modifyField,
}: {
    fieldProps: ProfileVisitorCounterProps;
    modifyField: (filedProps: ProfileVisitorCounterProps) => void;
}) => {
    const localProps: typeof fieldProps = {
        options: {},
        data: {},
        ...fieldProps,
    };

    const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
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

    const changeAlignment = (alignment: STATS_ALIGNMENT) => {
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
                        <Tooltip placement="top" title={<span>Alignment</span>}>
                            <Button
                                style={{ paddingLeft: 5, paddingRight: 5, width: 50 }}
                                icon={
                                    <>
                                        <FontAwesomeIcon icon={faAlignLeft} />
                                    </>
                                }
                            />
                        </Tooltip>
                    </Dropdown>
                </Col>
            </Row>
            <Form layout="vertical">
                <Form.Item label="Github username">
                    <TextArea
                        rows={1}
                        autoSize={true}
                        name="username"
                        value={localProps?.data?.username}
                        onChange={onChange}
                    />
                </Form.Item>
            </Form>
        </>
    );
};

export default ProfileVisitorCounterField;
