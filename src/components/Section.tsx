import React, { useState, useContext } from 'react';
import {
    Row,
    Col,
    Divider,
    Grid,
    Card,
    Typography,
    Button,
    Modal,
    Form,
    Dropdown,
    Select,
    Menu,
    Switch,
    Popover,
    Space,
    Tooltip,
} from 'antd';
import { PlusOutlined, FireOutlined, DownOutlined, RedoOutlined } from '@ant-design/icons';
import { globalContext, GlobalContext } from '../context/GlobalContextProvider';
import Field, { FieldProps } from '../components/Field';
import { FIELD_TYPES } from '../config/global';
import { faColumns, faCog, faCaretUp, faCaretDown, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const { Option } = Select;
const { Title } = Typography;
const { useBreakpoint } = Grid;

export interface SectionProps {
    id?: string;
    name?: string;
    nameToMarkdown?: boolean;
    collapsable?: boolean;
    fields?: Array<Array<FieldProps>>;
    changeColumnCount?: (sectionIndex: number, columnCount: number) => void;
}

export const generateSectionMarkdown = ({ fields }: Partial<SectionProps>, type: 'start' | 'end') => {
    const columnCount = fields && fields.length ? fields.length : 0;
    if (columnCount > 1 && type === 'start') return `<table><tr>`;
    else if (columnCount > 1 && type === 'end') return `</tr></table>`;
    else return '';
};

export const generateColumnMarkdown = (columns: Partial<FieldProps[][]>, type: 'start' | 'end') => {
    const columnCount = columns && columns.length ? columns.length : 0;
    if (columnCount > 1 && type === 'start')
        return `<td valign="top" width="${parseInt((100 / columnCount).toString())}%">\n\n`;
    else if (columnCount > 1 && type === 'end') return `\n\n</td>`;
    else return '';
};

export const generateSectionTitleMarkdown = (props: SectionProps) => {
    const { name, nameToMarkdown, collapsable } = props;
    if (nameToMarkdown && name && !collapsable) return `\n## ${name}  \n`;
    else if (nameToMarkdown && name && collapsable) return `<summary> ${name} </summary>`;
    else return '';
};

const Section = (section: SectionProps) => {
    const [activeSectionIndex, setActiveSectionIndex] = useState(0);
    const [activeColumnIndex, setActiveColumnIndex] = useState(0);
    const [addFieldVisible, setAddFieldVisibility] = useState(false);
    const [form] = Form.useForm();
    const context = useContext(globalContext) as GlobalContext;
    const screens = useBreakpoint();

    const buttonSize = screens.md ? 'middle' : 'small';

    const generateFields = (
        fields: [Required<Pick<FieldProps, 'type'>> & FieldProps],
        sectionIndex: number,
        columnIndex: number,
    ) => {
        if (!fields || !fields.length)
            return <>You have not added any fields in this section. Please add a new field to view it here.</>;
        return fields.map((field, fieldIndex) => (
            <Field
                props={field}
                sectionIndex={sectionIndex}
                columnIndex={columnIndex}
                fieldIndex={fieldIndex}
                key={`field-${sectionIndex}-${columnIndex}-${fieldIndex}`}
            />
        ));
    };

    const generateAddFieldForm = () => {
        return (
            <Form form={form} layout="vertical">
                <Form.Item name="type" label="Type" rules={[{ required: true }]}>
                    <Select placeholder="Select an option">
                        <Option value={FIELD_TYPES.TEXT}>Text</Option>
                        <Option value={FIELD_TYPES.IMAGE}> Image</Option>
                        <Option value={FIELD_TYPES.GITHUB_STATS}> Github Readme Stats</Option>
                        <Option value={FIELD_TYPES.SKILLS}> Skills</Option>
                        <Option value={FIELD_TYPES.SOCIAL}> Social</Option>
                        <Option value={FIELD_TYPES.PROFILE_VISITOR_COUNTER}> Visitor Counter</Option>
                        <Option value={FIELD_TYPES.BLOG_POST}> Dynamic blog post list</Option>
                        <Option value={FIELD_TYPES.SPOTIFY}> Spotify Listening</Option>
                        <Option value={FIELD_TYPES.SUPPORTME}> Support Me</Option>
                    </Select>
                </Form.Item>
            </Form>
        );
    };

    const addField = (
        formProps: FieldProps & Required<Pick<FieldProps, 'type'>>,
        sectionIndex: number,
        columnIndex: number,
    ) => {
        context.addField(
            {
                ...formProps,
            },
            sectionIndex,
            columnIndex,
        );
        setAddFieldVisibility(false);
    };

    const generateAddFieldModal = () => {
        return (
            <Modal
                title="New Field Options"
                visible={addFieldVisible}
                okText="Add Field"
                onOk={() => {
                    form.validateFields()
                        .then((values: FieldProps & Required<Pick<FieldProps, 'type'>>) => {
                            form.resetFields();
                            addField(values, activeSectionIndex, activeColumnIndex);
                        })
                        .catch(info => {
                            console.log('Validate Failed:', info);
                        });
                }}
                onCancel={() => setAddFieldVisibility(false)}
            >
                {generateAddFieldForm()}
            </Modal>
        );
    };

    const generateColumnCards = (fields: [[Required<Pick<FieldProps, 'type'>> & FieldProps]], sectionIndex: number) => {
        if (!fields || !fields.length) fields = [([] as unknown) as [Required<Pick<FieldProps, 'type'>> & FieldProps]];
        return (
            <div style={{ height: 'calc(100vh - 150px)', overflowY: 'scroll' }}>
                {fields.map((field, columnIndex) => {
                    return (
                        <Card
                            key={columnIndex}
                            title={`Column #${columnIndex + 1}`}
                            extra={
                                <Tooltip placement="top" title={<span>Add a Field</span>}>
                                    <Button
                                        type="primary"
                                        ghost
                                        block
                                        style={{ borderStyle: 'dashed' }}
                                        onClick={() => {
                                            setActiveColumnIndex(columnIndex);
                                            setActiveSectionIndex(sectionIndex);
                                            setAddFieldVisibility(true);
                                        }}
                                        size={buttonSize}
                                    >
                                        <PlusOutlined /> Field
                                    </Button>
                                </Tooltip>
                            }
                        >
                            {generateFields(field, sectionIndex, columnIndex)}
                        </Card>
                    );
                })}
                {generateAddFieldModal()}
            </div>
        );
    };

    const columnCountMenu = (
        <Menu>
            <Menu.Item key="1" onClick={() => section.changeColumnCount(context.activeSectionIndex, 1)}>
                1
            </Menu.Item>
            <Menu.Item key="2" onClick={() => section.changeColumnCount(context.activeSectionIndex, 2)}>
                2
            </Menu.Item>
            <Menu.Item key="3" onClick={() => section.changeColumnCount(context.activeSectionIndex, 3)}>
                3
            </Menu.Item>
        </Menu>
    );

    const toggleNameToMarkdown = (sectionIndex: number) => {
        context.modifySection(
            {
                ...section,
                nameToMarkdown: section.nameToMarkdown ? false : true,
            },
            sectionIndex,
        );
    };

    const toggleCollapsable = (sectionIndex: number) => {
        context.modifySection(
            {
                ...section,
                collapsable: section.collapsable ? false : true,
            },
            sectionIndex,
        );
    };

    const generateSectionSettings = (sectionIndex: number) => {
        return (
            <table>
                <tbody>
                    <tr>
                        <td>
                            <Dropdown overlay={columnCountMenu}>
                                <Button
                                    style={{ paddingLeft: 5, paddingRight: 5, width: 50 }}
                                    icon={
                                        <>
                                            <FontAwesomeIcon icon={faColumns} /> <DownOutlined />
                                        </>
                                    }
                                    size={buttonSize}
                                />
                            </Dropdown>
                        </td>
                        <td>Number of columns</td>
                    </tr>
                    <tr>
                        <td>
                            <Switch
                                style={{ paddingLeft: 5, paddingRight: 5, marginRight: 10, marginTop: 10 }}
                                checked={section.nameToMarkdown}
                                onChange={() => toggleNameToMarkdown(sectionIndex)}
                            />
                        </td>
                        <td> Use section name in markdown</td>
                    </tr>
                    <tr>
                        <td>
                            <Switch
                                style={{ paddingLeft: 5, paddingRight: 5, marginRight: 10, marginTop: 10 }}
                                checked={section.collapsable}
                                onChange={() => toggleCollapsable(sectionIndex)}
                            />
                        </td>
                        <td> Make section collapsable</td>
                    </tr>
                    <tr>
                        <td>
                            <Tooltip placement="top" title={<span>Shift Section Upwards</span>}>
                                <Button
                                    icon={
                                        <>
                                            <FontAwesomeIcon icon={faCaretUp} />
                                        </>
                                    }
                                    onClick={() => context.shiftSection('up', sectionIndex)}
                                    size={buttonSize}
                                />
                            </Tooltip>
                            <Tooltip placement="top" title={<span>Shift Section Downwards</span>}>
                                <Button
                                    icon={
                                        <>
                                            <FontAwesomeIcon icon={faCaretDown} />
                                        </>
                                    }
                                    onClick={() => context.shiftSection('down', sectionIndex)}
                                    size={buttonSize}
                                />
                            </Tooltip>
                        </td>
                        <td>Re-order sections</td>
                    </tr>
                    <tr>
                        <td>
                            <Button
                                icon={
                                    <>
                                        <FontAwesomeIcon icon={faTimes} />
                                    </>
                                }
                                onClick={() => context.deleteSection(sectionIndex)}
                                size={buttonSize}
                            />
                        </td>
                        <td>Remove section</td>
                    </tr>
                </tbody>
            </table>
        );
    };

    const templateMenu = (
        <Menu>
            <Menu.Item onClick={() => context.useTemplate('TEMPLATE_1')}>Template 1</Menu.Item>
            <Menu.Item onClick={() => context.useTemplate('TEMPLATE_2')}>Template 2</Menu.Item>
        </Menu>
    );

    if (!section)
        return (
            <>You have not added any sections yet. Please add a new section from the left sidebar to view it here.</>
        );
    else
        return (
            <div>
                <Row justify="space-between">
                    <Col>
                        <Title level={3}>{section.name} Section</Title>
                    </Col>
                    <Col>
                        <Space>
                            <Dropdown overlay={templateMenu} placement="bottomCenter" arrow>
                                <Button type="primary" ghost block size={buttonSize}>
                                    <FireOutlined /> Use template
                                </Button>
                            </Dropdown>

                            <Button type="primary" ghost block onClick={context.resetSections} size={buttonSize}>
                                <RedoOutlined /> Start fresh
                            </Button>
                            <Popover
                                content={() => generateSectionSettings(context.activeSectionIndex)}
                                title="Section Settings"
                            >
                                <Button
                                    size={buttonSize}
                                    icon={
                                        <>
                                            <FontAwesomeIcon icon={faCog} />
                                        </>
                                    }
                                />
                            </Popover>
                        </Space>
                    </Col>
                </Row>

                <Divider />

                {generateColumnCards(
                    section.fields as [[Required<Pick<FieldProps, 'type'>> & FieldProps]],
                    context.activeSectionIndex,
                )}
            </div>
        );
};

export default Section;
