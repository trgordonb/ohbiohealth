module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: [env('APP_KEY1'),env('APP_KEY2'),env('APP_KEY3'),env('APP_KEY4')],
  },
});
