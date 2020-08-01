import React, { Component } from 'react';
import { Row, Col, Divider, Layout, Menu, Typography, Button } from 'antd';
import { FireOutlined } from '@ant-design/icons';

const { Header, Sider, Content } = Layout;
const { Title, Paragraph } = Typography;

class Preview extends Component {
    render() {
        return (
            <>
                <Row justify="space-between">
                    <Col>
                        <Title level={3}>Preview</Title>
                    </Col>
                    <Col>
                        <Button type="primary">
                            <FireOutlined /> Generate README.md
                        </Button>
                    </Col>
                </Row>
                <Divider />
                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel mi ullamcorper, accumsan ex
                    nec, fringilla lectus. Nullam magna eros, sollicitudin ut iaculis sit amet, suscipit id ante. Morbi
                    dignissim tellus et placerat cursus. In ac aliquet dolor, et semper est. Integer rutrum diam ex.
                    Nullam tempor nisi dictum, semper sapien a, maximus odio. Ut ut tincidunt lorem, nec egestas enim.
                    Vestibulum ultrices eleifend odio, at aliquam massa gravida at. Vivamus nulla velit, congue sed
                    tristique a, posuere at nisi. Morbi non aliquet libero. In ut ullamcorper augue, sed sollicitudin
                    sapien. Aliquam sed hendrerit ex, sit amet egestas neque. Nulla sit amet ligula eget nibh rhoncus
                    tincidunt. Proin pharetra nisl et est dignissim malesuada at nec neque. Cras non pulvinar sapien, id
                    auctor sapien. Pellentesque ac ultricies ante, a vehicula mauris. Vivamus sagittis nibh eu ipsum
                    maximus, sit amet ultrices neque ullamcorper. Donec eu sem eu massa viverra mattis non nec sapien.
                    Sed quis libero pharetra, condimentum neque sit amet, interdum felis. Fusce condimentum, velit eget
                    facilisis hendrerit, odio sem eleifend nibh, nec consectetur mi dolor non dolor. Vestibulum semper
                    mi in interdum finibus. Aliquam ex est, feugiat in ultricies id, volutpat ut tellus. Morbi eu odio
                    sed sapien egestas tristique. Nullam purus est, consequat vel auctor sit amet, sodales sit amet
                    odio. In feugiat magna non tincidunt congue. Vestibulum vulputate nec velit eu venenatis.
                    Suspendisse sed lacinia mauris, et suscipit elit. Curabitur urna augue, sodales id arcu vitae,
                    mattis mollis leo. Proin vel posuere nisi, non consequat nisl. Mauris gravida iaculis nulla, non
                    feugiat neque commodo nec. Etiam sit amet elit sed ipsum condimentum posuere et vel ipsum. Curabitur
                    in mollis lorem. Maecenas mattis massa vel magna commodo, in eleifend elit tincidunt. Maecenas et
                    faucibus lorem. Sed mi justo, pretium eget nisi a, tristique maximus odio. Donec ipsum elit,
                    ultricies in nibh quis, efficitur eleifend ante. Cras sollicitudin mattis magna sed maximus. Mauris
                    quis molestie lacus. Nulla tincidunt purus leo, eget porta lorem eleifend eget. Nam est arcu,
                    aliquam vel blandit at, porttitor nec diam. Maecenas mollis, odio at feugiat dignissim, lectus
                    lectus congue elit, cursus cursus felis diam at quam. Aenean elementum tincidunt diam, vitae
                    venenatis nulla venenatis ac. Mauris malesuada ut mi et viverra. Curabitur gravida a odio vitae
                    dictum. Phasellus libero mi, aliquet ut nisi id, cursus ultrices sem. Duis consectetur nec nulla sit
                    amet scelerisque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
                    turpis egestas. Aenean vel orci vitae justo convallis congue nec ac elit. Pellentesque venenatis
                    gravida laoreet. Suspendisse ac arcu accumsan, suscipit lorem et, auctor lacus. Sed cursus sodales
                    placerat. Integer vestibulum mauris id dapibus fringilla.
                </Paragraph>
            </>
        );
    }
}

export default Preview;
