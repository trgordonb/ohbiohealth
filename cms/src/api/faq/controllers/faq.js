'use strict';

/**
 *  faq controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::faq.faq', ({ strapi }) => ({
    async findFaqByClient(ctx) {
        const { params } = ctx
        const results = await strapi.service('api::faq.faq').findFaqByClient(params.client)
        return this.transformResponse(results)
    }
}))