import { v4 as uuidv4 } from 'uuid';
import { SECTION_TYPES, FIELD_TYPES } from './global';
import { FieldProps } from '../components/Field';
import { SectionProps } from '../components/Section';
import { TEXT_ALIGNMENT, TEXT_SIZE } from '../components/Field/TextField';
import { IMAGE_ALIGNMENT } from '../components/Field/ImageField';

export const DEMO_SECTION_DATA: SectionProps[] = [
    {
        type: SECTION_TYPES.BANNER,
        name: 'Banner',
        id: 'section001',
        fields: [
            [
                {
                    id: 'field001',
                    options: {
                        width: 600,
                        alignment: IMAGE_ALIGNMENT.CENTRE,
                    },
                    data: {
                        url: 'https://i.imgur.com/TZGDZUB.gif',
                        alt: 'Greetings',
                    },
                    type: FIELD_TYPES.IMAGE,
                },
                {
                    id: 'field002',
                    options: {
                        size: TEXT_SIZE.H3,
                        alignment: TEXT_ALIGNMENT.CENTRE,
                    },
                    data: {
                        value: `👋 I'm Rishav, a full-time full-stack freelancer 👨‍💻 working remotely since 2013 🚀`,
                    },
                    type: FIELD_TYPES.TEXT,
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
