import React, { useState, useEffect } from 'react';
import { Input, Row, Col, Button, Dropdown, Menu } from 'antd';
import { CloseCircleOutlined, DownOutlined, UserOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../../styles/fields.module.scss';
import { faBold, faItalic, faUnderline, faHeading, faTimes } from '@fortawesome/free-solid-svg-icons';

export enum TEXT_SIZE {
    H1 = 'h1',
    H2 = 'h2',
    H3 = 'h3',
    H4 = 'h4',
    H5 = 'h5',
    H6 = 'h6',
    REGULAR = '',
}

export interface TextFieldOptions {
    size?: TEXT_SIZE;
    alignment?: 'left' | 'centre' | 'right';
    bold?: boolean;
    italics?: boolean;
    underLine?: boolean;
}

export interface TextFieldData {
    value: string;
}

export interface TextFieldProps {
    id: string;
    sectionId: string;
    data?: TextFieldData;
    options?: TextFieldOptions;
    deleteField?: (fieldProps: Required<Pick<TextFieldProps, 'id' | 'sectionId'>>) => void;
    modifyField?: (fieldProps: Required<Pick<TextFieldProps, 'id' | 'sectionId'>> & Partial<TextFieldProps>) => void;
}

export const generateSizeTags = (size: TEXT_SIZE, type: 'start' | 'end') => {
    const end = type === 'end' ? '/' : '';

    switch (size) {
        case TEXT_SIZE.H1:
            return `<${end}h1>`;
        case TEXT_SIZE.H2:
            return `<${end}h2>`;
        case TEXT_SIZE.H3:
            return `<${end}h3>`;
        case TEXT_SIZE.H4:
            return `<${end}h4>`;
        case TEXT_SIZE.H5:
            return `<${end}h5>`;
        case TEXT_SIZE.H6:
            return `<${end}h6>`;
        default:
            return '';
    }
};

export const generateTextFieldMarkdown = ({ options, data }: TextFieldProps) => {
    if (!options) options = {};
    return (
        `${options.bold ? '**' : ''}` +
        `${options.italics ? '*' : ''}` +
        `${options.underLine ? '<ins>' : ''}` +
        `${generateSizeTags(options.size, 'start')}` +
        `${data.value}` +
        `${generateSizeTags(options.size, 'end')}` +
        `${options.underLine ? '</ins>' : ''}` +
        `${options.italics ? '*' : ''}` +
        `${options.bold ? '**' : ''}`
    );
};

export const TextField = ({ id, sectionId, data, options, modifyField, deleteField }: TextFieldProps) => {
    if (!options) options = { size: TEXT_SIZE.REGULAR };

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        modifyField({
            id,
            sectionId,
            data: {
                value: value,
            },
        });
    };

    const changeFontSize = (size: typeof options.size) => {
        options.size = size;
        modifyField({
            id,
            sectionId,
            options,
        });
    };

    const menu = (
        <Menu>
            <Menu.Item key="1" onClick={() => changeFontSize(TEXT_SIZE.H1)}>
                Heading 1
            </Menu.Item>
            <Menu.Item key="2" onClick={() => changeFontSize(TEXT_SIZE.H2)}>
                Heading 2
            </Menu.Item>
            <Menu.Item key="3" onClick={() => changeFontSize(TEXT_SIZE.H3)}>
                Heading 3
            </Menu.Item>
            <Menu.Item key="4" onClick={() => changeFontSize(TEXT_SIZE.H4)}>
                Heading 4
            </Menu.Item>
            <Menu.Item key="5" onClick={() => changeFontSize(TEXT_SIZE.H5)}>
                Heading 5
            </Menu.Item>
            <Menu.Item key="6" onClick={() => changeFontSize(TEXT_SIZE.H6)}>
                Heading 6
            </Menu.Item>
            <Menu.Item key="7" onClick={() => changeFontSize(TEXT_SIZE.REGULAR)}>
                Regular
            </Menu.Item>
        </Menu>
    );

    const toggleBold = () => {
        options.bold = options.bold ? false : true;
        modifyField({
            id,
            sectionId,
            options,
        });
    };

    const toggleItalics = () => {
        options.italics = options.italics ? false : true;
        modifyField({
            id,
            sectionId,
            options,
        });
    };

    const toggleUnderLine = () => {
        options.underLine = options.underLine ? false : true;
        modifyField({
            id,
            sectionId,
            options,
        });
    };

    return (
        <>
            <Row justify="space-between" style={{ marginBottom: 10 }}>
                <Col>
                    <Button
                        icon={<FontAwesomeIcon icon={faBold} />}
                        onClick={() => toggleBold()}
                        className={[
                            styles.optionButton,
                            options && options.bold ? styles.selected : styles.unselected,
                        ].join(' ')}
                    />
                    <Button
                        icon={<FontAwesomeIcon icon={faItalic} />}
                        onClick={() => toggleItalics()}
                        className={[
                            styles.optionButton,
                            options && options.italics ? styles.selected : styles.unselected,
                        ].join(' ')}
                    />
                    <Button
                        icon={<FontAwesomeIcon icon={faUnderline} />}
                        onClick={() => toggleUnderLine()}
                        className={[
                            styles.optionButton,
                            options && options.underLine ? styles.selected : styles.unselected,
                        ].join(' ')}
                    />
                    <Dropdown overlay={menu}>
                        <Button
                            style={{ paddingLeft: 5, paddingRight: 5, width: 50 }}
                            icon={
                                <>
                                    <FontAwesomeIcon icon={faHeading} /> <DownOutlined />
                                </>
                            }
                        />
                    </Dropdown>
                </Col>
                <Col>
                    <FontAwesomeIcon icon={faTimes} onClick={() => deleteField({ id, sectionId })} />
                </Col>
            </Row>
            <Input name="input" value={data.value} onChange={onChange} />
        </>
    );
};

export default TextField;
