module.exports = {
  routes: [
    {
      method: "POST",
      path: "/core/otp",
      handler: "login.requestOTP",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "POST",
      path: "/core/login",
      handler: "login.login",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
