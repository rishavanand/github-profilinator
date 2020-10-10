import React from 'react';
import { Input, Row, Col, Button, Dropdown, Menu, Popover, Tooltip } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../../styles/fields.module.scss';
import {
    faBold,
    faItalic,
    faUnderline,
    faHeading,
    faAlignLeft,
    faList,
    faLink,
    faSmile,
} from '@fortawesome/free-solid-svg-icons';
import { FieldProps } from '.';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';

const { TextArea } = Input;

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
        `${options.bold ? '**' : ''}` +
        `  \n`
    );
};

export const TextField = ({
    fieldProps,
    modifyField,
}: {
    fieldProps: TextFieldProps;
    modifyField: (fieldProps: TextFieldProps) => void;
}) => {
    const localTextFieldProps: typeof fieldProps = {
        data: {},
        options: {},
        ...fieldProps,
    };

    const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = event.target.value;
        modifyField({
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
        modifyField(localProps);
    };

    const changeAlignment = (aligment: typeof localTextFieldProps.options.alignment) => {
        const localProps = { ...localTextFieldProps };
        if (!localProps.options) localProps.options = {};
        localProps.options.alignment = aligment;
        modifyField(localProps);
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

    const addEmoji = emoji => {
        localTextFieldProps.data.value += emoji.native;
        modifyField(localTextFieldProps);
    };

    const emojiMenu = (
        <Button
            icon={<Picker onSelect={addEmoji} native={true} />}
            className={[styles.optionButton, localTextFieldProps.options && styles.unselected].join(' ')}
        />
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
        modifyField(localProps);
    };

    const toggleItalics = () => {
        const localProps = { ...localTextFieldProps };
        if (!localProps.options) localProps.options = {};
        localProps.options.italics = localProps.options.italics ? false : true;
        modifyField(localProps);
    };

    const toggleUnderLine = () => {
        const localProps = { ...localTextFieldProps };
        if (!localProps.options) localProps.options = {};
        localProps.options.underLine = localProps.options.underLine ? false : true;
        modifyField(localProps);
    };

    const toggleListType = () => {
        if (!localTextFieldProps.options) localTextFieldProps.options = {};
        localTextFieldProps.options.isList = localTextFieldProps.options.isList ? false : true;
        modifyField(localTextFieldProps);
    };

    const addLinkTemplate = () => {
        localTextFieldProps.data.value += `[example link text](http://example/com)`;
        modifyField(localTextFieldProps);
    };

    return (
        <>
            <Row justify="space-between" style={{ marginBottom: 10 }}>
                <Col>
                    <Tooltip placement="top" title={<span>Bold</span>}>
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
                    </Tooltip>
                    <Tooltip placement="top" title={<span>Italics</span>}>
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
                    </Tooltip>
                    <Tooltip placement="top" title={<span>Underline</span>}>
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
                    </Tooltip>
                    <Tooltip placement="top" title={<span>Bullet Points</span>}>
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
                    </Tooltip>
                    <Tooltip placement="top" title={<span>Link</span>}>
                        <Button
                            icon={<FontAwesomeIcon icon={faLink} />}
                            onClick={() => addLinkTemplate()}
                            className={[styles.optionButton, localTextFieldProps.options && styles.unselected].join(
                                ' ',
                            )}
                        />
                    </Tooltip>
                    <Dropdown overlay={fontSizeMenu}>
                        <Tooltip placement="top" title={<span>Heading Type</span>}>
                            <Button
                                style={{ paddingLeft: 5, paddingRight: 5, width: 50 }}
                                icon={
                                    <>
                                        <FontAwesomeIcon icon={faHeading} /> <DownOutlined />
                                    </>
                                }
                            />
                        </Tooltip>
                    </Dropdown>
                    <Dropdown overlay={aligmentMenu}>
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
                    <Popover
                        content={<Picker onSelect={addEmoji} native={true} />}
                        title="Emoji Selector"
                        trigger="hover"
                    >
                        <Tooltip placement="bottom" title={<span>Emoji</span>}>
                            <Button
                                className={[styles.optionButton, localTextFieldProps.options && styles.unselected].join(
                                    ' ',
                                )}
                                icon={
                                    <>
                                        <FontAwesomeIcon icon={faSmile} />
                                    </>
                                }
                            />
                        </Tooltip>
                    </Popover>
                </Col>
            </Row>
            <TextArea
                rows={1}
                autoSize={true}
                name="input"
                value={localTextFieldProps.data.value}
                onChange={onChange}
            />
        </>
    );
};

export default TextField;
