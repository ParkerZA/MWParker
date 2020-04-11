module.exports = {
  siteTitle: '',
  title: '',
  authorName: 'MW Parker',
  twitterUsername: 'WaseemParker',
  siteDescription: '',
  authorAvatar: 'logo.png', // file in content/images
  defaultLang: 'en', // show flag if lang is not default. Leave empty to enable flags in post lists
  authorDescription: `Hi! I'm a web developer from Cape Town, South Africa. I write about anything and everything, including personal development, movies, music production and programming.`,
  siteUrl: 'https://mwparker.co.za/',
  disqusSiteUrl: '',
  // Prefixes all links. For cases when deployed to maxpou.fr/gatsby-starter-morning-dew/
  pathPrefix: '/', // Note: it must *not* have a trailing slash.
  siteCover: 'facebook_cover_photo_1.png', // file in content/images
  googleAnalyticsId: 'UA-67868977-1',
  description: '',
  background_color: '#ffffff',
  theme_color: '#222222',
  display: 'standalone',
  icon: 'content/images/favicon.png',
  postsPerPage: 6,
  disqusShortname: '',
  headerTitle: '',
  headerLinksIcon: 'logo.png', //  (leave empty to disable: '')
  headerLinks: [
    {
      label: '',
      url: '/',
    },
  ],
  // Footer information (ex: Github, Netlify...)
  websiteHost: {
    name: 'GitHub',
    url: 'https://github.com',
  },
  footerLinks: [
    // {
    //   sectionName: 'Explore',
    //   links: [
    //     {
    //       label: 'Blog',
    //       url: '/',
    //     },
    //     {
    //       label: 'About',
    //       url: '/about-gatsby-starter-morning-dew',
    //     },
    //     {
    //       label: 'Installation',
    //       url: '/how-to-install',
    //     },
    //   ],
    // },
    {
      sectionName: 'Follow the author',
      links: [
        {
          label: 'GitHub',
          url: 'https://github.com/ParkerZA',
        },
        {
          label: 'Twitter',
          url: 'https://twitter.com/WaseemParker',
        },
        {
          label: 'Instagram',
          url: 'https://www.instagram.com/mv.parker/',
        },
      ],
    },
  ],
}
