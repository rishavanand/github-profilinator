import { v4 as uuidv4 } from 'uuid';
import { FIELD_TYPES } from './global';
import { FieldProps } from '../components/Field';
import { SectionProps } from '../components/Section';
import { TEXT_ALIGNMENT, TEXT_SIZE } from '../components/Field/TextField';
import { IMAGE_ALIGNMENT } from '../components/Field/ImageField';

export const DEMO_SECTION_DATA: Array<SectionProps & Required<Pick<SectionProps, 'id'>>> = [
    {
        name: 'Intro',
        id: 'section001',
        fields: [
            [
                {
                    id: 'field001',
                    options: {
                        width: 600,
                        alignment: TEXT_ALIGNMENT.CENTRE,
                        fitImage: false,
                    },
                    data: {
                        url: 'https://rishavanand.github.io/static/images/greetings.gif',
                        alt: 'Greetings',
                    },
                    type: FIELD_TYPES.IMAGE,
                    sectionIndex: 0,
                    columnIndex: 0,
                    fieldIndex: 0,
                },
                {
                    id: 'field002',
                    options: {
                        size: TEXT_SIZE.H3,
                        alignment: TEXT_ALIGNMENT.CENTRE,
                    },
                    data: {
                        value:
                            "I'm Rishav, a full-time full-stack freelance developer 👨‍💻 working remotely since 2013 🚀",
                    },
                    type: FIELD_TYPES.TEXT,
                    sectionId: 'section001',
                },
            ],
        ],
    },
];
