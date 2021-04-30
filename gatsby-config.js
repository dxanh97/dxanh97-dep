module.exports = {
  siteMetadata: {
    title: 'dxanh97',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@dxanh97/components': 'src/components',
        },
        extensions: [],
      },
    },
  ],
};
