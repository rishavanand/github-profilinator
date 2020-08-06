import React from 'react';
import { Input, Row, Col, Button, Dropdown, Menu, Form, Switch } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../../styles/fields.module.scss';
import { faCaretDown, faCaretUp, faTimes, faAlignLeft, faExpandArrowsAlt } from '@fortawesome/free-solid-svg-icons';
import { FieldProps } from '.';
import { SOCIAL_SITE_IDS, SOCIAL_SITES } from '../../config/social';

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
        return `<div align="${alignment}">`;
    else if (
        (alignment === SOCIAL_FIELD_ALIGNMENT.CENTRE || alignment === SOCIAL_FIELD_ALIGNMENT.RIGHT) &&
        type === 'end'
    )
        return `</div>`;
    else return '';
};

export const generateSocialTags = (data: SocialFieldData = { sites: {} }, options: SocialFieldOptions = {}) => {
    if (
        options.alignment &&
        (options.alignment === SOCIAL_FIELD_ALIGNMENT.CENTRE || options.alignment === SOCIAL_FIELD_ALIGNMENT.RIGHT)
    )
        return (
            `<div align="center">` +
            Object.keys(data.sites)
                .map(
                    siteId =>
                        `<a href="${SOCIAL_SITES[siteId].href(data.sites[siteId].username)}" target="_blank"><img src=${
                            SOCIAL_SITES[siteId].shieldBadge
                        } alt=${siteId} /></a>`,
                )
                .join(' ') +
            `</div>`
        );
    else
        return Object.keys(data.sites)
            .map(
                siteId =>
                    `[![${siteId}](${SOCIAL_SITES[siteId].shieldBadge})](${SOCIAL_SITES[siteId].href(
                        data.sites[siteId].username,
                    )})`,
            )
            .join(' ');
};

export const generateSocialFieldMarkdown = ({ data, options = {} }: SocialFieldProps) => {
    return (
        `${generateAlignmentTags(options.alignment, 'start')}` +
        `${generateSocialTags(data, options)}` +
        `${generateAlignmentTags(options.alignment, 'end')}`
    );
};

export const SocialField = (
    socialFieldProps: SocialFieldProps &
        Required<Pick<SocialFieldProps, 'id' | 'sectionId' | 'sectionIndex' | 'columnIndex' | 'fieldIndex' | 'type'>>,
) => {
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
        localSocialFieldProps.modifyField({
            ...localSocialFieldProps,
        });
    };

    const changeAlignment = (alignment: typeof localSocialFieldProps.options.alignment) => {
        const localProps = { ...localSocialFieldProps };
        if (!localProps.options) localProps.options = {};
        localProps.options.alignment = alignment;
        localSocialFieldProps.modifyField(localProps);
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
                <Col>
                    <Button
                        icon={
                            <>
                                <FontAwesomeIcon icon={faCaretUp} />
                            </>
                        }
                        onClick={() => localSocialFieldProps.shiftField(localSocialFieldProps, 'up')}
                    />
                    <Button
                        icon={
                            <>
                                <FontAwesomeIcon icon={faCaretDown} />
                            </>
                        }
                        onClick={() => localSocialFieldProps.shiftField(localSocialFieldProps, 'down')}
                    />
                    <Button
                        onClick={() => localSocialFieldProps.deleteField(localSocialFieldProps)}
                        icon={
                            <>
                                <FontAwesomeIcon icon={faTimes} />
                            </>
                        }
                    />
                </Col>
            </Row>
            <Form>{generateSocialInputs()}</Form>
        </>
    );
};

export default SocialField;
