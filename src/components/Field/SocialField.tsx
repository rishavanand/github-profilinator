import React from 'react';
import { Input, Row, Col, Button, Dropdown, Menu, Form, Tooltip } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignLeft } from '@fortawesome/free-solid-svg-icons';
import { FieldProps } from '.';
import { SOCIAL_SITE_IDS, SOCIAL_SITES } from '../../config/social';

const { TextArea } = Input;

export enum SOCIAL_FIELD_ALIGNMENT {
    LEFT = 'left',
    CENTRE = 'center',
    RIGHT = 'right',
}

export enum SOCIAL_FIELD_SIZE {
    SMALL = '25',
    MEDIUM = '50',
    LARGE = '75',
}

export interface SocialFieldOptions {
    size?: SOCIAL_FIELD_SIZE;
    alignment?: SOCIAL_FIELD_ALIGNMENT;
}

export interface SocialFieldData {
    sites: {
        [key: string]: {
            id?: SOCIAL_SITE_IDS;
            username?: string;
        };
    };
}

export interface SocialFieldProps extends FieldProps {
    id?: string;
    data?: SocialFieldData;
    options?: SocialFieldOptions;
}

export const generateAlignmentTags = (alignment: SOCIAL_FIELD_ALIGNMENT, type: 'start' | 'end') => {
    if ((alignment === SOCIAL_FIELD_ALIGNMENT.CENTRE || alignment === SOCIAL_FIELD_ALIGNMENT.RIGHT) && type === 'start')
        return `<div align="${alignment}">\n`;
    else if (
        (alignment === SOCIAL_FIELD_ALIGNMENT.CENTRE || alignment === SOCIAL_FIELD_ALIGNMENT.RIGHT) &&
        type === 'end'
    )
        return `  \n</div>`;
    else return '';
};

export const generateSocialTags = (data: SocialFieldData = { sites: {} }, options: SocialFieldOptions = {}) => {
    const sites = data.sites ? Object.keys(data.sites) : [];
    return sites
        .filter(siteId => data.sites[siteId]?.username)
        .map(
            siteId =>
                `<a href="${SOCIAL_SITES[siteId].href(data.sites[siteId].username!)}" target="_blank">\n<img src=${
                    SOCIAL_SITES[siteId].shieldBadge
                } alt=${siteId} style="margin-bottom: 5px;" />\n</a>`,
        )
        .join('\n');
};

export const generateSocialFieldMarkdown = ({ data, options = {} }: SocialFieldProps) => {
    if (!options) options = {};
    if (!options.alignment) options.alignment = SOCIAL_FIELD_ALIGNMENT.LEFT;
    return (
        `${generateAlignmentTags(options.alignment, 'start')}` +
        `${generateSocialTags(data, options)}` +
        `${generateAlignmentTags(options.alignment, 'end')}` +
        `  \n`
    );
};

export const SocialField = ({
    fieldProps,
    modifyField,
}: {
    fieldProps: SocialFieldProps;
    modifyField: (filedProps: SocialFieldProps) => void;
}) => {
    const localSocialFieldProps: typeof fieldProps = {
        options: {},
        data: {
            sites: {},
        },
        ...fieldProps,
    };

    const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const id = event.target.name;
        const value = event.target.value;
        if (localSocialFieldProps?.data && !localSocialFieldProps?.data?.sites[id])
            localSocialFieldProps.data.sites[id] = {};
        if (localSocialFieldProps.data && value)
            localSocialFieldProps.data.sites[id] = {
                ...localSocialFieldProps.data.sites[id],
                username: value,
            };
        else if (localSocialFieldProps.data) delete localSocialFieldProps.data.sites[id];
        modifyField({
            ...localSocialFieldProps,
        });
    };

    const changeAlignment = (alignment: SOCIAL_FIELD_ALIGNMENT) => {
        const localProps = { ...localSocialFieldProps };
        if (!localProps.options) localProps.options = {};
        localProps.options.alignment = alignment;
        modifyField(localProps);
    };

    const generateSocialInputs = () => {
        const socialSites = Object.keys(SOCIAL_SITES);
        return socialSites.map(siteId => {
            const site = SOCIAL_SITES[siteId];
            return (
                <Form.Item key={siteId} label={site.title}>
                    <TextArea
                        rows={1}
                        autoSize={true}
                        name={siteId}
                        value={
                            localSocialFieldProps.data && localSocialFieldProps.data.sites[siteId]
                                ? localSocialFieldProps.data.sites[siteId].username
                                : ''
                        }
                        onChange={onChange}
                    />
                </Form.Item>
            );
        });
    };

    const alignmentMenu = (
        <Menu>
            <Menu.Item key="1" onClick={() => changeAlignment(SOCIAL_FIELD_ALIGNMENT.LEFT)}>
                Left
            </Menu.Item>
            <Menu.Item key="2" onClick={() => changeAlignment(SOCIAL_FIELD_ALIGNMENT.CENTRE)}>
                Centre
            </Menu.Item>
            <Menu.Item key="3" onClick={() => changeAlignment(SOCIAL_FIELD_ALIGNMENT.RIGHT)}>
                Right
            </Menu.Item>
        </Menu>
    );

    return (
        <>
            <Row justify="space-between" style={{ marginBottom: 10 }}>
                <Col>
                    <Dropdown overlay={alignmentMenu}>
                        <Tooltip placement="top" title={<span>Alignment</span>}>
                            <Button
                                style={{ paddingLeft: 5, paddingRight: 5, width: 50 }}
                                icon={
                                    <>
                                        <FontAwesomeIcon icon={faAlignLeft} /> <DownOutlined />
                                    </>
                                }
                            />
                        </Tooltip>
                    </Dropdown>
                </Col>
            </Row>
            <Form layout="vertical">{generateSocialInputs()}</Form>
        </>
    );
};

export default SocialField;
