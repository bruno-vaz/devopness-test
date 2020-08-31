const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'brunovaz.dev',
    author: 'Bruno Vaz <hello@brunovaz.dev>',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        displayName: false,
      },
    },
    'gatsby-plugin-preact',
    'gatsby-plugin-react-head',
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        components: path.join(__dirname, 'src/components'),
        vectors: path.join(__dirname, 'src/vectors'),
        images: path.join(__dirname, 'src/images'),
        helpers: path.join(__dirname, 'src/helpers'),
      },
    },
  ],
};
