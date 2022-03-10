// 'use strict';

// /**
//  * saturn-message service.
//  */

// module.exports = () => ({});

'use strict';

/**
 *  service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::saturn-message.saturn-message');
