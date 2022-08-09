export enum SOCIAL_SITE_IDS {
    GITHUB = 'github',
    TWITTER = 'twitter',
    DEV_TO = 'devto',
    CODEPEN = 'codepen',
    STACKOVERFLOW = 'stackoverflow',
    LINKEDIN = 'linkedin',
    KAGGLE = 'kaggle',
    FACEBOOK = 'facebook',
    INSTAGRAM = 'instagram',
    DRIBBBLE = 'dribbble',
    BEHANCE = 'behance',
    MEDIUM = 'medium',
    YOUTUBE = 'youtube',
    HASHNODE = 'hashnode',
    GITLAB = 'gitlab',
}

export const SOCIAL_SITES: {
    [id: string]: { shieldBadge: string; title: string; href: (username: string) => string };
} = {
    [SOCIAL_SITE_IDS.GITHUB]: {
        shieldBadge:
            'https://img.shields.io/badge/github-%2324292e.svg?&style=for-the-badge&logo=github&logoColor=white',
        title: 'Github',
        href: (username: string) => `https://github.com/${username}`,
    },
    [SOCIAL_SITE_IDS.GITLAB]: {
        shieldBadge: 'https://img.shields.io/badge/gitlab-330F63.svg?&style=for-the-badge&logo=gitlab&logoColor=white',
        title: 'Gitlab',
        href: (username: string) => `https://gitlab.com/${username}`,
    },
    [SOCIAL_SITE_IDS.TWITTER]: {
        shieldBadge:
            'https://img.shields.io/badge/twitter-%2300acee.svg?&style=for-the-badge&logo=twitter&logoColor=white',
        title: 'Twitter',
        href: (username: string) => `https://twitter.com/${username}`,
    },
    [SOCIAL_SITE_IDS.DEV_TO]: {
        shieldBadge:
            'https://img.shields.io/badge/dev.to-%2308090A.svg?&style=for-the-badge&logo=dev.to&logoColor=white',
        title: 'DEV.TO',
        href: (username: string) => `https://dev.to/${username}`,
    },
    [SOCIAL_SITE_IDS.HASHNODE]: {
        shieldBadge:
            'https://img.shields.io/badge/hashnode-%232962FF.svg?&style=for-the-badge&logo=hashnode&logoColor=white',
        title: 'Hashnode',
        href: (username: string) => `https://hashnode.com/@${username}`,
    },
    [SOCIAL_SITE_IDS.CODEPEN]: {
        shieldBadge:
            'https://img.shields.io/badge/codepen-%23131417.svg?&style=for-the-badge&logo=codepen&logoColor=white',
        title: 'CODEPEN',
        href: (username: string) => `https://codepen.com/${username}`,
    },
    [SOCIAL_SITE_IDS.STACKOVERFLOW]: {
        shieldBadge:
            'https://img.shields.io/badge/stackoverflow-%23F28032.svg?&style=for-the-badge&logo=stackoverflow&logoColor=white',
        title: 'Stack Overflow',
        href: (username: string) => `https://stackoverflow.com/users/${username}`,
    },
    [SOCIAL_SITE_IDS.LINKEDIN]: {
        shieldBadge:
            'https://img.shields.io/badge/linkedin-%231E77B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white',
        title: 'Linkedin',
        href: (username: string) => `https://linkedin.com/in/${username}`,
    },
    [SOCIAL_SITE_IDS.KAGGLE]: {
        shieldBadge:
            'https://img.shields.io/badge/kaggle-%2344BAE8.svg?&style=for-the-badge&logo=kaggle&logoColor=white',
        title: 'kaggle',
        href: (username: string) => `https://www.kaggle.com/${username}`,
    },
    [SOCIAL_SITE_IDS.FACEBOOK]: {
        shieldBadge:
            'https://img.shields.io/badge/facebook-%232E87FB.svg?&style=for-the-badge&logo=facebook&logoColor=white',
        title: 'Facebook',
        href: (username: string) => `https://www.facebook.com/${username}`,
    },
    [SOCIAL_SITE_IDS.INSTAGRAM]: {
        shieldBadge:
            'https://img.shields.io/badge/instagram-%23000000.svg?&style=for-the-badge&logo=instagram&logoColor=white',
        title: 'Instagram',
        href: (username: string) => `https://instagram.com/${username}`,
    },
    [SOCIAL_SITE_IDS.DRIBBBLE]: {
        shieldBadge:
            'https://img.shields.io/badge/dribbble-%23E45285.svg?&style=for-the-badge&logo=dribbble&logoColor=white',
        title: 'Dribbble',
        href: (username: string) => `https://dribbble.com/${username}`,
    },
    [SOCIAL_SITE_IDS.BEHANCE]: {
        shieldBadge:
            'https://img.shields.io/badge/behance-%23191919.svg?&style=for-the-badge&logo=behance&logoColor=white',
        title: 'Behance',
        href: (username: string) => `https://www.behance.net/${username}`,
    },
    [SOCIAL_SITE_IDS.MEDIUM]: {
        shieldBadge:
            'https://img.shields.io/badge/medium-%23292929.svg?&style=for-the-badge&logo=medium&logoColor=white',
        title: 'Medium',
        href: (username: string) => `https://medium.com/${username}`,
    },
    [SOCIAL_SITE_IDS.YOUTUBE]: {
        shieldBadge:
            'https://img.shields.io/badge/youtube-%23EE4831.svg?&style=for-the-badge&logo=youtube&logoColor=white',
        title: 'YouTube',
        href: (username: string) => `https://www.youtube.com/user/${username}`,
    },
};
