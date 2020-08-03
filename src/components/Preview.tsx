import React, { Component, useContext } from 'react';
import { Row, Col, Divider, Layout, Menu, Typography, Button } from 'antd';
import { FireOutlined } from '@ant-design/icons';
import { globalContext } from '../context/GlobalContextProvider';
import { FIELD_TYPES } from '../config/global';
import { generateTextFieldMarkdown } from './Field/TextField';
import marked from 'marked';
import renderHTML from 'react-render-html';
import styles from '../styles/preview.module.scss';

const { Header, Sider, Content } = Layout;
const { Title, Paragraph } = Typography;

export const Preview = () => {
    const context = useContext(globalContext);

    const generateMarkdown = () => {
        const markdown = context.sections
            .map(section => {
                if (!section.fields) return;
                return section.fields.map(column => {
                    return column
                        .map(field => {
                            if (field.type === FIELD_TYPES.TEXT) return generateTextFieldMarkdown(field);
                        })
                        .join('  \n');
                });
            })
            .join('');
        const markdownText = marked(markdown);
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
