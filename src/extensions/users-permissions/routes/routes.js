module.exports = {
  routes: [
    {
      method: "POST",
      path: "/auth/jwt",
      handler: "auth.jwt",
      config: {
        prefix: "",
        middlewares: ["plugin::users-permissions.rateLimit"],
      },
    },
  ],
};
