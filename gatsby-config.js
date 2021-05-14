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
        alias: {
          '@dxanh97/components': 'src/components',
          '@dxanh97/components/*': 'src/components/*',
          '@dxanh97/constants': 'src/constants',
          '@dxanh97/models': 'src/models',
          '@dxanh97/utils': 'src/utils',
        },
        extensions: [],
      },
    },
  ],
};
