const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router('db.json');

// Serve static files from the "public" folder
const middlewares = jsonServer.defaults({
    static: path.join(__dirname, 'public')
});

server.use(middlewares);

// Rewriting API routes to match your expected endpoints
server.use(jsonServer.rewriter({
    '/api/*': '/$1',  // Example: "/api/CategoryCard" → "/CategoryCard"
    '/blog/:resource/:id/show': '/:resource/:id'
}));

// Use the router
server.use(router);

// Start server on port 8080
server.listen(8080, () => {
    console.log('✅ JSON Server is running on http://localhost:8080');
    console.log('📂 Serving static files from /public');
    console.log('🔗 API endpoint available at http://localhost:8080/CategoryCard');
});

// Export the Server API (if needed for integration)
module.exports = server;
