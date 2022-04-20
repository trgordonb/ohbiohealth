'use strict';

/**
 *  document controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::document.document', ({ strapi }) => ({
    async findDocByClient(ctx) {
        const { params } = ctx
        const results = await strapi.service('api::document.document').findByClient(params.client)

        return this.transformResponse(results)
    }
}));
