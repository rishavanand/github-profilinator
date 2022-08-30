import React from 'react';
import { Input, Row, Col, Button, Dropdown, Menu, Form, Switch, Tooltip } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../../styles/fields.module.scss';
import { faAlignLeft, faExpandArrowsAlt } from '@fortawesome/free-solid-svg-icons';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import { FieldProps } from '.';

const { TextArea } = Input;

export enum ALIGNMENT {
    LEFT = 'left',
    CENTRE = 'center',
    RIGHT = 'right',
}

export interface SpotifyListeningToOptions {
    alignment?: ALIGNMENT;
    fitImage?: boolean;
}

export interface SpotifyListeningToData {
    spotifyMarkdown?: string;
}

export interface SpotifyListeningToProps extends FieldProps {
    id?: string;
    data?: SpotifyListeningToData;
    options?: SpotifyListeningToOptions;
}

export const generateAlignmentTags = (alignment: ALIGNMENT, type: 'start' | 'end') => {
    if ((alignment === ALIGNMENT.CENTRE || alignment === ALIGNMENT.RIGHT) && type === 'start')
        return `<div align="${alignment}">`;
    else if ((alignment === ALIGNMENT.CENTRE || alignment === ALIGNMENT.RIGHT) && type === 'end') return `</div>`;
    else return '';
};

export const generateSpotifyListeningToMarkdown = ({ data, options }: SpotifyListeningToProps) => {
    if (!options) options = {};

    const markdown = data?.spotifyMarkdown
        ? data.spotifyMarkdown
        : '[spotify-github-profile](https://rishavanand.github.io/static/images/spotify-readme-example.svg)';
    const svgLink = markdown.substring(markdown.indexOf('(') + 1, markdown.indexOf(')'));

    if (!options?.alignment) options.alignment = ALIGNMENT.LEFT;

    if (options.fitImage)
        return `<img src="${svgLink}" align="${options.alignment ? options.alignment : 'left'}" style="width: 100%" />`;
    else if (options.alignment && (options.alignment === ALIGNMENT.CENTRE || options.alignment === ALIGNMENT.RIGHT))
        return `<div align="${options.alignment}"><img src="${svgLink}" /></div>`;
    else return `![Listening to on Spotify](${svgLink})`;
};

export const SpotifyListeningToField = ({
    fieldProps,
    modifyField,
}: {
    fieldProps: SpotifyListeningToProps;
    modifyField: (filedProps: SpotifyListeningToProps) => void;
}) => {
    const localSpotifyListeningProps: typeof fieldProps = {
        options: {},
        data: {},
        ...fieldProps,
    };

    const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const name = event.target.name;
        const value = event.target.value;
        if (name === 'md-code')
            modifyField({
                ...localSpotifyListeningProps,
                data: {
                    ...localSpotifyListeningProps.data,
                    spotifyMarkdown: value,
                },
            });
    };

    const toggleFitImage = () => {
        modifyField({
            ...localSpotifyListeningProps,
            options: {
                ...localSpotifyListeningProps.options,
                fitImage: localSpotifyListeningProps?.options?.fitImage ? false : true,
            },
        });
    };

    const changeAlignment = (alignment: ALIGNMENT) => {
        const localProps = { ...localSpotifyListeningProps };
        if (!localProps.options) localProps.options = {};
        localProps.options.alignment = alignment;
        modifyField(localProps);
    };

    const alignmentMenu = (
        <Menu>
            <Menu.Item key="1" onClick={() => changeAlignment(ALIGNMENT.LEFT)}>
                Left
            </Menu.Item>
            <Menu.Item key="2" onClick={() => changeAlignment(ALIGNMENT.CENTRE)}>
                Centre
            </Menu.Item>
            <Menu.Item key="3" onClick={() => changeAlignment(ALIGNMENT.RIGHT)}>
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
                                        <FontAwesomeIcon icon={faAlignLeft} />
                                    </>
                                }
                            />
                        </Tooltip>
                    </Dropdown>
                    <Tooltip placement="top" title={<span>Fit to Width</span>}>
                        <Button
                            icon={
                                <>
                                    <FontAwesomeIcon icon={faExpandArrowsAlt} />
                                </>
                            }
                            onClick={() => toggleFitImage()}
                            className={[
                                styles.optionButton,
                                localSpotifyListeningProps.options && localSpotifyListeningProps.options.fitImage
                                    ? styles.selected
                                    : styles.unselected,
                            ].join(' ')}
                        />
                    </Tooltip>
                </Col>
                <Col>
                    <a href="https://spotify-github-profile.vercel.app/api/login" rel="noreferrer" target="_blank">
                        <Button
                            icon={<FontAwesomeIcon icon={faSpotify} />}
                            style={{ color: 'white', backgroundColor: '#1DB954' }}
                        >
                            &nbsp; Connect with Spotify
                        </Button>
                    </a>
                </Col>
            </Row>
            <Row></Row>
            <Form layout="vertical">
                <Form.Item label="First use the button to connect with Spotify, then paste the generated code in the field below">
                    <TextArea
                        rows={1}
                        autoSize={true}
                        name="md-code"
                        value={localSpotifyListeningProps?.data?.spotifyMarkdown}
                        onChange={onChange}
                        placeholder="Paste the generated code here"
                    />
                </Form.Item>
            </Form>
        </>
    );
};

export default SpotifyListeningToField;
