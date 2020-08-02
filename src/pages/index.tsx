import React, { Component, useContext } from 'react';
import { Row, Col, Divider, Layout, Menu, Typography, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import styles from '../styles/index.module.scss';
import Sidebar from '../components/Sidebar';
import Preview from '../components/Preview';
import Section from '../components/Section';
import { globalContext, GlobalContext } from '../context/GlobalContextProvider';

const { Content } = Layout;

const IndexPage = () => {
    const context = useContext<GlobalContext>(globalContext);
    return (
        <Layout>
            <Sidebar />
            <Layout className={styles.section}>
                <Content className={styles.siteLayout}>
                    <Section {...context.findSectionById(context.activeSectionId)} />
                </Content>
            </Layout>
            <Layout className={styles.section}>
                <Content className={[styles.siteLayout, styles.siteLayoutBackground].join(' ')}>
                    <Preview />
                </Content>
            </Layout>
        </Layout>
    );
};

export default IndexPage;
