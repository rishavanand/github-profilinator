import { v4 as uuidv4 } from 'uuid';
import { FIELD_TYPES } from './global';
import { FieldProps } from '../components/Field';
import { SectionProps } from '../components/Section';
import { TEXT_ALIGNMENT, TEXT_SIZE } from '../components/Field/TextField';
import { IMAGE_ALIGNMENT } from '../components/Field/ImageField';
import { SKILLS } from './skills';

export const DEMO_SECTION_DATA: Array<SectionProps & Required<Pick<SectionProps, 'sectionIndex'>>> = [
    {
        name: 'Intro',
        id: 'section001',
        sectionIndex: 1,
        fields: [
            [
                {
                    id: 'field001',
                    options: { width: 600, alignment: 'center', fitImage: false },
                    data: { url: 'https://rishavanand.github.io/static/images/greetings.gif', alt: 'Greetings' },
                    type: FIELD_TYPES.IMAGE,
                    sectionIndex: 0,
                    columnIndex: 0,
                    fieldIndex: 0,
                },
                {
                    id: 'field002',
                    options: { size: 'h3', alignment: 'center' },
                    data: {
                        value:
                            "I'm Rishav, a full-time full-stack freelance developer 👨‍💻 working remotely since 2013 🚀",
                    },
                    type: FIELD_TYPES.TEXT,
                    sectionId: 'section001',
                },
                {
                    id: 'field003',
                    options: { size: '', isList: true },
                    data: {
                        value:
                            '🔭 I’m currently working on [Github Profilinator](https://github.com/rishavanand/github-profilinator)',
                    },
                    type: FIELD_TYPES.TEXT,
                    sectionId: 'section001',
                },
                {
                    id: 'field004',
                    options: { size: '', isList: true },
                    data: { value: '🌱 I’m currently learning Hyperledger and Kubernetes' },
                    type: FIELD_TYPES.TEXT,
                    sectionId: 'section001',
                },
                {
                    id: 'field005',
                    options: { size: '', isList: true },
                    data: { value: '❓ Ask me about anything related to MERN stack and related technologies' },
                    type: FIELD_TYPES.TEXT,
                    sectionId: 'section001',
                },
                {
                    id: 'field006',
                    options: { size: '', isList: true },
                    data: { value: '⚡ Fun fact: I use tabs over spaces' },
                    type: FIELD_TYPES.TEXT,
                    sectionId: 'section001',
                },
            ],
        ],
    },
    {
        name: 'My Skill Set',
        id: 'section002',
        sectionIndex: 2,
        nameToMarkdown: true,
        fields: [
            [
                {
                    id: 'field007',
                    options: { size: '50', alignment: 'center' },
                    data: {
                        list: [
                            'react',
                            'bootstrap',
                            'css3',
                            'html5',
                            'electron',
                            'javascript',
                            'typescript',
                            'illustrator',
                            'chartjs',
                        ],
                    },
                    type: FIELD_TYPES.SKILLS,
                    sectionId: 'section002',
                    sectionIndex: 1,
                    columnIndex: 0,
                    fieldIndex: 0,
                    title: 'Frontend',
                },
            ],
            [
                {
                    type: FIELD_TYPES.SKILLS,
                    sectionIndex: 1,
                    columnIndex: 1,
                    id: 'a2c62fb6-6bd2-4cc6-8e50-518ab06395b4',
                    fieldIndex: 0,
                    title: 'Backend',
                    options: { size: '50' },
                    data: {
                        list: [
                            'cplusplus',
                            'django',
                            'c',
                            'java',
                            'html5',
                            'javascript',
                            'typescript',
                            'php',
                            'mongodb',
                            'nodejs',
                            'linux',
                            'nginx',
                            'python',
                            'express',
                            'git',
                            'redux',
                            'bash',
                        ],
                    },
                },
            ],
            [
                {
                    type: FIELD_TYPES.SKILLS,
                    sectionIndex: 1,
                    columnIndex: 2,
                    id: '5930876a-fd0d-411c-b76f-87b8920db446',
                    fieldIndex: 0,
                    title: 'DevOps',
                    options: { size: '50' },
                    data: { list: ['aws', 'gcp', 'kubernetes', 'linux', 'git', 'bash'] },
                },
            ],
        ],
    },
    {
        name: 'Connect with me',
        id: '9c7100f6-ab5b-4536-8dca-0f0d787a95b7',
        fields: [
            [
                {
                    type: FIELD_TYPES.SOCIAL,
                    sectionIndex: 2,
                    columnIndex: 0,
                    id: '8ebb8cd1-2235-4f37-855c-0c1d92c600a5',
                    options: { alignment: 'center' },
                    data: {
                        sites: {
                            github: { username: 'rishavanand' },
                            twitter: { username: 'iamrishavanand' },
                            devto: { username: 'rishavanand' },
                            linkedin: { username: 'rishavanand' },
                            facebook: { username: 'iamrishavanand' },
                            instagram: { username: 'iamrishavanand' },
                        },
                    },
                    fieldIndex: 0,
                    title: '',
                },
            ],
        ],
        sectionIndex: 2,
        nameToMarkdown: true,
    },
    {
        name: 'Github Stats',
        id: '34635f08-db04-4cda-bb54-23d84e8f0f49',
        fields: [
            [
                {
                    type: FIELD_TYPES.GITHUB_STATS,
                    sectionIndex: 3,
                    columnIndex: 0,
                    id: 'd75c686c-8b04-455b-8595-e2a6d0c2c8e6',
                    options: { alignment: 'center' },
                    data: { username: 'rishavanand' },
                    fieldIndex: 0,
                },
            ],
        ],
        sectionIndex: 3,
        nameToMarkdown: true,
    },
    {
        name: 'Recent Blog Posts',
        id: 'e92e33bb-f26b-419d-bf3e-1958ce6ad660',
        fields: [
            [
                {
                    type: FIELD_TYPES.BLOG_POST,
                    sectionIndex: 4,
                    columnIndex: 0,
                    id: 'c143fb83-719e-43c1-a1bb-af72878ae370',
                },
            ],
        ],
        sectionIndex: 4,
        nameToMarkdown: true,
    },
    {
        name: 'Spotify Listening',
        id: 'ea07ce6b-cc2b-47f5-b345-931e561b83v6',
        sectionIndex: 6,
        fields: [
            [
                {
                    id: 'field001',
                    options: { size: 'h3', alignment: 'center' },
                    data: {
                        spotifyMarkdown: '',
                    },
                    type: FIELD_TYPES.SPOTIFY,
                    sectionId: 'ea07ce6b-cc2b-47f5-b345-931e561b83v6',
                },
            ],
        ],
    },
    {
        name: 'Visitor Counter',
        id: 'ea07ce6b-cc2b-47f5-b345-931e561b57c8',
        sectionIndex: 5,
        fields: [
            [
                {
                    type: FIELD_TYPES.PROFILE_VISITOR_COUNTER,
                    sectionIndex: 5,
                    columnIndex: 0,
                    id: '1fbf06da-c9e9-4a9c-aafb-5ba07aae9972',
                    options: { alignment: 'center' },
                    data: { username: 'rishavanand' },
                    fieldIndex: 0,
                },
            ],
        ],
    },
];
