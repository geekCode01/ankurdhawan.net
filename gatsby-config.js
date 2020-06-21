module.exports = {
  siteMetadata: {
    title: `Ankur Dhawan`,
    siteUrl: `https://ankurdhawan.net`,
    description: `Welcome to my blog.`,
    topics: [],
    menu: [
      {
        name: 'Home',
        path: '/'
      },
      {
        name: 'About',
        path: '/about-me'
      },
    ],
    footerMenu: [],
    search: true,
    author: {
      name: `ankurdhawan`,
      description: `I'm <strong>Ankur</strong>.
         If you like what you see feel free to give a <a href="https://github.com/ankur786-coder/ankurdhawan.net" rel="noopener" target="_blank">star on GitHub!</a>`,
      social: {
        facebook: ``,
        twitter: `https://twitter.com/AnkurDh86416728`,
        linkedin: `https://www.linkedin.com/in/ankur-dhawan-5494151a8`,
        instagram: ``,
        youtube: ``,
        github: `https://github.com/ankur786-coder`,
        twitch: ``
      }
    }
  },
  plugins: [
    {
      resolve: `@nehalist/gatsby-theme-nehalem`,
      options: {
        manifest: {
          name: `nehalem - A Gatsby theme`,
          short_name: `nehalem`,
          start_url: `/`,
          background_color: `#000000`,
          theme_color: `#000000`,
          display: `minimal-ui`,
          icon: `${__dirname}/content/assets/images/logo.png`
        }
      }
    }
  ]
};

