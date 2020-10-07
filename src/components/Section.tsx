import React, { Component, useState, useContext } from 'react';
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
import { v4 as uuidv4 } from 'uuid';
import { faColumns, faCog, faCaretUp, faCaretDown, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const { Option } = Select;
const { Title } = Typography;
const { useBreakpoint } = Grid;

export interface SectionProps {
    id?: string;
    sectionIndex?: number;
    name?: string;
    nameToMarkdown?: boolean;
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
        return `<td valign="top" width="${parseInt((100 / columnCount).toString())}%">`;
    else if (columnCount > 1 && type === 'end') return `</td>`;
    else return '';
};

export const generateSectionTitleMarkdown = (props: SectionProps) => {
    const { name, nameToMarkdown } = props;
    if (nameToMarkdown && name) return `\n## ${name}  \n`;
    else return '';
};

const Section = (section: SectionProps & Required<Pick<SectionProps, 'sectionIndex'>>) => {
    const [activeSectionIndex, setActiveSectionIndex] = useState(0);
    const [activeColumnIndex, setActiveColumnIndex] = useState(0);
    const [addFieldVisible, setAddFieldVisibility] = useState(false);
    const [form] = Form.useForm();
    const context = useContext(globalContext) as GlobalContext;
    const screens = useBreakpoint();

    const buttonSize = screens.md ? 'middle' : 'small';

    const generateFields = (
        fields: [
            Required<Pick<FieldProps, 'id' | 'type' | 'sectionIndex' | 'columnIndex' | 'fieldIndex' | 'sectionId'>> &
                FieldProps,
        ],
        sectionIndex: number,
        columnIndex: number,
    ) => {
        if (!fields || !fields.length)
            return <>You have not added any fields in this section. Please add a new field to view it here.</>;
        return fields.map((field, fieldIndex) => (
            <Field
                {...field}
                sectionIndex={sectionIndex}
                columnIndex={columnIndex}
                fieldIndex={fieldIndex}
                key={field.id}
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

    const addField = (formProps: FieldProps & Required<Pick<FieldProps, 'type' | 'sectionIndex' | 'columnIndex'>>) => {
        context.addField({
            ...formProps,
            id: uuidv4(),
        });
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
                            addField({ ...values, sectionIndex: activeSectionIndex, columnIndex: activeColumnIndex });
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

    const generateColumnCards = (
        fields: [
            [
                Required<
                    Pick<FieldProps, 'id' | 'type' | 'sectionIndex' | 'columnIndex' | 'fieldIndex' | 'sectionId'>
                > &
                    FieldProps,
            ],
        ],
        sectionIndex: number,
    ) => {
        if (!fields || !fields.length)
            fields = [
                ([] as unknown) as [
                    Required<
                        Pick<FieldProps, 'type' | 'id' | 'sectionIndex' | 'columnIndex' | 'fieldIndex' | 'sectionId'>
                    > &
                        FieldProps,
                ],
            ];
        return (
            <>
                {fields.map((field, columnIndex) => {
                    return (
                        <Card
                            key={columnIndex}
                            title={`Column #${columnIndex + 1}`}
                            style={{ marginBottom: '25px' }}
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
            </>
        );
    };

    const columnCountMenu = (
        <Menu>
            <Menu.Item key="1" onClick={() => section.changeColumnCount(section.sectionIndex, 1)}>
                1
            </Menu.Item>
            <Menu.Item key="2" onClick={() => section.changeColumnCount(section.sectionIndex, 2)}>
                2
            </Menu.Item>
            <Menu.Item key="3" onClick={() => section.changeColumnCount(section.sectionIndex, 3)}>
                3
            </Menu.Item>
        </Menu>
    );

    const toggleNameToMarkdown = () => {
        context.modifySection({
            ...section,
            nameToMarkdown: section.nameToMarkdown ? false : true,
        });
    };

    const generateSectionSettings = () => {
        return (
            <table>
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
                            onChange={toggleNameToMarkdown}
                        />
                    </td>
                    <td> Use section name in markdown</td>
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
                                onClick={() => context.shiftSection(section, 'up')}
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
                                onClick={() => context.shiftSection(section, 'down')}
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
                            onClick={() => context.deleteSection(section)}
                            size={buttonSize}
                        />
                    </td>
                    <td>Remove section</td>
                </tr>
            </table>
        );
    };

    if (!section)
        return (
            <>You have not added any sections yet. Please add a new section from the left sidebar to view it here.</>
        );
    else
        return (
            <div
                style={{
                    minHeight: '100vh',
                }}
            >
                <Row justify="space-between">
                    <Col>
                        <Title level={3}>{section.name} Section</Title>
                    </Col>
                    <Col>
                        <Space>
                            <Button type="primary" ghost block onClick={context.useTemplate} size={buttonSize}>
                                <FireOutlined /> Use template
                            </Button>

                            <Button type="primary" ghost block onClick={context.resetSections} size={buttonSize}>
                                <RedoOutlined /> Start fresh
                            </Button>
                            <Popover content={generateSectionSettings} title="Section Settings">
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
                    section.fields as [
                        [
                            Required<
                                Pick<
                                    FieldProps,
                                    'id' | 'type' | 'sectionIndex' | 'columnIndex' | 'fieldIndex' | 'sectionId'
                                >
                            > &
                                FieldProps,
                        ],
                    ],
                    section.sectionIndex,
                )}
            </div>
        );
};

export default Section;
