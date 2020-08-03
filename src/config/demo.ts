import { v4 as uuidv4 } from 'uuid';
import { SECTION_TYPES, FIELD_TYPES } from './global';
import { FieldProps } from '../components/Field';
import { SectionProps } from '../components/Section';

export const DEMO_SECTION_DATA: SectionProps[] = [
    {
        type: SECTION_TYPES.BANNER,
        name: 'Banner',
        id: 'section001',
        fields: [
            [
                {
                    id: 'field001',
                    data: {
                        value: 'Hello, World!',
                    },
                    type: FIELD_TYPES.TEXT,
                    sectionId: 'section001',
                    options: {
                        bold: true,
                    },
                },
                {
                    id: 'field002',
                    data: {
                        value: 'Hello, World!',
                    },
                    type: FIELD_TYPES.TEXT,
                    sectionId: 'section001',
                },
                {
                    id: 'field003',
                    data: {
                        url: 'https://cdn.pixabay.com/photo/2018/07/16/16/55/banner-3542404_960_720.jpg',
                    },
                    type: FIELD_TYPES.IMAGE,
                    sectionId: 'section001',
                },
            ],
        ],
    },
    {
        type: SECTION_TYPES.ABOUT_ME,
        name: 'About Me',
        id: uuidv4(),
    },
    {
        type: SECTION_TYPES.SKILLS,
        name: 'Skills',
        id: uuidv4(),
    },
];
