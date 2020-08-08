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
import { FieldProps, generateFieldTitleMarkdown } from './Field';
import {
    SectionProps,
    generateSectionMarkdown as generateSectionMarkdownExt,
    generateColumnMarkdown as generateColumnMarkdownExt,
} from './Section';
import { generateGithubReadmeStatsMarkdown } from './Field/GithubReadmeStatsField';
import { generateSkillsFieldMarkdown } from './Field/SkillsField';
import { generateSocialFieldMarkdown } from './Field/SocialField';
import { generateSectionTitleMarkdown } from '../components/Section';
import { generateProfileVisitorCounterMarkdown } from './Field/ProfileVisitorCounterField';

const { Title } = Typography;

export const Preview = () => {
    const context = useContext(globalContext);

    const generateFieldsMarkdown = (fields: FieldProps[]) => {
        if (!fields || !fields.length) return '';
        return fields
            .map(field => {
                const { type } = field;
                let returnField: string = generateFieldTitleMarkdown(field);
                switch (type) {
                    case FIELD_TYPES.TEXT:
                        returnField += generateTextFieldMarkdown(field);
                        break;
                    case FIELD_TYPES.IMAGE:
                        returnField += generateImageFieldMarkdown(field);
                        break;
                    case FIELD_TYPES.GITHUB_STATS:
                        returnField += generateGithubReadmeStatsMarkdown(field);
                        break;
                    case FIELD_TYPES.SKILLS:
                        returnField += generateSkillsFieldMarkdown(field);
                        break;
                    case FIELD_TYPES.SOCIAL:
                        returnField += generateSocialFieldMarkdown(field);
                        break;
                    case FIELD_TYPES.PROFILE_VISITOR_COUNTER:
                        returnField += generateProfileVisitorCounterMarkdown(field);
                }
                return returnField;
            })
            .join('  \n\n');
    };

    const generateColumnMarkdown = (columns: FieldProps[][]) => {
        if (!columns || !columns.length) return '';
        return columns
            .map(column => {
                return (
                    generateColumnMarkdownExt(columns, 'start') +
                    generateFieldsMarkdown(column) +
                    generateColumnMarkdownExt(columns, 'end')
                );
            })
            .join('');
    };

    const generateSectionMarkdown = (sections: SectionProps[]) => {
        if (!sections) sections = [];
        return sections
            .map(section => {
                return (
                    generateSectionTitleMarkdown(section) +
                    generateSectionMarkdownExt(section, 'start') +
                    generateColumnMarkdown(section.fields) +
                    generateSectionMarkdownExt(section, 'end')
                );
            })
            .join('  \n\n<br/>  \n\n');
    };

    const generateMarkdown = () => {
        console.log(JSON.stringify(context.sections));
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
