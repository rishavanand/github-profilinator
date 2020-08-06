import React from 'react';
import { Input, Row, Col, Button, Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../../styles/fields.module.scss';
import {
    faCaretUp,
    faCaretDown,
    faBold,
    faItalic,
    faUnderline,
    faHeading,
    faTimes,
    faAlignLeft,
    faList,
} from '@fortawesome/free-solid-svg-icons';
import { FieldProps } from '.';

export enum TEXT_SIZE {
    H1 = 'h1',
    H2 = 'h2',
    H3 = 'h3',
    H4 = 'h4',
    H5 = 'h5',
    H6 = 'h6',
    REGULAR = '',
}

export enum TEXT_ALIGNMENT {
    LEFT = 'left',
    CENTRE = 'center',
    RIGHT = 'right',
}

export interface TextFieldOptions {
    size?: TEXT_SIZE;
    alignment?: TEXT_ALIGNMENT;
    bold?: boolean;
    italics?: boolean;
    underLine?: boolean;
    isList?: boolean;
}

export interface TextFieldData {
    value?: string;
}

export interface TextFieldProps extends FieldProps {
    data?: TextFieldData;
    options?: TextFieldOptions;
}

export const generateAlignmentTags = (alignment: TEXT_ALIGNMENT, type: 'start' | 'end') => {
    if ((alignment === TEXT_ALIGNMENT.CENTRE || alignment === TEXT_ALIGNMENT.RIGHT) && type === 'start')
        return `<div align="${alignment}">`;
    else if ((alignment === TEXT_ALIGNMENT.CENTRE || alignment === TEXT_ALIGNMENT.RIGHT) && type === 'end')
        return `</div>`;
    else return '';
};

export const generateSizeTags = (size: TEXT_SIZE) => {
    switch (size) {
        case TEXT_SIZE.H1:
            return `# `;
        case TEXT_SIZE.H2:
            return `## `;
        case TEXT_SIZE.H3:
            return `### `;
        case TEXT_SIZE.H4:
            return `#### `;
        case TEXT_SIZE.H5:
            return `##### `;
        case TEXT_SIZE.H6:
            return `###### `;
        default:
            return '';
    }
};

export const generateTextFieldMarkdown = ({ options, data }: TextFieldProps) => {
    if (!options) options = {};
    if (!data)
        data = {
            value: '',
        };
    return (
        `${options.isList ? '- ' : ''}` +
        `${generateSizeTags(options.size)}` +
        `${options.bold ? '**' : ''}` +
        `${options.italics ? '*' : ''}` +
        `${options.underLine ? '<ins>' : ''}` +
        `${generateAlignmentTags(options.alignment, 'start')}` +
        `${data.value}` +
        `${generateAlignmentTags(options.alignment, 'end')}` +
        `${options.underLine ? '</ins>' : ''}` +
        `${options.italics ? '*' : ''}` +
        `${options.bold ? '**' : ''}`
    );
};

export const TextField = (
    textFieldProps: TextFieldProps &
        Required<Pick<TextFieldProps, 'id' | 'sectionId' | 'sectionIndex' | 'columnIndex' | 'fieldIndex' | 'type'>>,
) => {
    const localTextFieldProps: typeof textFieldProps = {
        data: {},
        options: {},
        ...textFieldProps,
    };

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        localTextFieldProps.modifyField({
            ...localTextFieldProps,
            data: {
                ...localTextFieldProps.data,
                value: value,
            },
        });
    };

    const changeFontSize = (size: typeof localTextFieldProps.options.size) => {
        const localProps = { ...localTextFieldProps };
        if (!localProps.options) localProps.options = {};
        localProps.options.size = size;
        localTextFieldProps.modifyField(localProps);
    };

    const changeAlignment = (aligment: typeof localTextFieldProps.options.alignment) => {
        const localProps = { ...localTextFieldProps };
        if (!localProps.options) localProps.options = {};
        localProps.options.alignment = aligment;
        localTextFieldProps.modifyField(localProps);
    };

    const aligmentMenu = (
        <Menu>
            <Menu.Item key="1" onClick={() => changeAlignment(TEXT_ALIGNMENT.LEFT)}>
                Left
            </Menu.Item>
            <Menu.Item key="2" onClick={() => changeAlignment(TEXT_ALIGNMENT.CENTRE)}>
                Centre
            </Menu.Item>
            <Menu.Item key="3" onClick={() => changeAlignment(TEXT_ALIGNMENT.RIGHT)}>
                Right
            </Menu.Item>
        </Menu>
    );

    const fontSizeMenu = (
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
        const localProps = { ...localTextFieldProps };
        if (!localProps.options) localProps.options = {};
        localProps.options.bold = localProps.options.bold ? false : true;
        localTextFieldProps.modifyField(localProps);
    };

    const toggleItalics = () => {
        const localProps = { ...localTextFieldProps };
        if (!localProps.options) localProps.options = {};
        localProps.options.italics = localProps.options.italics ? false : true;
        localTextFieldProps.modifyField(localProps);
    };

    const toggleUnderLine = () => {
        const localProps = { ...localTextFieldProps };
        if (!localProps.options) localProps.options = {};
        localProps.options.underLine = localProps.options.underLine ? false : true;
        localTextFieldProps.modifyField(localProps);
    };

    const toggleListType = () => {
        const localProps = { ...localTextFieldProps };
        if (!localProps.options) localProps.options = {};
        localProps.options.isList = localProps.options.isList ? false : true;
        localTextFieldProps.modifyField(localProps);
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
                            localTextFieldProps.options && localTextFieldProps.options.bold
                                ? styles.selected
                                : styles.unselected,
                        ].join(' ')}
                    />
                    <Button
                        icon={<FontAwesomeIcon icon={faItalic} />}
                        onClick={() => toggleItalics()}
                        className={[
                            styles.optionButton,
                            localTextFieldProps.options && localTextFieldProps.options.italics
                                ? styles.selected
                                : styles.unselected,
                        ].join(' ')}
                    />
                    <Button
                        icon={<FontAwesomeIcon icon={faUnderline} />}
                        onClick={() => toggleUnderLine()}
                        className={[
                            styles.optionButton,
                            localTextFieldProps.options && localTextFieldProps.options.underLine
                                ? styles.selected
                                : styles.unselected,
                        ].join(' ')}
                    />
                    <Button
                        icon={<FontAwesomeIcon icon={faList} />}
                        onClick={() => toggleListType()}
                        className={[
                            styles.optionButton,
                            localTextFieldProps.options && localTextFieldProps.options.isList
                                ? styles.selected
                                : styles.unselected,
                        ].join(' ')}
                    />
                    <Dropdown overlay={fontSizeMenu}>
                        <Button
                            style={{ paddingLeft: 5, paddingRight: 5, width: 50 }}
                            icon={
                                <>
                                    <FontAwesomeIcon icon={faHeading} /> <DownOutlined />
                                </>
                            }
                        />
                    </Dropdown>
                    <Dropdown overlay={aligmentMenu}>
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
                <Col>
                    <Button
                        icon={
                            <>
                                <FontAwesomeIcon icon={faCaretUp} />
                            </>
                        }
                        onClick={() => localTextFieldProps.shiftField(localTextFieldProps, 'up')}
                    />
                    <Button
                        icon={
                            <>
                                <FontAwesomeIcon icon={faCaretDown} />
                            </>
                        }
                        onClick={() => localTextFieldProps.shiftField(localTextFieldProps, 'down')}
                    />
                    <Button
                        onClick={() => localTextFieldProps.deleteField(localTextFieldProps)}
                        icon={
                            <>
                                <FontAwesomeIcon icon={faTimes} />
                            </>
                        }
                    />
                </Col>
            </Row>
            <Input name="input" value={localTextFieldProps.data.value} onChange={onChange} />
        </>
    );
};

export default TextField;
