import React, { useState, useContext } from 'react';
import { Form, Input, Select, Layout, Menu, Button, Divider, Modal } from 'antd';
import {
    CloseCircleOutlined,
    PlusOutlined
} from '@ant-design/icons';
import styles from '../styles/sidebar.module.scss';
import { globalContext, GlobalContext, SectionData } from '../context/GlobalContextProvider';
import { v4 as uuidv4 } from 'uuid';
import { SECTION_TYPES } from '../config/global';

const { Sider } = Layout;
const { Option } = Select;

export const Sidebar = () => {

    const [addSectionVisible, setAddSectionVisibility] = useState(false);
    const [form] = Form.useForm();
    const context = useContext(globalContext) as GlobalContext;

    const addSection = (formValues: { name: string, type: SECTION_TYPES }) => {
        const sections = context.sections;
        sections.push({
            ...formValues,
            id: uuidv4(),
            columnCount: 1
        });
        context.modifySections(sections);
        setAddSectionVisibility(false);
    }

    const generateMenu = (activeSectionId: string, sections: SectionData[]) => {
        return (
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={[activeSectionId + 'MenuItem']}
                onSelect={({ item, key }) => context.changeActiveSection((key as string).replace('MenuItem', ''))}
            >
                {sections.map(section => {
                    return (
                        <Menu.Item key={`${section.id}MenuItem`}>
                            {section.name}
                        </Menu.Item>
                    );
                })}
            </Menu>
        )
    }

    const generateAddSectionForm = () => {
        return (
            <Form
                form={form}
                layout='vertical'
            >
                <Form.Item name="name" label="Name" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="type" label="Type" rules={[{ required: true }]}>
                    <Select
                        placeholder="Select an option"
                    >
                        <Option value={SECTION_TYPES.BANNER}>Banner</Option>
                        <Option value={SECTION_TYPES.ABOUT_ME} > About Me</Option>
                        <Option value={SECTION_TYPES.SKILLS} > Skills</Option>
                    </Select>
                </Form.Item>
            </Form>
        );
    }

    const generateAddSectionModal = () => {
        return (
            <Modal
                title='New Section Options'
                visible={addSectionVisible}
                okText='Add section'
                onOk={() => {
                    form
                        .validateFields()
                        .then((values: { name: string, type: SECTION_TYPES }) => {
                            form.resetFields();
                            addSection(values);
                        })
                        .catch(info => {
                            console.log('Validate Failed:', info);
                        });
                }}
                onCancel={() => setAddSectionVisibility(false)}
            >
                {generateAddSectionForm()}
            </Modal>
        );
    }

    return (

        < Sider >
            <div className={styles.logo}>
                <h2>GITHUB</h2>
                <h1>PROFILINATOR</h1>
            </div>
            {generateMenu(context.activeSectionId, context.sections)}
            <Divider />
            <div className={styles.buttonContainer}>
                <Button type='dashed' ghost block className={styles.addSectionButton} onClick={() => setAddSectionVisibility(true)}>
                    < PlusOutlined />Section
                        </Button>
            </div>
            {generateAddSectionModal()}
        </Sider>
    );
}

export default Sidebar;