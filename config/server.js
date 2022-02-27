module.exports = ({ env }) => ({
  host: env("DATABASE_HOST"),
  port: env.int("DATABASE_PORT"),
  app: {
    keys: env.array("APP_KEYS"),
  },
  url: env("MY_HEROKU_URL"),
});
