module.exports = [
  'strapi::errors',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'ensemble-cms.s3.amazonaws.com'],
          'media-src': ["'self'", 'data:', 'blob:', 'ensemble-cms.s3.amazonaws.com'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
];
