/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  styledComponents: true,
  exportPathMap: async (defaultPathMap) => {
    return defaultPathMap;
  },
  images: {
    loader: 'akamai',
    path: '',
  },
};

module.exports = nextConfig;
