const utils = require("@strapi/utils");
const { getService } = require("../utils");
const { sanitize } = utils;
const { ValidationError } = utils.errors;

const sanitizeUser = (user, ctx) => {
  const { auth } = ctx.state;
  const userSchema = strapi.getModel("plugin::users-permissions.user");

  return sanitize.contentAPI.output(user, userSchema, { auth });
};

module.exports = {
  async jwt(ctx) {
    const params = ctx.request.body;

    const user = await strapi
      .query("plugin::users-permissions.user")
      .findOne({ where: { id: params.id } });

    if (!user) {
      throw new ValidationError("User not found");
    }

    ctx.send({
      jwt: getService("jwt").issue({
        id: user.id,
      }),
      user: await sanitizeUser(user, ctx),
    });
  },
};
