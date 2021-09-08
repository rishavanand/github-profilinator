/* eslint-disable prettier/prettier */
const BASE_URL = typeof window !== 'undefined' ? window.location.href : '';

type Skill = { label: string; value: string; iconUrl: string };

export const SKILLS: Record<string, Skill> = {
    terraform: {
        label: 'Terraform',
        value: 'terraform',
        iconUrl: BASE_URL + 'skills-assets/terraformio-icon.svg'
    },
    vuejs: {
        label: 'Vue.js',
        value: 'vuejs',
        iconUrl: BASE_URL + 'skills-assets/vuejs-original-wordmark.svg',
    },
    react: {
        label: 'React',
        value: 'react',
        iconUrl: BASE_URL + 'skills-assets/react-original-wordmark.svg',
    },
    angular: {
        label: 'Angular',
        value: 'angular',
        iconUrl: BASE_URL + 'skills-assets/angularjs-original.svg',
    },
    aws: {
        label: 'AWS',
        value: 'aws',
        iconUrl: BASE_URL + 'skills-assets/amazonwebservices-original-wordmark.svg',
    },
    android: {
        label: 'Android',
        value: 'android',
        iconUrl: BASE_URL + 'skills-assets/android-original-wordmark.svg',
    },
    backbonejs: {
        label: 'Backbone.js',
        value: 'backbonejs',
        iconUrl: BASE_URL + 'skills-assets/backbonejs-original-wordmark.svg',
    },
    bootstrap: {
        label: 'Bootstrap',
        value: 'bootstrap',
        iconUrl: BASE_URL + 'skills-assets/bootstrap-plain.svg',
    },
    c: {
        label: 'C',
        value: 'c',
        iconUrl: BASE_URL + 'skills-assets/c-original.svg',
    },
    cplusplus: {
        label: 'C++',
        value: 'cplusplus',
        iconUrl: BASE_URL + 'skills-assets/cplusplus-original.svg',
    },
    css3: {
        label: 'CSS3',
        value: 'css3',
        iconUrl: BASE_URL + 'skills-assets/css3-original-wordmark.svg',
    },
    csharp: {
        label: 'C#',
        value: 'csharp',
        iconUrl: BASE_URL + 'skills-assets/csharp-original.svg',
    },
    d3js: {
        label: 'D3.js',
        value: 'd3js',
        iconUrl: BASE_URL + 'skills-assets/d3js-original.svg',
    },
    django: {
        label: 'Django',
        value: 'django',
        iconUrl: BASE_URL + 'skills-assets/django-original.svg',
    },
    docker: {
        label: 'Docker',
        value: 'docker',
        iconUrl: BASE_URL + 'skills-assets/docker-original-wordmark.svg',
    },
    dotnet: {
        label: '.NET',
        value: 'dotnet',
        iconUrl: BASE_URL + 'skills-assets/dot-net-original-wordmark.svg',
    },
    electron: {
        label: 'Electron',
        value: 'electron',
        iconUrl: BASE_URL + 'skills-assets/electron-original.svg',
    },
    go: {
        label: 'Go',
        value: 'go',
        iconUrl: BASE_URL + 'skills-assets/go-original.svg',
    },
    gulp: {
        label: 'gulp.js',
        value: 'gulp',
        iconUrl: BASE_URL + 'skills-assets/gulp-plain.svg',
    },
    html5: {
        label: 'HTML5',
        value: 'html5',
        iconUrl: BASE_URL + 'skills-assets/html5-original-wordmark.svg',
    },
    java: {
        label: 'Java',
        value: 'java',
        iconUrl: BASE_URL + 'skills-assets/java-original-wordmark.svg',
    },
    javascript: {
        label: 'JavaScript',
        value: 'javascript',
        iconUrl: BASE_URL + 'skills-assets/javascript-original.svg',
    },
    typescript: {
        label: 'TypeScript',
        value: 'typescript',
        iconUrl: BASE_URL + 'skills-assets/typescript-original.svg',
    },
    laravel: {
        label: 'Laravel',
        value: 'laravel',
        iconUrl: BASE_URL + 'skills-assets/laravel-plain-wordmark.svg',
    },
    symfony: {
        label: 'Symfony',
        value: 'symfony',
        iconUrl: BASE_URL + 'skills-assets/symfony_black_03.svg',
    },
    codeigniter: {
        label: 'CodeIgniter',
        value: 'codeigniter',
        iconUrl: BASE_URL + 'skills-assets/codeigniter.svg',
    },
    mongodb: {
        label: 'MongoDB',
        value: 'mongodb',
        iconUrl: BASE_URL + 'skills-assets/mongodb-original-wordmark.svg',
    },
    mysql: {
        label: 'MySQL',
        value: 'mysql',
        iconUrl: BASE_URL + 'skills-assets/mysql-original-wordmark.svg',
    },
    php: {
        label: 'PHP',
        value: 'php',
        iconUrl: BASE_URL + 'skills-assets/php-original.svg',
    },
    postgresql: {
        label: 'PostgreSQL',
        value: 'postgresql',
        iconUrl: BASE_URL + 'skills-assets/postgresql-original-wordmark.svg',
    },
    rails: {
        label: 'Ruby on Rails',
        value: 'rails',
        iconUrl: BASE_URL + 'skills-assets/rails-original-wordmark.svg',
    },
    redis: {
        label: 'Redis',
        value: 'redis',
        iconUrl: BASE_URL + 'skills-assets/redis-original-wordmark.svg',
    },
    ruby: {
        label: 'Ruby',
        value: 'ruby',
        iconUrl: BASE_URL + 'skills-assets/ruby-original-wordmark.svg',
    },
    rust: {
        label: 'Rust',
        value: 'rust',
        iconUrl: BASE_URL + 'skills-assets/rust-plain.svg',
    },
    sass: {
        label: 'Sass',
        value: 'sass',
        iconUrl: BASE_URL + 'skills-assets/sass-original.svg',
    },
    scala: {
        label: 'Scala',
        value: 'scala',
        iconUrl: BASE_URL + 'skills-assets/scala-original-wordmark.svg',
    },
    nodejs: {
        label: 'Node.js',
        value: 'nodejs',
        iconUrl: BASE_URL + 'skills-assets/nodejs-original-wordmark.svg',
    },
    python: {
        label: 'Python',
        value: 'python',
        iconUrl: BASE_URL + 'skills-assets/python-original.svg',
    },
    swift: {
        label: 'Swift',
        value: 'swift',
        iconUrl: BASE_URL + 'skills-assets/swift-original-wordmark.svg',
    },
    spring: {
        label: 'Spring',
        value: 'spring',
        iconUrl: BASE_URL + 'skills-assets/springio-icon.svg',
    },
    oracle: {
        label: 'Oracle',
        value: 'oracle',
        iconUrl: BASE_URL + 'skills-assets/oracle-original.svg',
    },
    nginx: {
        label: 'Nginx',
        value: 'nginx',
        iconUrl: BASE_URL + 'skills-assets/nginx-original.svg',
    },
    linux: {
        label: 'Linux',
        value: 'linux',
        iconUrl: BASE_URL + 'skills-assets/linux-original.svg',
    },
    redux: {
        label: 'Redux',
        value: 'redux',
        iconUrl: BASE_URL + 'skills-assets/redux-original.svg',
    },
    webpack: {
        label: 'Webpack',
        value: 'webpack',
        iconUrl: BASE_URL + 'skills-assets/webpack-original.svg',
    },
    express: {
        label: 'Express.js',
        value: 'express',
        iconUrl: BASE_URL + 'skills-assets/express-original-wordmark.svg',
    },
    flutter: {
        label: 'Flutter',
        value: 'flutter',
        iconUrl: BASE_URL + 'skills-assets/flutterio-icon.svg',
    },
    dart: {
        label: 'Dart',
        value: 'dart',
        iconUrl: BASE_URL + 'skills-assets/dartlang-icon.svg',
    },
    kotlin: {
        label: 'Kotlin',
        value: 'kotlin',
        iconUrl: BASE_URL + 'skills-assets/kotlinlang-icon.svg',
    },
    tensorflow: {
        label: 'TensorFlow',
        value: 'tensorflow',
        iconUrl: BASE_URL + 'skills-assets/tensorflow-icon.svg',
    },
    chartjs: {
        label: 'Chart.js',
        value: 'chartjs',
        iconUrl: BASE_URL + 'skills-assets/logo-title.svg',
    },
    jenkins: {
        label: 'Jenkins',
        value: 'jenkins',
        iconUrl: BASE_URL + 'skills-assets/jenkins-icon.svg',
    },
    gcp: {
        label: 'GCP',
        value: 'gcp',
        iconUrl: BASE_URL + 'skills-assets/google_cloud-icon.svg',
    },
    kubernetes: {
        label: 'Kubernetes',
        value: 'kubernetes',
        iconUrl: BASE_URL + 'skills-assets/kubernetes-icon.svg',
    },
    azure: {
        label: 'Azure',
        value: 'azure',
        iconUrl: BASE_URL + 'skills-assets/microsoft_azure-icon.svg',
    },
    git: {
        label: 'Git',
        value: 'git',
        iconUrl: BASE_URL + 'skills-assets/git-scm-icon.svg',
    },
    kafka: {
        label: 'Kafka',
        value: 'kafka',
        iconUrl: BASE_URL + 'skills-assets/apache_kafka-icon.svg',
    },
    solr: {
        label: 'Solr',
        value: 'solr',
        iconUrl: BASE_URL + 'skills-assets/apache_solr-icon.svg',
    },
    cassandra: {
        label: 'Cassandra',
        value: 'cassandra',
        iconUrl: BASE_URL + 'skills-assets/apache_cassandra-icon.svg',
    },
    rabbitMQ: {
        label: 'RabbitMQ',
        value: 'rabbitMQ',
        iconUrl: BASE_URL + 'skills-assets/rabbitmq-icon.svg',
    },
    hadoop: {
        label: 'Hadoop',
        value: 'hadoop',
        iconUrl: BASE_URL + 'skills-assets/apache_hadoop-icon.svg',
    },
    bash: {
        label: 'Bash',
        value: 'bash',
        iconUrl: BASE_URL + 'skills-assets/gnu_bash-icon.svg',
    },
    pytorch: {
        label: 'pytorch',
        value: 'pytorch',
        iconUrl: BASE_URL + 'skills-assets/pytorch-icon.svg',
    },
    opencv: {
        label: 'OpenCV',
        value: 'opencv',
        iconUrl: BASE_URL + 'skills-assets/opencv-icon.svg',
    },
    illustrator: {
        label: 'Illustrator',
        value: 'illustrator',
        iconUrl: BASE_URL + 'skills-assets/adobe_illustrator-icon.svg',
    },
    photoshop: {
        label: 'Photoshop',
        value: 'photoshop',
        iconUrl: BASE_URL + 'skills-assets/photoshop-plain.svg',
    },
    figma: {
        label: 'Figma',
        value: 'figma',
        iconUrl: BASE_URL + 'skills-assets/figma-icon.svg',
    },
    blender: {
        label: 'Blender',
        value: 'blender',
        iconUrl: BASE_URL + 'skills-assets/blender_community_badge_white.svg',
    },
    adobeindesign: {
        label: 'Adobe InDesign',
        value: 'adobeindesign',
        iconUrl: BASE_URL + 'skills-assets/adobeindesign.svg',
    },
    raspberrypi: {
        label: 'Raspberry Pi',
        value: 'raspberrypi',
        iconUrl: BASE_URL + 'skills-assets/raspberrypi.png',
    },
    invision: {
        label: 'Invision',
        value: 'invision',
        iconUrl: BASE_URL + 'skills-assets/invision.svg',
    },
    gatsby: {
        label: 'Gatsby',
        value: 'gatsby',
        iconUrl: BASE_URL + 'skills-assets/gatsby.png',
    },
    adobepremierepro: {
        label: 'Premiere Pro',
        value: 'adobepremierepro',
        iconUrl: BASE_URL + 'skills-assets/adobepremierepro.png',
    },
    adobedreamweaver: {
        label: 'Dreamweaver ',
        value: 'adobedreamweaver',
        iconUrl: BASE_URL + 'skills-assets/adobedreamweaver.png',
    },
    woocommerce: {
        label: 'WooCommerce',
        value: 'woocommerce',
        iconUrl: BASE_URL + 'skills-assets/woocommerce.png',
    },
    adobexd: {
        label: 'Adobe XD',
        value: 'adobexd',
        iconUrl: BASE_URL + 'skills-assets/adobexd.png',
    },

    graphql: {
        label: 'GraphQL',
        value: 'graphql',
        iconUrl: BASE_URL + 'skills-assets/graphql.png',
    },
    openstack: {
        label: 'OpenStack',
        value: 'openstack',
        iconUrl: BASE_URL + 'skills-assets/openstack.png',
    },
    meteor: {
        label: 'Meteor',
        value: 'meteor',
        iconUrl: BASE_URL + 'skills-assets/meteor.svg',
    },
    keras: {
        label: 'Keras',
        value: 'keras',
        iconUrl: BASE_URL + 'skills-assets/keras.png',
    },
    ansible: {
        label: 'Ansible',
        value: 'ansible',
        iconUrl: BASE_URL + 'skills-assets/ansible.png',
    },
    tableau: {
        label: 'Tableau',
        value: 'tableau',
        iconUrl: BASE_URL + 'skills-assets/tableau.svg',
    },
    xampp: {
        label: 'XAMPP',
        value: 'xampp',
        iconUrl: BASE_URL + 'skills-assets/xampp.png',
    },
    grafana: {
        label: 'Grafana',
        value: 'grafana',
        iconUrl: BASE_URL + 'skills-assets/grafana.png',
    },
    mocha: {
        label: 'Mocha',
        value: 'mocha',
        iconUrl: BASE_URL + 'skills-assets/mocha.png',
    },
    chai: {
        label: 'Chai',
        value: 'chai',
        iconUrl: BASE_URL + 'skills-assets/chai.png',
    },
    d3: {
        label: 'D3.js',
        value: 'd3',
        iconUrl: BASE_URL + 'skills-assets/d3.png',
    },
    firebase: {
        label: 'Firebase',
        value: 'firebase',
        iconUrl: BASE_URL + 'skills-assets/firebase.png',
    },
    powerbi: {
        label: 'Power Bi',
        value: 'powerbi',
        iconUrl: BASE_URL + 'skills-assets/powerbi.png',
    },
    nuxtjs: {
        label: 'Nuxt JS',
        value: 'nuxtjs',
        iconUrl: BASE_URL + 'skills-assets/nuxt.png',
    },
    latex: {
        label: 'Latex',
        value: 'latex',
        iconUrl: BASE_URL + 'skills-assets/latex.png',
    },
    arduino: {
        label: 'Arduino',
        value: 'arduino',
        iconUrl: BASE_URL + 'skills-assets/arduino.png',
    },
    mariadb: {
        label: 'Maria DB',
        value: 'mariadb',
        iconUrl: BASE_URL + 'skills-assets/mariadb.png',
    },

    elasticsearch: {
        label: 'Elastic Search',
        value: 'elasticsearch',
        iconUrl: BASE_URL + 'skills-assets/elasticsearch.png',
    },
    kibana: {
        label: 'Kibana',
        value: 'kibana',
        iconUrl: BASE_URL + 'skills-assets/kibana.png',
    },
    salesforce: {
        label: 'Salesforce',
        value: 'salesforce',
        iconUrl: BASE_URL + 'skills-assets/salesforce.png',
    },
    wordpress: {
        label: 'WordPress',
        value: 'wordpress',
        iconUrl: BASE_URL + 'skills-assets/wordpress.png',
    },
    influxdb: {
        label: 'InfluxDB',
        value: 'influxdb',
        iconUrl: BASE_URL + 'skills-assets/influxdb.svg',
    },
    jquery: {
        label: 'jQuery',
        value: 'jquery',
        iconUrl: BASE_URL + 'skills-assets/jquery.png',
    },
    lightroom: {
        label: 'Lightroom',
        value: 'lightroom',
        iconUrl: BASE_URL + 'skills-assets/lightroom.png',
    },
    r: {
        label: 'R',
        value: 'r',
        iconUrl: BASE_URL + 'skills-assets/r.svg',
    },
    xaml: {
        label: 'XAML',
        value: 'xaml',
        iconUrl: BASE_URL + 'skills-assets/xaml.png',
    },
    nativescript: {
        label: 'NativeScript',
        value: 'nativescript',
        iconUrl: BASE_URL + 'skills-assets/nativescript.png',
    },
    aftereffects: {
        label: 'After Effects',
        value: 'aftereffects',
        iconUrl: BASE_URL + 'skills-assets/aftereffects.png',
    },
    haskell: {
        label: 'Haskell',
        value: 'haskell',
        iconUrl: BASE_URL + 'skills-assets/haskell.png',
    },
    unity: {
        label: 'Unity',
        value: 'unity',
        iconUrl: BASE_URL + 'skills-assets/unity.png',
    },
    flask: {
        label: 'Flask',
        value: 'flask',
        iconUrl: BASE_URL + 'skills-assets/flask.png',
    },
    deno: {
        label: 'Deno',
        value: 'deno',
        iconUrl: BASE_URL + 'skills-assets/deno.svg',
    },
    nestjs: {
        label: 'NestJS',
        value: 'nestjs',
        iconUrl: BASE_URL + 'skills-assets/nestjs.svg',
    },
    bem: {
        label: 'BEM',
        value: 'bem',
        iconUrl: BASE_URL + 'skills-assets/bem.svg',
    },
    powershell: {
        label: 'PowerShell',
        value: 'powershell',
        iconUrl: BASE_URL + 'skills-assets/powershell.png',
    },
    gitlab: {
        label: 'GitLab',
        value: 'gitlab',
        iconUrl: BASE_URL + 'skills-assets/gitlab.svg',
    },
    dotnetcore: {
        label: '.Net Core',
        value: 'dotnetcore',
        iconUrl: BASE_URL + 'skills-assets/dotnetcore.png',
    },
    prisma: {
        label: 'Prisma',
        value: 'prisma',
        iconUrl: BASE_URL + 'skills-assets/prisma.png',
    },
};
