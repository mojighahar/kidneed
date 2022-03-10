'use strict';
"use strict";
module.exports = {
  routes: [
    {
      method: "GET",
      path: "/earth/result",
      handler: "earth-steps-result.getResult",
      config: {
        auth: false
      },
    },
  ],
};
