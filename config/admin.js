module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '582126596887c1f488d5993d869af95a'),
  },
});
