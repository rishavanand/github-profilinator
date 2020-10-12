export const TEMPLATE_1 = [
    {
        name: 'Intro',
        fields: [
            [
                {
                    options: { width: 600, alignment: 'center', fitImage: true },
                    data: { url: 'https://rishavanand.github.io/static/images/greetings.gif', alt: 'Greetings' },
                    type: 'image',
                },
                {
                    options: { size: 'h3', alignment: 'center' },
                    data: {
                        value:
                            "I'm Rishav, a full-time full-stack freelance developer 👨‍💻 working remotely since 2013 🚀",
                    },
                    type: 'text',
                },
                {
                    options: { size: '', isList: true },
                    data: {
                        value:
                            '🔭 I’m currently working on [Github Profilinator](https://github.com/rishavanand/github-profilinator)',
                    },
                    type: 'text',
                },
                {
                    options: { size: '', isList: true },
                    data: { value: '🌱 I’m currently learning Hyperledger and Kubernetes' },
                    type: 'text',
                },
                {
                    options: { size: '', isList: true },
                    data: { value: '❓ Ask me about anything related to MERN stack and related technologies' },
                    type: 'text',
                },
                {
                    options: { size: '', isList: true },
                    data: { value: '⚡ Fun fact: I use tabs over spaces' },
                    type: 'text',
                },
            ],
        ],
    },
    {
        name: 'My Skill Set',
        nameToMarkdown: true,
        collapsable: false,
        fields: [
            [
                {
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
                    type: 'skills',
                    title: 'Frontend',
                },
            ],
            [
                {
                    type: 'skills',
                    title: 'Backend',
                    options: { size: '50' },
                    data: {
                        list: [
                            'cplusplus',
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
                    type: 'skills',
                    title: 'DevOps',
                    options: { size: '50' },
                    data: { list: ['aws', 'gcp', 'kubernetes', 'linux', 'git', 'bash'] },
                },
            ],
        ],
    },
    {
        name: 'Connect with me',
        fields: [
            [
                {
                    type: 'social',
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
                    title: '',
                },
            ],
        ],
        nameToMarkdown: true,
        collapsable: false,
    },
    {
        name: 'Github Stats',
        fields: [
            [
                {
                    type: 'github-stats',
                    options: { alignment: 'center' },
                    data: { username: 'rishavanand' },
                },
            ],
        ],
        nameToMarkdown: true,
        collapsable: false,
    },
    {
        name: 'Recent Blog Posts',
        fields: [[{ type: 'blog-post' }]],
        nameToMarkdown: true,
        collapsable: false,
    },
    {
        name: 'Spotify Listening',
        fields: [
            [
                {
                    options: { size: 'h3', alignment: 'center' },
                    data: { spotifyMarkdown: '' },
                    type: 'spotify',
                },
            ],
        ],
    },
    {
        name: 'Visitor Counter',
        fields: [
            [
                {
                    type: 'profile-visitor-counter',
                    options: { alignment: 'center' },
                    data: { username: 'rishavanand' },
                },
            ],
        ],
    },
    {
        name: 'Support Me',

        nameToMarkdown: true,
        collapsable: false,
        fields: [
            [
                {
                    type: 'supportme',
                    options: { alignment: 'left' },
                    data: { paypal: '', buymeacoffee: 'rishavanand' },
                },
            ],
        ],
    },
];
