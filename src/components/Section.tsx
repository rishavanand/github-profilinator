import React, { Component, useState, useContext } from 'react';
import { Row, Col, Divider, Layout, Card, Typography, Button, Modal, Form, Dropdown, Select, Menu } from 'antd';
import { PlusOutlined, FireOutlined, DownOutlined } from '@ant-design/icons';
import { globalContext, GlobalContext } from '../context/GlobalContextProvider';
import Field, { FieldProps } from '../components/Field';
import { SECTION_TYPES, FIELD_TYPES } from '../config/global';
import { v4 as uuidv4 } from 'uuid';
import { faColumns } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormProps } from 'antd/lib/form';

const { Option } = Select;
const { Header, Sider, Content } = Layout;
const { Title, Paragraph } = Typography;

export interface SectionProps {
    id: string;
    sectionIndex?: number;
    name: string;
    type: SECTION_TYPES;
    fields?: Array<Array<FieldProps>>;
    changeColumnCount: (sectionIndex: number, columnCount: number) => void;
}

export const generateSectionMarkdown = ({ fields }: Partial<SectionProps>, type: 'start' | 'end') => {
    const columnCount = fields && fields.length ? fields.length : 0;
    if (columnCount > 1 && type === 'start') return `<table><tr>`;
    else if (columnCount > 1 && type === 'end') return `</tr></table>`;
    else return '';
};

export const generateColumnMarkdown = (columns: Partial<FieldProps[][]>, type: 'start' | 'end') => {
    const columnCount = columns && columns.length ? columns.length : 0;
    if (columnCount > 1 && type === 'start') return `<td valign="top" width="50%">  \n\n`;
    else if (columnCount > 1 && type === 'end') return `</td>`;
    else return '';
};

const Section = (section: SectionProps) => {
    const [activeSectionIndex, setActiveSectionIndex] = useState(0);
    const [activeColumnIndex, setActiveColumnIndex] = useState(0);
    const [addFieldVisible, setAddFieldVisibility] = useState(false);
    const [form] = Form.useForm();
    const context = useContext(globalContext) as GlobalContext;

    const generateFields = (fields: FieldProps[], sectionIndex: number, columnIndex: number) => {
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

    const generateColumnCards = (fields: FieldProps[][], sectionIndex: number) => {
        if (!fields || !fields.length) fields = [[]];
        return (
            <>
                {fields.map((field, columnIndex) => {
                    return (
                        <Card
                            key={columnIndex}
                            title={`Column #${columnIndex + 1}`}
                            style={{ marginBottom: '25px' }}
                            extra={
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
                                >
                                    <PlusOutlined /> Field
                                </Button>
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
        </Menu>
    );

    if (!section)
        return (
            <>You have not added any sections yet. Please add a new section from the left sidebar to view it here.</>
        );
    else
        return (
            <>
                <Row justify="space-between">
                    <Col>
                        <Title level={3}>{section.name} Section</Title>
                    </Col>
                    <Col>
                        <Row>
                            <Col>
                                <Dropdown overlay={columnCountMenu}>
                                    <Button
                                        style={{ paddingLeft: 5, paddingRight: 5, width: 50, marginRight: 10 }}
                                        icon={
                                            <>
                                                <FontAwesomeIcon icon={faColumns} /> <DownOutlined />
                                            </>
                                        }
                                    />
                                </Dropdown>
                            </Col>
                            <Col>
                                <Button type="primary" ghost block>
                                    <FireOutlined /> Use template
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Divider />
                {generateColumnCards(section.fields, section.sectionIndex)}
            </>
        );
};

export default Section;
