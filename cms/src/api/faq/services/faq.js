'use strict';

/**
 * faq service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::faq.faq', ({ strapi }) => ({
    findFaqByClient(client) {
        return strapi.entityService.findMany('api::faq.faq', {
            filters: {
                client: client
            }
        })
    }
}))