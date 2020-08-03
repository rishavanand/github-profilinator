import React from 'react';
import { Input, Row, Col, Button, Dropdown, Menu, Form } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../../styles/fields.module.scss';
import { faBold, faItalic, faUnderline, faHeading, faTimes, faAlignLeft } from '@fortawesome/free-solid-svg-icons';
import { FieldProps } from '.';

export enum IMAGE_ALIGNMENT {
    LEFT = 'left',
    CENTRE = 'center',
    RIGHT = 'right',
}

export interface ImageFieldOptions {
    height?: string;
    width?: string;
    alignment?: IMAGE_ALIGNMENT;
}

export interface ImageFieldData {
    url?: string;
    alt?: string;
    title?: string;
}

export interface ImageFieldProps extends FieldProps {
    id: string;
    data?: ImageFieldData;
    options?: ImageFieldOptions;
    deleteField?: (
        fieldProps: ImageFieldProps & Required<Pick<FieldProps, 'columnIndex' | 'fieldIndex' | 'sectionIndex'>>,
    ) => void;
    modifyField?: (
        fieldProps: ImageFieldProps & Required<Pick<ImageFieldProps, 'columnIndex' | 'fieldIndex' | 'sectionIndex'>>,
    ) => void;
}

export const generateAlignmentTags = (alignment: IMAGE_ALIGNMENT, type: 'start' | 'end') => {
    if ((alignment === IMAGE_ALIGNMENT.CENTRE || alignment === IMAGE_ALIGNMENT.RIGHT) && type === 'start')
        return `<div align="${alignment}">`;
    else if ((alignment === IMAGE_ALIGNMENT.CENTRE || alignment === IMAGE_ALIGNMENT.RIGHT) && type === 'end')
        return `</div>`;
    else return '';
};

export const generateImageTag = (data: ImageFieldData, options: ImageFieldOptions) => {
    if (
        (options.alignment &&
            (options.alignment === IMAGE_ALIGNMENT.CENTRE || options.alignment === IMAGE_ALIGNMENT.RIGHT)) ||
        options.height ||
        options.width
    )
        return `<img src="${data.url}" align="${options.alignment ? options.alignment : 'left'}" height="${
            options.height
        }" width="${options.width}"/>`;
    else return `![${data.alt ? data.alt : ''}](${data.url})`;
};

export const generateImageFieldMarkdown = ({ data, options }: ImageFieldProps) => {
    if (!options) options = {};
    return (
        `  \n` +
        `${generateAlignmentTags(options.alignment, 'start')}` +
        `${generateImageTag(data, options)}` +
        `${generateAlignmentTags(options.alignment, 'end')}`
    );
};

export const ImageField = (
    imageFieldProps: ImageFieldProps &
        Required<Pick<ImageFieldProps, 'id' | 'sectionId' | 'sectionIndex' | 'columnIndex' | 'fieldIndex' | 'type'>>,
) => {
    // Set defaults
    imageFieldProps = {
        options: {
            height: '',
            width: '',
        },
        data: {
            url: '',
            alt: '',
            title: '',
        },
        ...imageFieldProps,
    };

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;
        if (name === 'url')
            imageFieldProps.modifyField({
                ...imageFieldProps,
                data: {
                    ...imageFieldProps.data,
                    url: value,
                },
            });
        else if (name === 'alt')
            imageFieldProps.modifyField({
                ...imageFieldProps,
                data: {
                    ...imageFieldProps.data,
                    alt: value,
                },
            });
        else if (name === 'height')
            imageFieldProps.modifyField({
                ...imageFieldProps,
                options: {
                    ...imageFieldProps.options,
                    height: value,
                },
            });
        else if (name === 'width')
            imageFieldProps.modifyField({
                ...imageFieldProps,
                options: {
                    ...imageFieldProps.options,
                    height: value,
                },
            });
    };

    const changeAlignment = (aligment: typeof imageFieldProps.options.alignment) => {
        const localProps = { ...imageFieldProps };
        if (!localProps.options) localProps.options = {};
        localProps.options.alignment = aligment;
        imageFieldProps.modifyField(localProps);
    };

    const aligmentMenu = (
        <Menu>
            <Menu.Item key="1" onClick={() => changeAlignment(IMAGE_ALIGNMENT.LEFT)}>
                Left
            </Menu.Item>
            <Menu.Item key="2" onClick={() => changeAlignment(IMAGE_ALIGNMENT.CENTRE)}>
                Centre
            </Menu.Item>
            <Menu.Item key="3" onClick={() => changeAlignment(IMAGE_ALIGNMENT.RIGHT)}>
                Right
            </Menu.Item>
        </Menu>
    );

    return (
        <>
            <Row justify="space-between" style={{ marginBottom: 10 }}>
                <Col>
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
                    <FontAwesomeIcon icon={faTimes} onClick={() => imageFieldProps.deleteField(imageFieldProps)} />
                </Col>
            </Row>
            <Form layout="vertical">
                <Form.Item label="Image Alt Text">
                    <Input name="alt" value={imageFieldProps.data.alt} onChange={onChange} />
                </Form.Item>
                <Form.Item label="Image URL">
                    <Input name="url" value={imageFieldProps.data.url} onChange={onChange} />
                </Form.Item>
                <Form.Item label="Height">
                    <Input name="height" value={imageFieldProps.options.height} onChange={onChange} />
                </Form.Item>
                <Form.Item label="Width">
                    <Input name="width" value={imageFieldProps.options.width} onChange={onChange} />
                </Form.Item>
            </Form>
        </>
    );
};

export default ImageField;
