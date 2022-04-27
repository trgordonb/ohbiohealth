module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/articles/byclient/:client',
            handler: 'article.findArticleByClient',
            config: {
                auth: false
            }
        }
    ]
}