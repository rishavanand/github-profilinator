import React, { useContext } from 'react';
import { Row, Col, Divider, Typography, Button } from 'antd';
import { FireOutlined } from '@ant-design/icons';
import { globalContext } from '../context/GlobalContextProvider';
import { FIELD_TYPES } from '../config/global';
import { generateTextFieldMarkdown } from './Field/TextField';
import marked from 'marked';
import renderHTML from 'react-render-html';
import styles from '../styles/preview.module.scss';
import { generateImageFieldMarkdown } from './Field/ImageField';
import { FieldProps } from './Field';
import {
    SectionProps,
    generateSectionMarkdown as generateSectionMarkdownExt,
    generateColumnMarkdown as generateColumnMardownExt,
} from './Section';

const { Title } = Typography;

export const Preview = () => {
    const context = useContext(globalContext);

    const generateFieldsMarkdown = (fields: FieldProps[]) => {
        if (!fields || !fields.length) return '';
        return fields
            .map(field => {
                if (field.type === FIELD_TYPES.TEXT) return generateTextFieldMarkdown(field);
                if (field.type === FIELD_TYPES.IMAGE) return generateImageFieldMarkdown(field);
            })
            .join('  \n\n');
    };

    const generateColumnMarkdown = (columns: FieldProps[][]) => {
        if (!columns || !columns.length) return '';
        return columns
            .map(column => {
                return (
                    generateColumnMardownExt(columns, 'start') +
                    generateFieldsMarkdown(column) +
                    generateColumnMardownExt(columns, 'end')
                );
            })
            .join('  \n\n');
    };

    const generateSectionMarkdown = (sections: SectionProps[]) => {
        if (!sections) sections = [];
        return sections
            .map(section => {
                return (
                    generateSectionMarkdownExt(section, 'start') +
                    generateColumnMarkdown(section.fields) +
                    generateSectionMarkdownExt(section, 'end')
                );
            })
            .join('');
    };

    const generateMarkdown = () => {
        const markdown = generateSectionMarkdown(context.sections);
        console.log(markdown);
        const markdownText = marked(markdown);
        console.log(markdownText);
        const html = renderHTML(markdownText);
        return html;
    };

    return (
        <>
            <Row justify="space-between">
                <Col>
                    <Title level={3}>Preview</Title>
                </Col>
                <Col>
                    <Button type="primary">
                        <FireOutlined /> Generate README.md
                    </Button>
                </Col>
            </Row>
            <Divider />
            <div className={styles.markdown}>{generateMarkdown()}</div>
        </>
    );
};

export default Preview;
