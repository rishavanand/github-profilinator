import React, { Component, useState, useContext } from 'react';
import { Row, Col, Divider, Layout, Card, Typography, Button } from 'antd';
import { PlusOutlined, FireOutlined } from '@ant-design/icons';
import { globalContext, GlobalContext } from '../context/GlobalContextProvider';
import Field, { FieldProps } from '../components/Field';
import { SECTION_TYPES, FIELD_TYPES } from '../config/global';

const { Header, Sider, Content } = Layout;
const { Title, Paragraph } = Typography;

export interface SectionProps {
    id: string;
    name: string;
    columnCount: number;
    type: SECTION_TYPES;
    fields?: FieldProps[];
}

const Section = ({ id, name, columnCount, type, fields }: SectionProps) => {
    const [error, setError] = useState('');
    const context = useContext(globalContext) as GlobalContext;

    const generateFields = (fields: FieldProps[]) => {
        if (!fields || !fields.length)
            return <>You have not added any fields in this section. Please add a new field to view it here.</>;
        return fields.map(field => <Field {...field} sectionId={id} key={field.id} />);
    };

    const generateColumnCards = (section: SectionProps) => {
        return new Array(section.columnCount).fill(1).map((i, j) => {
            return (
                <Card
                    key={j}
                    title={`Column #${j + 1}`}
                    style={{ marginBottom: '25px' }}
                    extra={
                        <Button type="primary" ghost block style={{ borderStyle: 'dashed' }}>
                            <PlusOutlined /> Field
                        </Button>
                    }
                >
                    {generateFields(section.fields)}
                </Card>
            );
        });
    };

    const section = context.sections.find(section => section.id === context.activeSectionId);

    if (!section) return <></>;
    else
        return (
            <>
                <Row justify="space-between">
                    <Col>
                        <Title level={3}>{section.name}</Title>
                    </Col>
                    <Col>
                        <Button type="primary" ghost block>
                            <FireOutlined /> Populate example fields
                        </Button>
                    </Col>
                </Row>
                <Divider />
                {generateColumnCards(section)}
            </>
        );
};

export default Section;
