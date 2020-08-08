import React, { useContext } from 'react';
import { Input, Row, Col, Button, Dropdown, Menu, Form } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignLeft } from '@fortawesome/free-solid-svg-icons';
import { FieldProps } from '.';
import { SOCIAL_SITE_IDS, SOCIAL_SITES } from '../../config/social';
import { globalContext } from '../../context/GlobalContextProvider';

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
    sites?: {
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
        return `<div align="${alignment}">  \n`;
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
        .map(
            siteId =>
                `<a href="${SOCIAL_SITES[siteId].href(data.sites[siteId].username)}" target="_blank"><img src=${
                    SOCIAL_SITES[siteId].shieldBadge
                } alt=${siteId} style="margin-bottom: 5px;" /></a>`,
        )
        .join('\n');
};

export const generateSocialFieldMarkdown = ({ data, options = {} }: SocialFieldProps) => {
    return (
        `${generateAlignmentTags(options.alignment, 'start')}` +
        `${generateSocialTags(data, options)}` +
        `${generateAlignmentTags(options.alignment, 'end')}` +
        `  \n`
    );
};

export const SocialField = (
    socialFieldProps: SocialFieldProps &
        Required<Pick<SocialFieldProps, 'id' | 'sectionId' | 'sectionIndex' | 'columnIndex' | 'fieldIndex' | 'type'>>,
) => {
    const { modifyField } = useContext(globalContext);

    const localSocialFieldProps: typeof socialFieldProps = {
        options: {},
        data: {
            sites: {},
        },
        ...socialFieldProps,
    };

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const id = event.target.name;
        const value = event.target.value;
        if (!localSocialFieldProps.data.sites[id]) localSocialFieldProps.data.sites[id] = {};
        if (value)
            localSocialFieldProps.data.sites[id] = {
                ...localSocialFieldProps.data.sites[id],
                username: value,
            };
        else delete localSocialFieldProps.data.sites[id];
        modifyField({
            ...localSocialFieldProps,
        });
    };

    const changeAlignment = (alignment: typeof localSocialFieldProps.options.alignment) => {
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
                <Input
                    key={siteId}
                    suffix={site.title}
                    name={siteId}
                    value={
                        localSocialFieldProps.data.sites[siteId]
                            ? localSocialFieldProps.data.sites[siteId].username
                            : ''
                    }
                    onChange={onChange}
                />
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
                        <Button
                            style={{ paddingLeft: 5, paddingRight: 5, width: 50 }}
                            icon={
                                <>
                                    <FontAwesomeIcon icon={faAlignLeft} /> <DownOutlined />
                                </>
                            }
                        />
                    </Dropdown>
                </Col>
            </Row>
            <Form>{generateSocialInputs()}</Form>
        </>
    );
};

export default SocialField;
