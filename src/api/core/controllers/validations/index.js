"use strict";

const { yup, validateYupSchema } = require("@strapi/utils");

const createUserBodySchema = yup.object().shape({
  mobile: yup
    .string()
    .matches(/^(\+98|0)?9\d{9}$/)
    .required(),
});

module.exports = {
  validateCreateUserBody: validateYupSchema(createUserBodySchema),
};
