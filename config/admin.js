module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ecb83a7b7276f57d7239d386de0ce6a2'),
  },
});
