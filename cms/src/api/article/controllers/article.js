'use strict';

/**
 *  article controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::article.article', ({ strapi }) => ({
    async findArticleByClient(ctx) {
        const { params } = ctx
        const results = await strapi.service('api::article.article').findByClient(params.client)

        return this.transformResponse(results)
    }
}));
