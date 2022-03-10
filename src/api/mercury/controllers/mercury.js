"use strict";
const jmoment = require("moment-jalaali");

/**
 * A set of functions called "actions" for `mercury`
 */

module.exports = {
  async dashboardStats(ctx) {
    let { start = null, end = null } = ctx.request.body;

    if(start)
      start = jmoment(start);
    else
      start = jmoment().startOf("jMonth");
    start = start.startOf("day").toDate();

    if(end)
      end = jmoment(end);
    else
      end = jmoment().endOf("jMonth");
    end = end.endOf("day").toDate();

    const activities = await strapi.query("api::activity.activity").findMany({
      where: {
        date: {
          $gte: start,
          $lte: end
        },
        type: {
          $in: ["book", "game", "video"]
        }
      }
    });

    return {
      "book": activities.filter(a => a.type === "book").reduce((partialSum, a) => partialSum + a, 0),
      "game": activities.filter(a => a.type === "game").reduce((partialSum, a) => partialSum + a, 0),
      "video": activities.filter(a => a.type === "video").reduce((partialSum, a) => partialSum + a, 0)
    };
  }
};
