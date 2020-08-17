import React, { useContext, useState } from 'react';
import { Row, Col, Divider, Typography, Button, Modal, Input, Card, Grid } from 'antd';
import { FireOutlined } from '@ant-design/icons';
import { globalContext } from '../context/GlobalContextProvider';
import { FIELD_TYPES } from '../config/global';
import { generateTextFieldMarkdown } from './Field/TextField';
import marked from 'marked';
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
import { generateBlogPostMarkdown } from './Field/BlogPostField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { generateSpotifyListeningToMarkdown } from './Field/SpotifyListeningTo';

const { Title } = Typography;
const { TextArea } = Input;
const { useBreakpoint } = Grid;

export const Preview = ({ scrollRef }: { scrollRef: string }) => {
    const context = useContext(globalContext);
    const [showMarkdown, setShowMarkdown] = useState(false);
    const screens = useBreakpoint();

    const buttonSize = screens.md ? 'middle' : 'small';

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
                        break;
                    case FIELD_TYPES.BLOG_POST:
                        returnField += generateBlogPostMarkdown();
                        break;
                    case FIELD_TYPES.SPOTIFY:
                        returnField += generateSpotifyListeningToMarkdown(field);
                        break;
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
        const markdown = generateSectionMarkdown(context.sections);
        const html = marked(markdown);
        return { html, markdown };
    };

    const toggleShowMarkdown = () => {
        setShowMarkdown(showMarkdown ? false : true);
    };

    const generateAdvertisedMarkdown = (markdown: string) => {
        return (
            markdown +
            `\n<br />\n\n----\n<div align="center">Generated using <a href="https://profilinator.rishav.dev/" target="_blank">Github Profilinator</a></div>`
        );
    };

    return (
        <div
            style={{
                minHeight: '100vh',
            }}
            ref={scrollRef}
        >
            <Row justify="space-between">
                <Col>
                    <Title level={3}>Preview</Title>
                </Col>
                <Col>
                    <Button type="primary" onClick={toggleShowMarkdown} size={buttonSize}>
                        <FireOutlined /> Generate README.md
                    </Button>
                </Col>
            </Row>
            <Divider />
            <div className={styles.markdown} dangerouslySetInnerHTML={{ __html: generateMarkdown().html }} />
            <Modal
                title="Generated Markdown"
                width="70vw"
                visible={showMarkdown}
                onCancel={toggleShowMarkdown}
                onOk={toggleShowMarkdown}
            >
                <h3
                    style={{
                        textAlign: 'center',
                        backgroundColor: '#f6ffed',
                        padding: 20,
                        fontWeight: 'bold',
                        borderRadius: 2,
                        border: '1px solid #b7eb8f',
                    }}
                >
                    If you found this tool to be helpful, or liked some feature, then show your support by hitting that{' '}
                    <a href="https://github.com/rishavanand/github-profilinator" rel="noreferrer" target="_blank">
                        <FontAwesomeIcon icon={faStar} />
                    </a>{' '}
                    star button on the GitHub repo. It helps the developer to stay motivated and add new features to the
                    project .{' '}
                    <a href="https://github.com/rishavanand/github-profilinator" rel="noreferrer" target="_blank">
                        Link to Github Profilinator on GitHub
                    </a>
                </h3>
                <br />
                <TextArea autoSize={true} value={generateAdvertisedMarkdown(generateMarkdown().markdown)} />
            </Modal>
        </div>
    );
};

export default Preview;
