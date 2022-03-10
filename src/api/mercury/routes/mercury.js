module.exports = {
  routes: [
    {
      method: "POST",
      path: "/dashboard/stats",
      handler: "mercury.dashboardStats",
      config: {
        prefix: "mercury",
        policies: [],
        middlewares: [],
      },
    },
  ],
};
