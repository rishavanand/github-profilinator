import React, { useState } from 'react';
import { Row, Col, Button, Dropdown, Menu, Grid, Checkbox, Tooltip, Input } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsAltV } from '@fortawesome/free-solid-svg-icons';
import { FieldProps } from '.';
import { SKILLS } from '../../config/skills';

const { Search } = Input;

const { useBreakpoint } = Grid;

export enum ALIGNMENT {
    LEFT = 'left',
    CENTRE = 'center',
    RIGHT = 'right',
}

export enum SIZE {
    SMALL = '25',
    MEDIUM = '50',
    LARGE = '75',
}

export interface SkillsFieldOptions {
    size?: SIZE;
}

export interface SkillsFieldData {
    list?: string[];
}

export interface SkillsFieldProps extends FieldProps {
    id?: string;
    data?: SkillsFieldData;
    options?: SkillsFieldOptions;
}

export const generateImageTag = (data: SkillsFieldData, options: SkillsFieldOptions) => {
    return (
        `<div align="center">  \n` +
        data.list
            .map(skill => {
                return `<img style="margin: 10px" src="${SKILLS[skill].iconUrl}" alt="${SKILLS[skill].label}" height="${options.size}" />`;
            })
            .join('  \n') +
        '  \n</div>'
    );
};

export const generateSkillsFieldMarkdown = ({ data, options }: SkillsFieldProps) => {
    if (!options) options = {};
    if (!data || !data.list)
        data = {
            ...data,
            list: [],
        };
    return `${generateImageTag(data, options)}`;
};

export const SkillsField = ({
    fieldProps,
    modifyField,
}: {
    fieldProps: SkillsFieldProps;
    modifyField: (filedProps: SkillsFieldProps) => void;
}) => {
    const [searchValue, setSearchValue] = useState('');

    const screens = useBreakpoint();

    const skillsColSpan = screens.md ? 6 : 12;

    const localSkillsFieldProps: typeof fieldProps = {
        options: {
            size: SIZE.MEDIUM,
        },
        data: {
            list: [],
        },
        ...fieldProps,
    };

    const onChange = event => {
        const name = event.target.value;
        const isChecked = event.target.checked;
        let currentSkillsList = localSkillsFieldProps.data.list;

        if (isChecked) {
            currentSkillsList.push(name);
        } else {
            currentSkillsList = currentSkillsList.filter(skill => skill !== name);
        }

        localSkillsFieldProps.data.list = currentSkillsList as string[];

        modifyField({
            ...localSkillsFieldProps,
        });
    };

    const onSearch = value => {
        setSearchValue(value);
    };

    const changeSize = (size: typeof localSkillsFieldProps.options.size) => {
        const localProps = { ...localSkillsFieldProps };
        if (!localProps.options) localProps.options = {};
        localProps.options.size = size;
        modifyField(localProps);
    };

    const sizeMenu = (
        <Menu>
            <Menu.Item key="1" onClick={() => changeSize(SIZE.SMALL)}>
                Small Icons
            </Menu.Item>
            <Menu.Item key="2" onClick={() => changeSize(SIZE.MEDIUM)}>
                Medium Icons
            </Menu.Item>
            <Menu.Item key="3" onClick={() => changeSize(SIZE.LARGE)}>
                Large Icons
            </Menu.Item>
        </Menu>
    );

    return (
        <>
            <Row justify="space-between" style={{ marginBottom: 30 }}>
                <Col>
                    <Search placeholder="Search Skills..." allowClear onSearch={onSearch} style={{ width: 180 }} />
                </Col>
                <Col>
                    <Dropdown overlay={sizeMenu}>
                        <Tooltip placement="top" title={<span>Icon Size</span>}>
                            <Button
                                style={{ paddingLeft: 5, paddingRight: 5, width: 50 }}
                                icon={
                                    <>
                                        <FontAwesomeIcon icon={faArrowsAltV} /> <DownOutlined />
                                    </>
                                }
                            />
                        </Tooltip>
                    </Dropdown>
                </Col>
            </Row>
            <Checkbox.Group defaultValue={localSkillsFieldProps.data.list} style={{ width: '100%' }}>
                <Row>
                    {Object.values(SKILLS)
                        .filter(skill =>
                            searchValue !== '' && searchValue !== undefined
                                ? skill.label.toLowerCase().indexOf(searchValue.toLowerCase()) > -1
                                : true,
                        )
                        .map(skill => {
                            return (
                                <Col span={skillsColSpan} key={skill.value}>
                                    <Checkbox onChange={onChange} value={skill.value}>
                                        {skill.label}
                                    </Checkbox>
                                </Col>
                            );
                        })}
                </Row>
            </Checkbox.Group>
        </>
    );
};

export default SkillsField;
