const random = require("./random");

const token = () => random(1000, 9999);

module.exports = token;
