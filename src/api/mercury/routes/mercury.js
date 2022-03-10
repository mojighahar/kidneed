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
    {
      method: "GET",
      path: "/children/:id/dashboard",
      handler: "mercury.childrenDashboard",
      config: {
        prefix: "mercury",
        policies: [],
        middlewares: [],
      },
    },
  ],
};
