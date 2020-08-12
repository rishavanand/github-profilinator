/* eslint-disable prettier/prettier */
const BASE_URL=document.URL

export const SKILLS = {
    vuejs: {
        label: 'Vue.js',
        value: 'vuejs',
        iconUrl: 'https://devicons.github.io/devicon/devicon.git/icons/vuejs/vuejs-original-wordmark.svg',
    },
    react: {
        label: 'React',
        value: 'react',
        iconUrl: 'https://devicons.github.io/devicon/devicon.git/icons/react/react-original-wordmark.svg',
    },
    angularjs: {
        label: 'AngularJS',
        value: 'angularjs',
        iconUrl: 'https://devicons.github.io/devicon/devicon.git/icons/angularjs/angularjs-original.svg',
    },
    aws: {
        label: 'AWS',
        value: 'aws',
        iconUrl:
            'https://devicons.github.io/devicon/devicon.git/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    },
    android: {
        label: 'Android',
        value: 'android',
        iconUrl: 'https://devicons.github.io/devicon/devicon.git/icons/android/android-original-wordmark.svg',
    },
    backbonejs: {
        label: 'Backbone.js',
        value: 'backbonejs',
        iconUrl: 'https://devicons.github.io/devicon/devicon.git/icons/backbonejs/backbonejs-original-wordmark.svg',
    },
    bootstrap: {
        label: 'Bootstrap',
        value: 'bootstrap',
        iconUrl: 'https://devicons.github.io/devicon/devicon.git/icons/bootstrap/bootstrap-plain.svg',
    },
    c: {
        label: 'C',
        value: 'c',
        iconUrl: 'https://devicons.github.io/devicon/devicon.git/icons/c/c-original.svg',
    },
    cplusplus: {
        label: 'C++',
        value: 'cplusplus',
        iconUrl: 'https://devicons.github.io/devicon/devicon.git/icons/cplusplus/cplusplus-original.svg',
    },
    css3: {
        label: 'CSS3',
        value: 'css3',
        iconUrl: 'https://devicons.github.io/devicon/devicon.git/icons/css3/css3-original-wordmark.svg',
    },
    csharp: {
        label: 'C#',
        value: 'csharp',
        iconUrl: 'https://devicons.github.io/devicon/devicon.git/icons/csharp/csharp-original.svg',
    },
    d3js: {
        label: 'D3.js',
        value: 'd3js',
        iconUrl: 'https://devicons.github.io/devicon/devicon.git/icons/d3js/d3js-original.svg',
    },
    django: {
        label: 'Django',
        value: 'django',
        iconUrl: 'https://devicons.github.io/devicon/devicon.git/icons/django/django-original.svg',
    },
    docker: {
        label: 'Docker',
        value: 'docker',
        iconUrl: 'https://devicons.github.io/devicon/devicon.git/icons/docker/docker-original-wordmark.svg',
    },
    dotnet: {
        label: '.NET',
        value: 'dotnet',
        iconUrl: 'https://devicons.github.io/devicon/devicon.git/icons/dot-net/dot-net-original-wordmark.svg',
    },
    electron: {
        label: 'Electron',
        value: 'electron',
        iconUrl: 'https://devicons.github.io/devicon/devicon.git/icons/electron/electron-original.svg',
    },
    go: {
        label: 'Go',
        value: 'go',
        iconUrl: 'https://devicons.github.io/devicon/devicon.git/icons/go/go-original.svg',
    },
    gulp: {
        label: 'gulp.js',
        value: 'gulp',
        iconUrl: 'https://devicons.github.io/devicon/devicon.git/icons/gulp/gulp-plain.svg',
    },
    html5: {
        label: 'HTML5',
        value: 'html5',
        iconUrl: 'https://devicons.github.io/devicon/devicon.git/icons/html5/html5-original-wordmark.svg',
    },
    java: {
        label: 'Java',
        value: 'java',
        iconUrl: 'https://devicons.github.io/devicon/devicon.git/icons/java/java-original-wordmark.svg',
    },
    javascript: {
        label: 'JavaScript',
        value: 'javascript',
        iconUrl: 'https://devicons.github.io/devicon/devicon.git/icons/javascript/javascript-original.svg',
    },
    typescript: {
        label: 'TypeScript',
        value: 'typescript',
        iconUrl: 'https://devicons.github.io/devicon/devicon.git/icons/typescript/typescript-original.svg',
    },
    laravel: {
        label: 'Laravel',
        value: 'laravel',
        iconUrl: 'https://devicons.github.io/devicon/devicon.git/icons/laravel/laravel-plain-wordmark.svg',
    },
    symfony: {
        label: 'Symfony',
        value: 'symfony',
        iconUrl: 'https://symfony.com/logos/symfony_black_03.svg',
    },
    codeigniter: {
        label: 'CodeIgniter',
        value: 'codeigniter',
        iconUrl: 'https://cdn.worldvectorlogo.com/logos/codeigniter.svg',
    },
    mongodb: {
        label: 'MongoDB',
        value: 'mongodb',
        iconUrl: 'https://devicons.github.io/devicon/devicon.git/icons/mongodb/mongodb-original-wordmark.svg',
    },
    mysql: {
        label: 'MySQL',
        value: 'mysql',
        iconUrl: 'https://devicons.github.io/devicon/devicon.git/icons/mysql/mysql-original-wordmark.svg',
    },
    php: {
        label: 'PHP',
        value: 'php',
        iconUrl: 'https://devicons.github.io/devicon/devicon.git/icons/php/php-original.svg',
    },
    postgresql: {
        label: 'PostgreSQL',
        value: 'postgresql',
        iconUrl: 'https://devicons.github.io/devicon/devicon.git/icons/postgresql/postgresql-original-wordmark.svg',
    },
    rails: {
        label: 'Ruby on Rails',
        value: 'rails',
        iconUrl: 'https://devicons.github.io/devicon/devicon.git/icons/rails/rails-original-wordmark.svg',
    },
    redis: {
        label: 'Redis',
        value: 'redis',
        iconUrl: 'https://devicons.github.io/devicon/devicon.git/icons/redis/redis-original-wordmark.svg',
    },
    ruby: {
        label: 'Ruby',
        value: 'ruby',
        iconUrl: 'https://devicons.github.io/devicon/devicon.git/icons/ruby/ruby-original-wordmark.svg',
    },
    rust: {
        label: 'Rust',
        value: 'rust',
        iconUrl: 'https://devicons.github.io/devicon/devicon.git/icons/rust/rust-plain.svg',
    },
    sass: {
        label: 'Sass',
        value: 'sass',
        iconUrl: 'https://devicons.github.io/devicon/devicon.git/icons/sass/sass-original.svg',
    },
    scala: {
        label: 'Scala',
        value: 'scala',
        iconUrl: 'https://devicons.github.io/devicon/devicon.git/icons/scala/scala-original-wordmark.svg',
    },
    nodejs: {
        label: 'Node.js',
        value: 'nodejs',
        iconUrl: 'https://devicons.github.io/devicon/devicon.git/icons/nodejs/nodejs-original-wordmark.svg',
    },
    python: {
        label: 'Python',
        value: 'python',
        iconUrl: 'https://devicons.github.io/devicon/devicon.git/icons/python/python-original.svg',
    },
    swift: {
        label: 'Swift',
        value: 'swift',
        iconUrl: 'https://devicons.github.io/devicon/devicon.git/icons/swift/swift-original-wordmark.svg',
    },
    spring: {
        label: 'Spring',
        value: 'spring',
        iconUrl: 'https://www.vectorlogo.zone/logos/springio/springio-icon.svg',
    },
    oracle: {
        label: 'Oracle',
        value: 'oracle',
        iconUrl: 'https://devicons.github.io/devicon/devicon.git/icons/oracle/oracle-original.svg',
    },
    nginx: {
        label: 'Nginx',
        value: 'nginx',
        iconUrl: 'https://devicons.github.io/devicon/devicon.git/icons/nginx/nginx-original.svg',
    },
    linux: {
        label: 'Linux',
        value: 'linux',
        iconUrl: 'https://devicons.github.io/devicon/devicon.git/icons/linux/linux-original.svg',
    },
    redux: {
        label: 'Redux',
        value: 'redux',
        iconUrl: 'https://devicons.github.io/devicon/devicon.git/icons/redux/redux-original.svg',
    },
    webpack: {
        label: 'Webpack',
        value: 'webpack',
        iconUrl: 'https://devicons.github.io/devicon/devicon.git/icons/webpack/webpack-original.svg',
    },
    express: {
        label: 'Express.js',
        value: 'express',
        iconUrl: 'https://devicons.github.io/devicon/devicon.git/icons/express/express-original-wordmark.svg',
    },
    flutter: {
        label: 'Flutter',
        value: 'flutter',
        iconUrl: 'https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg',
    },
    dart: {
        label: 'Dart',
        value: 'dart',
        iconUrl: 'https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg',
    },
    kotlin: {
        label: 'Kotlin',
        value: 'kotlin',
        iconUrl: 'https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg',
    },
    tensorflow: {
        label: 'TensorFlow',
        value: 'tensorflow',
        iconUrl: 'https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg',
    },
    chartjs: {
        label: 'Chart.js',
        value: 'chartjs',
        iconUrl: 'https://www.chartjs.org/media/logo-title.svg',
    },
    jenkins: {
        label: 'Jenkins',
        value: 'jenkins',
        iconUrl: 'https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg',
    },
    gcp: {
        label: 'GCP',
        value: 'gcp',
        iconUrl: 'https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg',
    },
    kubernetes: {
        label: 'Kubernetes',
        value: 'kubernetes',
        iconUrl: 'https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg',
    },
    azure: {
        label: 'Azure',
        value: 'azure',
        iconUrl: 'https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg',
    },
    git: {
        label: 'Git',
        value: 'git',
        iconUrl: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg',
    },
    kafka: {
        label: 'Kafka',
        value: 'kafka',
        iconUrl: 'https://www.vectorlogo.zone/logos/apache_kafka/apache_kafka-icon.svg',
    },
    solr: {
        label: 'Solr',
        value: 'solr',
        iconUrl: 'https://www.vectorlogo.zone/logos/apache_solr/apache_solr-icon.svg',
    },
    cassandra: {
        label: 'Cassandra',
        value: 'cassandra',
        iconUrl: 'https://www.vectorlogo.zone/logos/apache_cassandra/apache_cassandra-icon.svg',
    },
    rabbitMQ: {
        label: 'RabbitMQ',
        value: 'rabbitMQ',
        iconUrl: 'https://www.vectorlogo.zone/logos/rabbitmq/rabbitmq-icon.svg',
    },
    hadoop: {
        label: 'Hadoop',
        value: 'hadoop',
        iconUrl: 'https://www.vectorlogo.zone/logos/apache_hadoop/apache_hadoop-icon.svg',
    },
    bash: {
        label: 'Bash',
        value: 'bash',
        iconUrl: 'https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg',
    },
    pytorch: {
        label: 'pytorch',
        value: 'pytorch',
        iconUrl: 'https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg',
    },
    opencv: {
        label: 'OpenCV',
        value: 'opencv',
        iconUrl: 'https://www.vectorlogo.zone/logos/opencv/opencv-icon.svg',
    },
    illustrator: {
        label: 'Illustrator',
        value: 'illustrator',
        iconUrl: 'https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg',
    },
    photoshop: {
        label: 'Photoshop',
        value: 'photoshop',
        iconUrl: 'https://devicons.github.io/devicon/devicon.git/icons/photoshop/photoshop-plain.svg',
    },
    figma: {
        label: 'Figma',
        value: 'figma',
        iconUrl: 'https://www.vectorlogo.zone/logos/figma/figma-icon.svg',
    },
    blender: {
        label: 'Blender',
        value: 'blender',
        iconUrl: 'https://download.blender.org/branding/community/blender_community_badge_white.svg',
    },
    adobeindesign: {
        label: 'Adobe InDesign',
        value: 'adobeindesign',
        iconUrl: BASE_URL + 'static/skills-assets/adobeindesign.svg',
    },
    raspberrypi: {
        label: 'Raspberry Pi',
        value: 'raspberrypi',
        iconUrl: BASE_URL + 'static/skills-assets/raspberrypi.png',
    },
    invision: {
        label: 'Invision',
        value: 'invision',
        iconUrl: BASE_URL + 'static/skills-assets/invision.svg',
    },
    gatsby: {
        label: 'Gatsby',
        value: 'gatsby',
        iconUrl: BASE_URL + 'static/skills-assets/gatsby.png',
    },
    adobepremierepro: {
        label: 'Premiere Pro',
        value: 'adobepremierepro',
        iconUrl: BASE_URL + 'static/skills-assets/adobepremierepro.png',
    },
    adobedreamweaver: {
        label: 'Dreamweaver ',
        value: 'adobedreamweaver',
        iconUrl: BASE_URL + 'static/skills-assets/adobedreamweaver.png',
    },
    woocommerce: {
        label: 'WooCommerce',
        value: 'woocommerce',
        iconUrl: BASE_URL + 'static/skills-assets/woocommerce.png',
    },
    adobexd: {
        label: 'Adobe XD',
        value: 'adobexd',
        iconUrl: BASE_URL + 'static/skills-assets/adobexd.png',
    },
    
    graphql: {
        label: 'GraphQL',
        value: 'graphql',
        iconUrl: BASE_URL + 'static/skills-assets/graphql.png',
    },
    openstack: {
        label: 'OpenStack',
        value: 'openstack',
        iconUrl: BASE_URL + 'static/skills-assets/openstack.png',
    },
    meteor: {
        label: 'Meteor',
        value: 'meteor',
        iconUrl: BASE_URL + 'static/skills-assets/meteor.svg',
    },
    keras: {
        label: 'Keras',
        value: 'keras',
        iconUrl: BASE_URL + 'static/skills-assets/keras.png',
    },
    ansible: {
        label: 'Ansible',
        value: 'ansible',
        iconUrl: BASE_URL + 'static/skills-assets/ansible.png',
    },
    tableau : {
        label: 'Tableau',
        value: 'tableau',
        iconUrl: BASE_URL + 'static/skills-assets/tableau.svg',
    },
    xampp : {
        label: 'XAMPP',
        value: 'xampp',
        iconUrl: BASE_URL + 'static/skills-assets/xampp.png',
    },
    grafana : {
        label: 'Grafana',
        value: 'grafana',
        iconUrl: BASE_URL + 'static/skills-assets/grafana.png',
    },
    mocha : {
        label: 'Mocha',
        value: 'mocha',
        iconUrl: BASE_URL + 'static/skills-assets/mocha.png',
    },
    chai : {
        label: 'Chai',
        value: 'chai',
        iconUrl: BASE_URL + 'static/skills-assets/chai.png',
    },
    d3 : {
        label: 'D3.js',
        value: 'd3',
        iconUrl: BASE_URL + 'static/skills-assets/d3.png',
    },
    firebase : {
        label: 'Firebase',
        value: 'firebase',
        iconUrl: BASE_URL + 'static/skills-assets/firebase.png',
    },
    powerbi : {
        label: 'Power Bi',
        value: 'powerbi',
        iconUrl: BASE_URL + 'static/skills-assets/powerbi.png',
    },
    nuxtjs : {
        label: 'Nuxt JS',
        value: 'nuxtjs',
        iconUrl: BASE_URL + 'static/skills-assets/nuxt.png',
    },
    latex : {
        label: 'Latex',
        value: 'latex',
        iconUrl: BASE_URL + 'static/skills-assets/latex.png',
    },
    arduino : {
        label: 'Arduino',
        value: 'arduino',
        iconUrl: BASE_URL + 'static/skills-assets/arduino.png',
    },
    mariadb : {
        label: 'Maria DB',
        value: 'mariadb',
        iconUrl: BASE_URL + 'static/skills-assets/mariadb.png',
    },
    
    elasticsearch : {
        label: 'Elastic Search',
        value: 'elasticsearch',
        iconUrl: BASE_URL + 'static/skills-assets/elasticsearch.png',
    },
    kibana : {
        label: 'Kibana',
        value: 'kibana',
        iconUrl: BASE_URL + 'static/skills-assets/kibana.png',
    },
    salesforce : {
        label: 'Salesforce',
        value: 'salesforce',
        iconUrl: BASE_URL + 'static/skills-assets/salesforce.png',
    },
    wordpress : {
        label: 'WordPress',
        value: 'wordpress',
        iconUrl: BASE_URL + 'static/skills-assets/wordpress.png',
    },
    influxdb : {
        label: 'InfluxDB',
        value: 'influxdb',
        iconUrl: BASE_URL + 'static/skills-assets/influxdb.svg',
    },
    jquery : {
        label: 'jQuery',
        value: 'jquery',
        iconUrl: BASE_URL + 'static/skills-assets/jquery.png',
    },
    lightroom : {
        label: 'Lightroom',
        value: 'lightroom',
        iconUrl: BASE_URL + 'static/skills-assets/lightroom.png',
    },
    r : {
        label: 'R',
        value: 'r',
        iconUrl: BASE_URL + 'static/skills-assets/r.svg',
    },
    xaml : {
        label: 'XAML',
        value: 'xaml',
        iconUrl: BASE_URL + 'static/skills-assets/xaml.png',
    },
    nativescript : {
        label: 'NativeScript',
        value: 'nativescript',
        iconUrl: BASE_URL + 'static/skills-assets/nativescript.png',
    },
    aftereffects : {
        label: 'After Effects',
        value: 'aftereffects',
        iconUrl: BASE_URL + 'static/skills-assets/aftereffects.png',
    },
    haskell : {
        label: 'Haskell',
        value: 'haskell',
        iconUrl: BASE_URL + 'static/skills-assets/haskell.png',
    },
    unity : {
        label: 'Unity',
        value: 'unity',
        iconUrl: BASE_URL + 'static/skills-assets/unity.png',
    },
    flask : {
        label: 'Flask',
        value: 'flask',
        iconUrl: BASE_URL + 'static/skills-assets/flask.png',
    },
    deno : {
        label: 'Deno',
        value: 'deno',
        iconUrl: BASE_URL + 'static/skills-assets/deno.svg',
    },
};
