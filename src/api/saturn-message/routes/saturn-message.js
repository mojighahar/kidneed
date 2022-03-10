// module.exports = {
//   routes: [
//     // {
//     //  method: 'GET',
//     //  path: '/saturn-message',
//     //  handler: 'saturn-message.exampleAction',
//     //  config: {
//     //    policies: [],
//     //    middlewares: [],
//     //  },
//     // },
//   ],
// };


'use strict';

/**
 *  router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::saturn-message.saturn-message');
