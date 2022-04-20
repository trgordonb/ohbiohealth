module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/documents/byclient/:client',
            handler: 'document.findDocByClient',
            config: {
                auth: false
            }
        }
    ]
}