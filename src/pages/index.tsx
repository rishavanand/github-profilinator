import React, { Component, useContext, useState, useEffect } from 'react';
import { Row, Col, Divider, Layout, Menu, Typography, Button, Spin } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import styles from '../styles/index.module.scss';
import Sidebar from '../components/Sidebar';
import Preview from '../components/Preview';
import Section from '../components/Section';
import { globalContext, GlobalContext } from '../context/GlobalContextProvider';

const { Content } = Layout;

const IndexPage = () => {
    const context = useContext<GlobalContext>(globalContext);
    const [initialLoad, setInitialLoad] = useState(false);

    useEffect(() => {
        setInitialLoad(true);
    });

    return (
        <>
            <div className={styles.loading} style={{ display: initialLoad ? 'none' : 'flex' }}>
                <Spin size="large" />
            </div>
            <Layout>
                <Sidebar />
                <Layout className={styles.section}>
                    <Content className={styles.siteLayout}>
                        <Section
                            {...context.sections[context.activeSectionIndex]}
                            sectionIndex={context.activeSectionIndex}
                            changeColumnCount={context.changeColumnCount}
                        />
                    </Content>
                </Layout>
                <Layout className={styles.section}>
                    <Content className={[styles.siteLayout, styles.siteLayoutBackground].join(' ')}>
                        <Preview />
                    </Content>
                </Layout>
            </Layout>
        </>
    );
};

export default IndexPage;
