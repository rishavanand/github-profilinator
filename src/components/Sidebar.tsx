import React, { useState, useContext } from 'react';
import { Form, Input, Select, Layout, Menu, Button, Divider, Modal, Tooltip } from 'antd';
import { CloseCircleOutlined, PlusOutlined } from '@ant-design/icons';
import styles from '../styles/sidebar.module.scss';
import { globalContext, GlobalContext } from '../context/GlobalContextProvider';
import { v4 as uuidv4 } from 'uuid';
import { SectionProps } from './Section';

const { TextArea } = Input;
const { Sider } = Layout;
const { Option } = Select;

export const Sidebar = () => {
    const [addSectionVisible, setAddSectionVisibility] = useState(false);
    const [form] = Form.useForm();
    const context = useContext(globalContext) as GlobalContext;

    const addSection = (formValues: { name: string }) => {
        context.addSection({
            ...formValues,
            id: uuidv4(),
        });
        setAddSectionVisibility(false);
    };

    const generateMenu = (activeSectionIndex: number, sections: SectionProps[]) => {
        return (
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={[activeSectionIndex.toString()]}
                onSelect={({ item, key }) => context.changeActiveSection(parseInt(key.toString()))}
            >
                {sections.map((section, sectionIndex) => {
                    return <Menu.Item key={sectionIndex}>{section.name}</Menu.Item>;
                })}
            </Menu>
        );
    };

    const generateAddSectionForm = () => {
        return (
            <Form form={form} layout="vertical">
                <Form.Item name="name" label="Name" rules={[{ required: true }]}>
                    <TextArea rows={1} autoSize={true} />
                </Form.Item>
            </Form>
        );
    };

    const generateAddSectionModal = () => {
        return (
            <Modal
                title="New Section Options"
                visible={addSectionVisible}
                okText="Add section"
                onOk={() => {
                    form.validateFields()
                        .then((values: { name: string }) => {
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
    };

    return (
        <Sider collapsible breakpoint="md" collapsedWidth={0}>
            <div className={styles.logo}>
                <h2>GITHUB</h2>
                <h1>PROFILINATOR</h1>
            </div>
            {generateMenu(context.activeSectionIndex, context.sections)}
            <Divider />
            <div className={styles.buttonContainer}>
                <Tooltip placement="top" title={<span>Add a Section</span>}>
                    <Button
                        type="dashed"
                        ghost
                        block
                        className={styles.addSectionButton}
                        onClick={() => setAddSectionVisibility(true)}
                    >
                        <PlusOutlined />
                        Section
                    </Button>
                </Tooltip>
            </div>
            {generateAddSectionModal()}
        </Sider>
    );
};

export default Sidebar;
