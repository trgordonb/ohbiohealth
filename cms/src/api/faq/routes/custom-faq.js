module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/faqs/byclient/:client',
            handler: 'faq.findFaqByClient',
            config: {
                auth: false
            }
        }
    ]
}