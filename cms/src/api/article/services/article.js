'use strict';

/**
 * article service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::article.article', ({ strapi }) => ({
    findByClient(client) {
        return strapi.entityService.findMany('api::article.article', {
            filters: {
                client: client
            }
        })
    }
}));
