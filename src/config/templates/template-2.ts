export const TEMPLATE_2 = [
    {
        name: 'Intro',
        fields: [
            [
                {
                    type: 'text',
                    title: '',
                    data: { value: "Hey 👋, I'm Rishav Anand!" },
                    options: { size: 'h2' },
                },
                {
                    type: 'social',
                    options: {},
                    data: {
                        sites: {
                            github: { username: 'rishavanand' },
                            twitter: { username: 'iamrishavanand' },
                            devto: { username: 'rishavanand' },
                            linkedin: { username: 'iamrishavanand' },
                            facebook: { username: 'iamrishavanand' },
                            instagram: { username: 'iamrishavanand' },
                        },
                    },
                },
                {
                    type: 'text',
                    title: 'Glad to see you here!',
                    data: {
                        value:
                            'I’m a full-stack developer who has turned years of freelancing into a full-time career. Being a full-stack allows me to not only develop client-facing apps and websites but also develop it with cutting edge backend support.\n\nI specialize in building robust backends that do all the heavy lifting for your app or website. I love designing systems that are light yet powerful, distributed yet synchronized and beautiful yet effective. I also frequently blog about the world behind the screen which involves system designs, databases, security, servers, optimisation and also promising technologies like Blockchain and PWAs.',
                    },
                    options: { size: '' },
                },
            ],
        ],
    },
    {
        name: 'Rapidfire',
        nameToMarkdown: true,
        fields: [
            [
                {
                    type: 'text',
                    data: {
                        value:
                            '🔭 I’m currently working on [Github Profilinator](https://github.com/rishavanand/github-profilinator)',
                    },
                    options: { isList: true },
                },
                {
                    type: 'text',
                    data: { value: '🌱 I’m currently learning Hyperledger and Kubernetes' },
                    options: { isList: true },
                },
                {
                    type: 'text',
                    data: { value: '❓ Ask me about anything related to MERN stack and related technologies' },
                    options: { isList: true },
                },
                {
                    type: 'text',
                    data: { value: '⚡ Fun fact: I keep night shift swithed on at all times ' },
                    options: { isList: true },
                },
            ],
            [
                {
                    type: 'image',
                    options: { alignment: 'center', fitImage: true },
                    data: { alt: 'Greetings', url: 'https://rishavanand.github.io/static/images/greetings.gif' },
                },
            ],
        ],
    },
    {
        name: 'Languages and Tools',
        fields: [
            [
                {
                    type: 'skills',
                    title: '',
                    options: { size: '25' },
                    data: {
                        list: [
                            'react',
                            'bootstrap',
                            'css3',
                            'electron',
                            'html5',
                            'javascript',
                            'cplusplus',
                            'c',
                            'aws',
                            'docker',
                            'typescript',
                            'php',
                            'mysql',
                            'mongodb',
                            'python',
                            'nginx',
                            'express',
                            'kubernetes',
                            'bash',
                            'raspberrypi',
                            'elasticsearch',
                            'flask',
                            'xampp',
                            'chartjs',
                            'linux',
                            'sass',
                            'jenkins',
                            'git',
                            'rabbitMQ',
                            'gatsby',
                            'firebase',
                            'arduino',
                            'wordpress',
                            'graphql',
                            'ansible',
                            'nodejs',
                            'gcp',
                        ],
                    },
                },
            ],
        ],
        nameToMarkdown: true,
    },
    {
        name: 'Github Stats',
        fields: [
            [
                {
                    type: 'github-stats',
                    options: { variant: 'activity', fitImage: true },
                    data: { username: 'rishavanand' },
                },
            ],
            [
                {
                    type: 'github-stats',
                    options: { variant: 'languages', fitImage: true },
                    data: { username: 'rishavanand' },
                },
            ],
        ],
        nameToMarkdown: true,
    },
    { name: 'Show some love', fields: [[]] },
    {
        name: 'Visitor Counter',
        fields: [
            [
                {
                    type: 'profile-visitor-counter',
                    options: {},
                    data: { username: 'rishavanand' },
                },
            ],
        ],
    },
    { name: 'Donate' },
];
