"use strict";
module.exports = {
  async getResult(ctx) {
    const queryParams = ctx.request.query;
    if (!queryParams.approachId || !queryParams.signId || !queryParams.rootId) {
      return {
        success: false,
        message: "array of approachId, signId and rootId are required",
      };
    }
    const resultFiltered = [];
    for (let approachId of queryParams.approachId) {
      for (let signId of queryParams.signId) {
        for (let rootId of queryParams.rootId) {
          let stepsResults = await strapi.db
            .query("api::earth-steps-result.earth-steps-result")
            .findOne({
              where: {
                $and: [
                  { earth_approach: approachId },
                  { earth_sign: signId },
                  { earth_root: rootId },
                ],
              },
              orderBy: { publishedAt: "DESC" },
              populate: ["earth_approach_result"],
            });
          resultFiltered.push(stepsResults);
          resultFiltered.map((i) => i.earth_approach_result.id);
        }
      }
    }
    const approach = await strapi.db
      .query("api::earth-approach.earth-approach")
      .findMany({
        where: {
          id: queryParams.approachId,
        },
        orderBy: { publishedAt: "DESC" },
      });

    const results = await strapi.db
      .query("api::earth-approach-result.earth-approach-result")
      .findMany({
        where: {
          id: resultFiltered.map((i) => i.earth_approach_result.id),
        },
        orderBy: { publishedAt: "DESC" },
      });

    return { results, approach };
  },
};
