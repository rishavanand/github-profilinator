import React, { useContext, useState, useEffect, useRef } from 'react';
import { Row, Col, Layout, Spin, BackTop, Grid } from 'antd';
import styles from '../styles/index.module.scss';
import Sidebar from '../components/Sidebar';
import Preview from '../components/Preview';
import Section from '../components/Section';
import { globalContext, GlobalContext } from '../context/GlobalContextProvider';
import { Helmet } from 'react-helmet';
import { faEye, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const { Content } = Layout;
const { useBreakpoint } = Grid;
const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop);

const IndexPage = () => {
    const context = useContext<GlobalContext>(globalContext);
    const [initialLoad, setInitialLoad] = useState(false);
    const screens = useBreakpoint();
    const previewRef = useRef(null);

    useEffect(() => {
        setInitialLoad(true);
    });

    const MobileNavigators = () => {
        const showMobileNavigatorButtons = screens.xs ? true : false;
        if (showMobileNavigatorButtons)
            return (
                <>
                    <BackTop
                        visibilityHeight={-1}
                        style={{
                            padding: 10,
                            backgroundColor: '#1890ff',
                            borderRadius: 5,
                            color: 'white',
                        }}
                    >
                        <FontAwesomeIcon icon={faArrowUp} style={{ fontSize: '1.2rem' }} />
                    </BackTop>
                </>
            );
        else return <></>;
    };

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Github Profilinator</title>
                <link rel="canonical" href="https://profilinator.rishav.dev/" />
            </Helmet>
            <div className={styles.loading} style={{ display: initialLoad ? 'none' : 'flex' }}>
                <Spin size="large" />
            </div>
            <Layout>
                <Sidebar />
                <Content style={{ padding: 16 }}>
                    <Row gutter={[16, 16]}>
                        <Col md={12} sm={24}>
                            <Section
                                {...context.sections[context.activeSectionIndex]}
                                sectionIndex={context.activeSectionIndex}
                                changeColumnCount={context.changeColumnCount}
                            />
                        </Col>
                        <Col md={12} sm={24}>
                            <Preview scrollRef={previewRef} />
                        </Col>
                    </Row>
                    <MobileNavigators />
                </Content>
            </Layout>
        </>
    );
};

export default IndexPage;
