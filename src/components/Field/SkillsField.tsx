import React from 'react';
import { Input, Row, Col, Button, Dropdown, Menu, Form, Checkbox } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCaretDown,
    faCaretUp,
    faTimes,
    faTable,
    faExpandArrowsAlt,
    faArrowsAltV,
} from '@fortawesome/free-solid-svg-icons';
import { FieldProps } from '.';
import { SKILLS } from '../../config/skills';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';

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
    list?: {
        label: string;
        value: string;
        checked?: boolean;
        iconUrl?: string;
        alt?: string;
        title?: string;
    }[];
}

export interface SkillsFieldProps extends FieldProps {
    id?: string;
    data?: SkillsFieldData;
    options?: SkillsFieldOptions;
}

export const generateImageTag = (data: SkillsFieldData, options: SkillsFieldOptions) => {
    return (
        `<div align="center">` +
        data.list
            .map(skill => {
                if (skill.checked)
                    return `<img style="margin: 10px" src="${skill.iconUrl}" alt="${skill.label}" height="${options.size}" />`;
                else return '';
            })
            .join('') +
        '</div>'
    );
};

export const generateSkillsFieldMarkdown = ({ data, options }: SkillsFieldProps) => {
    if (!options) options = {};
    if (!data)
        data = {
            list: [],
        };
    return `${generateImageTag(data, options)}`;
};

export const SkillsField = (
    skillsFieldProps: SkillsFieldProps &
        Required<Pick<SkillsFieldProps, 'id' | 'sectionId' | 'sectionIndex' | 'columnIndex' | 'fieldIndex' | 'type'>>,
) => {
    const localSkillsFieldProps: typeof skillsFieldProps = {
        options: {
            size: SIZE.MEDIUM,
        },
        data: {
            list: SKILLS,
        },
        ...skillsFieldProps,
    };

    const onChange = (event: CheckboxChangeEvent) => {
        const value = event.target.value;
        const checked = event.target.checked;
        localSkillsFieldProps.data.list = localSkillsFieldProps.data.list.map(skill => {
            if (skill.value === value)
                return {
                    ...skill,
                    checked: checked,
                };
            else return skill;
        });
        localSkillsFieldProps.modifyField({
            ...localSkillsFieldProps,
        });
        console.log(skillsFieldProps);
    };

    const changeSize = (size: typeof localSkillsFieldProps.options.size) => {
        const localProps = { ...localSkillsFieldProps };
        if (!localProps.options) localProps.options = {};
        localProps.options.size = size;
        localSkillsFieldProps.modifyField(localProps);
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
            <Row justify="space-between" style={{ marginBottom: 10 }}>
                <Col>
                    <Dropdown overlay={sizeMenu}>
                        <Button
                            style={{ paddingLeft: 5, paddingRight: 5, width: 50 }}
                            icon={
                                <>
                                    <FontAwesomeIcon icon={faArrowsAltV} /> <DownOutlined />
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
                        onClick={() => localSkillsFieldProps.shiftField(localSkillsFieldProps, 'up')}
                    />
                    <Button
                        icon={
                            <>
                                <FontAwesomeIcon icon={faCaretDown} />
                            </>
                        }
                        onClick={() => localSkillsFieldProps.shiftField(localSkillsFieldProps, 'down')}
                    />
                    <Button
                        onClick={() => localSkillsFieldProps.deleteField(localSkillsFieldProps)}
                        icon={
                            <>
                                <FontAwesomeIcon icon={faTimes} />
                            </>
                        }
                    />
                </Col>
            </Row>
            <Checkbox.Group style={{ width: '100%' }}>
                <Row>
                    {localSkillsFieldProps.data.list.map(skill => {
                        return (
                            <Col span={6} key={skill.value}>
                                <Checkbox
                                    value={skill.value}
                                    checked={skill.checked ? true : false}
                                    onChange={onChange}
                                >
                                    {skill.label}
                                </Checkbox>
                            </Col>
                        );
                    })}
                </Row>
            </Checkbox.Group>
            ,
        </>
    );
};

export default SkillsField;
