module.exports = {
  siteMetadata: {
    title: 'dxanh97',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {},
        extensions: [],
      },
    },
  ],
};
