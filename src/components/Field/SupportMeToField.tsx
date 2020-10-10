import React from 'react';
import { Input, Row, Col, Button, Dropdown, Menu, Form, Switch, Tooltip } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignLeft } from '@fortawesome/free-solid-svg-icons';
import { FieldProps } from '.';

const { TextArea } = Input;

export enum STATS_ALIGNMENT {
    LEFT = 'left',
    CENTRE = 'center',
    RIGHT = 'right',
}

export interface SupportMeOptions {
    height?: string;
    width?: string;
    alignment?: STATS_ALIGNMENT;
    fitImage?: boolean;
}

export interface SupportMeData {
    paypal?: string;
    buymeacoffee?: string;
}

export interface SupportMeProps extends FieldProps {
    id?: string;
    data?: SupportMeData;
    options?: SupportMeOptions;
}

export const generateAlignmentTags = (alignment: STATS_ALIGNMENT, type: 'start' | 'end') => {
    if (alignment && type === 'start') return `<div align="${alignment}">`;
    else if (!alignment && type === 'start') return `<div>`;
    else if (alignment && type === 'end') return `</div>`;
    else return '';
};

export const generateImageTag = (data: SupportMeData, options: SupportMeOptions) => {
    const statsUrl = {
        paypal: `https://paypal.me/${data.paypal}`,
        buymeacoffee: `https://www.buymeacoffee.com/${data.buymeacoffee}`,
    };
    let html = '';
    if (data.paypal)
        html += `
            <a href="${statsUrl.paypal}" target="_blank" style="display: inline-block;">
                <img
                    src="https://img.shields.io/badge/Donate-PayPal-blue.svg?style=flat-square" 
                    align="${options.alignment ? options.alignment : 'left'}"
                />
            </a>`;
    if (data.buymeacoffee)
        html += `
            <a href="${statsUrl.buymeacoffee}" target="_blank" style="display: inline-block;">
                <img
                    src="https://img.shields.io/badge/Donate-Buy%20Me%20A%20Coffee-orange.svg?style=flat-square" 
                    align="${options.alignment ? options.alignment : 'left'}"
                />
            </a>`;
    return html;
};

export const generateSupportMeMarkdown = ({ data, options }: SupportMeProps) => {
    if (!options) options = {};
    if (!data)
        data = {
            paypal: '',
            buymeacoffee: '',
        };
    return (
        `${generateAlignmentTags(options.alignment, 'start')}` +
        `${generateImageTag(data, options)}` +
        `${generateAlignmentTags(options.alignment, 'end')}`
    );
};

export const SupportMeField = ({
    fieldProps,
    modifyField,
}: {
    fieldProps: SupportMeProps;
    modifyField: (fieldProps: SupportMeProps) => void;
}) => {
    const localSupportMeProps: typeof fieldProps = {
        options: {},
        data: {},
        ...fieldProps,
    };

    const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const name = event.target.name;
        const value = event.target.value;
        if (name === 'paypal') {
            modifyField({
                ...localSupportMeProps,
                data: {
                    ...localSupportMeProps.data,
                    paypal: value,
                },
            });
        } else {
            if (name === 'buymeacoffee') {
                modifyField({
                    ...localSupportMeProps,
                    data: {
                        ...localSupportMeProps.data,
                        buymeacoffee: value,
                    },
                });
            }
        }
    };

    const changeAlignment = (alignment: typeof localSupportMeProps.options.alignment) => {
        const localProps = { ...localSupportMeProps };
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
                                        <FontAwesomeIcon icon={faAlignLeft} /> <DownOutlined />
                                    </>
                                }
                            />
                        </Tooltip>
                    </Dropdown>
                </Col>
            </Row>
            <Form layout="vertical">
                <Form.Item label="Paypal username">
                    <TextArea
                        rows={1}
                        autoSize={true}
                        name="paypal"
                        value={localSupportMeProps.data.paypal}
                        onChange={onChange}
                    />
                </Form.Item>
                <Form.Item label="Buy me a Coffee username">
                    <TextArea
                        rows={1}
                        autoSize={true}
                        name="buymeacoffee"
                        value={localSupportMeProps.data.buymeacoffee}
                        onChange={onChange}
                    />
                </Form.Item>
            </Form>
        </>
    );
};

export default SupportMeField;
