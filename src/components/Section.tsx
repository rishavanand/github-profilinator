import React, { Component, useState, useContext } from 'react';
import { Row, Col, Divider, Layout, Card, Typography, Button, Modal, Form, Input, Select } from 'antd';
import { PlusOutlined, FireOutlined } from '@ant-design/icons';
import { globalContext, GlobalContext } from '../context/GlobalContextProvider';
import Field, { FieldProps } from '../components/Field';
import { SECTION_TYPES, FIELD_TYPES } from '../config/global';
import { v4 as uuidv4 } from 'uuid';
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
}

const Section = (section: SectionProps) => {
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
                <Form.Item name="name" label="Name" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="type" label="Type" rules={[{ required: true }]}>
                    <Select placeholder="Select an option">
                        <Option value={SECTION_TYPES.BANNER}>Banner</Option>
                        <Option value={SECTION_TYPES.ABOUT_ME}> About Me</Option>
                        <Option value={SECTION_TYPES.SKILLS}> Skills</Option>
                    </Select>
                </Form.Item>
            </Form>
        );
    };

    // const addField = (formProps: FieldProps & Required<Pick<FieldProps, 'type'>>) => {
    //     context.addField({
    //         ...formProps,
    //         id: uuidv4(),
    //         sectionId: id
    //     });
    //     setAddFieldVisibility(false);
    // };

    // const generateAddFieldModal = (columnId: number) => {
    //     return (
    //         <Modal
    //             title="New Section Options"
    //             visible={addFieldVisible}
    //             okText="Add Field"
    //             onOk={() => {
    //                 form.validateFields()
    //                     .then((values: FieldProps & Required<Pick<FieldProps, 'type'>>) => {
    //                         form.resetFields();
    //                         addField(values);
    //                     })
    //                     .catch(info => {
    //                         console.log('Validate Failed:', info);
    //                     });
    //             }}
    //             onCancel={() => setAddFieldVisibility(false)}
    //         >
    //             {generateAddFieldForm()}
    //         </Modal>
    //     );
    // };

    const generateColumnCards = (fields: FieldProps[][], sectionIndex: number) => {
        if (!fields || !fields.length) fields = [[]];
        return fields.map((field, columnIndex) => {
            return (
                <Card
                    key={columnIndex}
                    title={`Column #${columnIndex + 1}`}
                    style={{ marginBottom: '25px' }}
                    // extra={
                    //     <Button type="primary" ghost block style={{ borderStyle: 'dashed' }} onClick={() => generateAddFieldModal(j)}>
                    //         <PlusOutlined /> Field
                    //     </Button>
                    // }
                >
                    {generateFields(field, sectionIndex, columnIndex)}
                </Card>
            );
        });
    };

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
                        <Button type="primary" ghost block>
                            <FireOutlined /> Populate example fields
                        </Button>
                    </Col>
                </Row>
                <Divider />
                {generateColumnCards(section.fields, section.sectionIndex)}
            </>
        );
};

export default Section;
