// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'sruthik11', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/portfolio',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['sruthik11/Data_Enrollment_ASEE', 'sruthik11/DataAnalytics_ASEE_Data', 'sruthik11/Chat-App', 'sruthik11/Handwritten-Digit-Recognition', 'sruthik11/Color-Detection', 'sruthik11/Twitter-Personality-Analysis', 'sruthik11/Tic-Tac-Toe', 'sruthik11/Covid-Vaccinated-Filter-Spark-AR-'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Image Caption Generation',
          description:
            'This research transforms image captioning by merging Vision Transformers (ViTs) with advanced RNNs, addressing repetitive caption issues. It contrasts traditional models (InceptionV3, VGG16) with ViT + GPT-2, showcasing superior contextual understanding and language modeling in the latter. Evaluation metrics highlight ViT + GPT-2 improved caption quality, coherence, and diversity, underscoring the transformative impact of transformer-based models in image caption generation.',
          imageUrl:
            'https://www.researchgate.net/publication/347760884/figure/fig2/AS:1002138310303745@1615939800587/Some-examples-of-image-captioning-Each-caption-describes-the-image-above-it-These.png',
          link: 'https://github.com/sruthik11/Image-Caption-Generation',
        },
        {
          title: 'Classification of Mushrooms using the UCI Mushroom Dataset',
          description:
            'This project utilizes the UCI Mushroom dataset to predict the edibility of mushrooms, employing Principal Component Analysis (PCA) and a K-NN classifier. The analysis assesses the impact of model correctness, emphasizing the significance of features and dimensionality reduction for accurate predictions. The results underscore the importance of these techniques in enhancing the accuracy of mushroom edibility classification.',
          imageUrl:            
            'https://favtutor.com/resources/images/uploads/mceu_39837029531610970411922.png',
          link: 'https://github.com/sruthik11/Mushroom-Classification_Data-Mining-Final-Project_CSCI-5502',
        },
        {
          title: 'Tag Prediction using StackOverflow Dataset',
          description:
            'The StackOverflow platform is used by millions of users to post questions, provide answers or even search answers for questions posted by the user. While posting the questions users can assign tags that are closely related to the question. The problem space is to use the StackOverflow Dataset to predict tags of the questions posted. An efficient way for tagging is necessary since adding tags to questions manually is a burden to the user and reduces the overall user experience of the website. Machine Learning is used to assign tags to questions',
          imageUrl:            
            'https://jessehouwing.net/content/images/size/w2000/2018/07/stackoverflow-1.png',
          link: 'https://github.com/sruthik11/StackOverflow-Tag-Prediction-',
        },
        {
          title: 'Bridge - A Platform for Cross-Cultural Interactions',
          description:
            'The project aims to foster cross-cultural exchange by providing a web-based platform where users can connect based on shared interests, gender, and ethnicity. Upon signing up and creating profiles, users can filter and discover like-minded individuals depicted on a map. The map visually displays nearby users, and clicking on icons reveals user details. Connections can be initiated through email, promoting a diverse and interconnected community.',
          imageUrl:            
            'https://learn.g2.com/hubfs/cross-cultural%20communication.png',
          link: 'https://github.com/srsa1195/dsc-bridge-app',
        },
        {
          title: 'Medify',
          description:
            'This mobile app showcases healthcare data security. Tailored for doctors, patients, pharmacists, and radiologists, it employs Android Studio, Firebase, and RSA encryption. Ensuring secure data handling, it encrypts sensitive information before cloud storage, adding an extra layer of protection. The user-friendly interface promotes efficient communication.',
          imageUrl:            
            'https://www.netsolutions.com/insights/wp-content/uploads/2022/05/how-to-implement-healthcare-data-security.png.webp',
          link: 'https://github.com/sruthik11/Medify',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Sruthi Sampath Kumar',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'sruthi-sampath-kumar', 
    phone: '+1 3465435740',
    email: 'srsa1195@colorado.edu',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1Rzj6KL6CritikL_Gyf35Ek6yvPmT25E0/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'MySQL',
    'Microsoft Excel',
    'Tableau',
    'NumPy',
    'Pandas',
    'Matplotlib',
    'SciKit',
    'NLTK',
    'Data Analytics', 
    'Java',
    'Android Studio',
    'Zeplin',
    'Figma',
    'Git',
    'Google Cloud Platform',
    'Docker',
  ],
  experiences: [
    {
      company: 'University of Colorado Boulder',
      position: 'Graduate Student Assistant - Grader',
      from: 'January 2024',
      to: 'Present',
      companyLink: '',
      body: 'Assisting Dr Danna Gurari in grading assignments and projects for 100+ students each week. Review Lab assignments and problem sets every week.',
    },
    {
      company: 'University of Colorado Boulder',
      position: 'Data Analyst',
      from: 'May 2023',
      to: 'January 2024',
      companyLink: '',
      body: 'Achieved a 5-second processing speed for ASEE dataset demographic analysis using a Python script. Realized a 90% efficiency gain in student count by department, degree, and demographics with a second script. Employed Excel, Python, and Tableau for efficient data transformation and visualization.',
    },
    {
      company: 'Colorado Space Grant Consortium (GLEE), Boulder',
      position: 'Software Engineer Intern',
      from: 'May 2023',
      to: 'October 2023',
      companyLink: '',
      body: 'Engineered a Python-based lunar power model, reducing sensor deployment time by 30%, improved data acquisition, and conducted rigorous unit tests, boosting team productivity and project success.',
    },
    {
      company: 'ICICI Lombard GIC, India',
      position: 'Software Developer',
      from: 'May 2023',
      to: 'October 2023',
      companyLink: '',
      body: 'Implemented seamless healthcare access through online consultations, streamlined doctor appointments and prescription management, and introduced innovative in-app insurance purchases with instant quotes and flexible payment options.',
    },
  ],
  certifications: [
    {
      name: 'Google Data Analytics',
      body: '',
      year: 'July 2022',
      link: 'https://coursera.org/share/c8e264bc44bec587f5e6d2d7a21cf865',
    },
  ],
  educations: [
    {
      institution: 'University of Colorado Boulder',
      degree: 'Masters of Science, Computer Science Engineering ',
      from: '2022',
      to: '2024',
      gpa: '3.90/4.0',
    },
    {
      institution: 'Manipal Institute of Technology',
      degree: 'Bachelor of Technology, Computer and Communication Engineering',
      from: '2017',
      to: '2021',
      gpa: '9.24/10.0',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 3, // How many articles to display. Max is 10.
  },
  aboutMe : {
    description : 'Passionate about technology and currently pursuing a Masters in Computer Science Engineering at the University of Colorado, Boulder. Proficient in Java, Python, SQL, Tableau, Jupyter Notebook, Excel, Android Development, and Google Cloud Platform, my skills bridge Software Engineering and Data Science. I specialize in crafting efficient software solutions and optimizing data processing for actionable insights. Experienced in leading projects with a holistic approach, I thrive on transparent communication and continuous learning. Whether it iss software applications, end-to-end ML pipelines, or data analytics, I bring a versatile perspective. Actively seeking roles in Software Engineering, Data Engineering, Data Analysis, or Machine Learning from May 2024. Lets connect via email to explore opportunities together!',
  },
  googleAnalytics: {
    id: 'G-FTZLRQRRZN', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'light',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'dark',
      'cupcake',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: '',

  // enablePWA: true,
};

export default CONFIG;
