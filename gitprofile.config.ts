// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'c9long', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 4, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['c9long/my-project1', 'c9long/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [
          'c9long/c9long.github.io',
          'ViridianCitrus/ece-452-project',
          'c9long/lord-vader',
          'c9long/discord-fishing',
        ], // List of repository names to display. example: ['c9long/my-project1', 'c9long/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Deprecate Legacy Authentication',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
        },
        {
          title: 'Clio Admin SAML Portal',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Christopher Long',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'c-r-long',
    website: 'https://c9long.github.io',
    phone: '905-621-3275',
    email: 'christopher.long@uwaterloo.ca',
  },
  resume: {
    fileUrl: 'resume.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Ruby/Rails',
    'C#/.NET',
    'TypeScript',
    'JavaScript',
    'React.js',
    'Node.js',
    'Nest.js',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'CSS',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'Clio',
      position: 'Software Developer Co-op',
      from: 'January 2025',
      to: 'August 2025',
      companyLink: 'https://www.clio.com/',
    },
    {
      company: 'Flightline Training Services',
      position: 'VR Developer',
      from: 'May 2024',
      to: 'December 2024',
      companyLink: 'https://www.flightlinetraining.com/',
    },
    {
      company: 'Manulife Financial',
      position: 'Cloud Platforms Engineering Intern',
      from: 'May 2023',
      to: 'August 2023',
      companyLink: 'https://www.manulife.com',
    },
    {
      company: 'Manulife Financial',
      position: 'ETS Security Operations Intern',
      from: 'May 2022',
      to: 'August 2022',
      companyLink: 'https://www.manulife.com',
    },
  ],
  certifications: [{}],
  educations: [
    {
      institution: 'University of Waterloo',
      degree: "Bachelor's Degree in Computer Science",
      from: '2021',
      to: '2026',
    },
    {
      institution: 'Tohoku University',
      degree: 'Tohoku University Japanese Program',
      from: '2026',
      to: '2026',
    },
  ],
  publications: [{}],
  // Display articles from your medium or dev account. (Optional)
  blog: {},
  googleAnalytics: {},
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {},
  themeConfig: {
    defaultTheme: 'corporate',

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
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },
  enablePWA: true,
};

export default CONFIG;
