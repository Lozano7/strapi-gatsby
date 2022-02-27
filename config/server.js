module.exports = ({ env }) => ({
  app: {
    keys: env.array("APP_KEYS"),
  },
  proxy: true,
  url: env("MY_HEROKU_URL"),
});
