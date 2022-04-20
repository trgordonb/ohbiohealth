'use strict';

/**
 * document service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::document.document', ({ strapi }) => ({
    findByClient(client) {
        return strapi.entityService.findMany('api::document.document', {
            filters: {
                client: client
            }
        })
    }
}));
