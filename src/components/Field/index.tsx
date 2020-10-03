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

export interface FieldProps {
    id?: string;
    title?: string;
    sectionIndex?: number;
    columnIndex?: number;
    fieldIndex?: number;
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

export const Field = (
    props: FieldProps &
        Required<Pick<FieldProps, 'id' | 'type' | 'sectionId' | 'sectionIndex' | 'columnIndex' | 'fieldIndex'>>,
) => {
    const context = useContext(globalContext);
    const { type, title } = props;
    const [titleEditState, editTitleEditState] = useState(false);

    const editTitle = () => {
        editTitleEditState(titleEditState ? false : true);
    };

    const generateField = () => {
        switch (type) {
            case FIELD_TYPES.TEXT:
                return <TextField {...props} />;
            case FIELD_TYPES.IMAGE:
                return <ImageField {...props} />;
            case FIELD_TYPES.GITHUB_STATS:
                return <GithubReadmeStatsField {...props} />;
            case FIELD_TYPES.SKILLS:
                return <SkillsField {...props} />;
            case FIELD_TYPES.SOCIAL:
                return <SocialField {...props} />;
            case FIELD_TYPES.PROFILE_VISITOR_COUNTER:
                return <ProfileVisitorCounterField {...props} />;
            case FIELD_TYPES.BLOG_POST:
                return <BlogPostField />;
            case FIELD_TYPES.SPOTIFY:
                return <SpotifyListeningToField {...props} />;
        }
    };

    const changeTitle = e => {
        const value = e.target.value;
        context.modifyField({
            ...props,
            title: value,
        });
    };

    const generateCardTitle = () => {
        if (titleEditState)
            return <Input value={title ? title : ''} placeholder="Field title" onChange={changeTitle} />;
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
                    onClick={() => context.deleteField(props)}
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
                    onClick={() => context.shiftField(props, 'up')}
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
                    onClick={() => context.shiftField(props, 'down')}
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
