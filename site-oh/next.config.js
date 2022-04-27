module.exports = {
  webpackDevMiddleware: (config) => {
    config.watchOptions.poll = 300;
    return config;
  },
  reactStrictMode: true,
  images: {
    domains: [
      'cms.ohbiohealth.club',
      'ohbiohealth.shop',
      'ensemble-tech.xyz',
      'ensemble-cms.s3.amazonaws.com'
    ]
  }
};
