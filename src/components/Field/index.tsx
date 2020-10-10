import React, { useContext, useState } from 'react';
import { FIELD_TYPES } from '../../config/global';
import TextField from './TextField';
import { Card, Input, Button, Tooltip } from 'antd';
import { globalContext } from '../../context/GlobalContextProvider';
import ImageField from './ImageField';
import GithubReadmeStatsField from './GithubReadmeStatsField';
import SkillsField from './SkillsField';
import SocialField from './SocialField';
import { faPen, faCheck, faTimes, faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ProfileVisitorCounterField } from '../Field/ProfileVisitorCounterField';
import BlogPostField from './BlogPostField';
import SpotifyListeningToField from './SpotifyListeningTo';
import SupportMeToField from './SupportMeToField';

const { TextArea } = Input;

export interface FieldProps {
    title?: string;
    type?: FIELD_TYPES;
    sectionId?: string;
    data?: any;
    options?: any;
}

export const generateFieldTitleMarkdown = (props: FieldProps) => {
    const { title } = props;
    if (title) return `\n\n### ${title}  \n`;
    else return '';
};

export const Field = ({
    props,
    sectionIndex,
    columnIndex,
    fieldIndex,
}: {
    props: FieldProps & Required<Pick<FieldProps, 'type'>>;
    sectionIndex: number;
    columnIndex: number;
    fieldIndex: number;
}) => {
    const context = useContext(globalContext);
    const { type, title } = props;
    const [titleEditState, editTitleEditState] = useState(false);

    const editTitle = () => {
        editTitleEditState(titleEditState ? false : true);
    };

    const generateField = () => {
        const { modifyField: modifyFieldInContext } = useContext(globalContext);

        const modifyField = (fieldProps: FieldProps) => {
            modifyFieldInContext({ ...fieldProps }, sectionIndex, columnIndex, fieldIndex);
        };

        switch (type) {
            case FIELD_TYPES.TEXT:
                return <TextField fieldProps={props} modifyField={modifyField} />;
            case FIELD_TYPES.IMAGE:
                return <ImageField fieldProps={props} modifyField={modifyField} />;
            case FIELD_TYPES.GITHUB_STATS:
                return <GithubReadmeStatsField fieldProps={props} modifyField={modifyField} />;
            case FIELD_TYPES.SKILLS:
                return <SkillsField fieldProps={props} modifyField={modifyField} />;
            case FIELD_TYPES.SOCIAL:
                return <SocialField fieldProps={props} modifyField={modifyField} />;
            case FIELD_TYPES.PROFILE_VISITOR_COUNTER:
                return <ProfileVisitorCounterField fieldProps={props} modifyField={modifyField} />;
            case FIELD_TYPES.BLOG_POST:
                return <BlogPostField />;
            case FIELD_TYPES.SPOTIFY:
                return <SpotifyListeningToField fieldProps={props} modifyField={modifyField} />;
            case FIELD_TYPES.SUPPORTME:
                return <SupportMeToField fieldProps={props} modifyField={modifyField} />;
        }
    };

    const changeTitle = e => {
        const value = e.target.value;
        context.modifyField(
            {
                ...props,
                title: value,
            },
            sectionIndex,
            columnIndex,
            fieldIndex,
        );
    };

    const generateCardTitle = () => {
        if (titleEditState)
            return (
                <TextArea
                    rows={1}
                    autoSize={true}
                    value={title ? title : ''}
                    placeholder="Field title"
                    onChange={changeTitle}
                />
            );
        else return title ? title : 'Untitled field';
    };

    const generateTitleIcon = () => {
        const editButton = (
            <Tooltip placement="top" title={<span>Edit Title</span>}>
                <Button icon={<FontAwesomeIcon icon={titleEditState ? faCheck : faPen} />} onClick={editTitle} />
            </Tooltip>
        );

        const closeButton = (
            <Tooltip placement="top" title={<span>Remove Field</span>}>
                <Button
                    onClick={() => context.deleteField(sectionIndex, columnIndex, fieldIndex)}
                    icon={
                        <>
                            <FontAwesomeIcon icon={faTimes} />
                        </>
                    }
                />
            </Tooltip>
        );

        const moveUpButton = (
            <Tooltip placement="top" title={<span>Shift Field Upwards</span>}>
                <Button
                    icon={
                        <>
                            <FontAwesomeIcon icon={faCaretUp} />
                        </>
                    }
                    onClick={() => context.shiftField('up', sectionIndex, columnIndex, fieldIndex)}
                />
            </Tooltip>
        );

        const moveDownButton = (
            <Tooltip placement="top" title={<span>Shift Field Downwards</span>}>
                <Button
                    icon={
                        <>
                            <FontAwesomeIcon icon={faCaretDown} />
                        </>
                    }
                    onClick={() => context.shiftField('down', sectionIndex, columnIndex, fieldIndex)}
                />
            </Tooltip>
        );

        return (
            <>
                {editButton}
                {moveUpButton}
                {moveDownButton}
                {closeButton}
            </>
        );
    };

    const generateCards = () => {
        return (
            <Card style={{ marginBottom: 20 }} title={generateCardTitle()} extra={generateTitleIcon()}>
                {generateField()}
            </Card>
        );
    };

    return generateCards();
};

export default Field;
