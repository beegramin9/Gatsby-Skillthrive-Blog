module.exports = {
  siteMetadata: {
    title: "Wontae\'s Dev Blog",
    description: "A simple blog built with Gatsby and MDX",
    url: 'https://wontaechoi.tech',
    image: 'blog2.jpg',
    twitterUsername: '@spald14',
    author: "WontaeChoi",
  },
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    /* lesson-5 */
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    /* Gatsby Cloud */
    'gatsby-plugin-gatsby-cloud',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.md','.mdx'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1920,
              quality: 90
            }
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'roboto mono',
          'muli\:400,400i,700,700i',
        ],
        display: 'swap',
      }
    },
  ],
}
