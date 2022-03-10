module.exports = {
  routes: [
    {
      method: "POST",
      path: "/dashboard/:childrenId/stats",
      handler: "mercury.dashboardStats",
      config: {
        prefix: "mercury",
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "GET",
      path: "/activities/:childrenId",
      handler: "mercury.childrenDashboard",
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
