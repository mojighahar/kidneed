"use strict";
const getProp = require("lodash/get");

module.exports = (policyContext, config, { strapi }) => {
  const { query } = policyContext.request;

  const userId = getProp(query, "filters.user.id.$eq");
  const { id } = policyContext.state.user;

  if (!userId) {
    return false;
  }

  return Number(userId) === id;
};
