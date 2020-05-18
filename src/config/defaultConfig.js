module.exports = {
    root: process.cwd(),
    hostname: '127.0.0.1',
    port: '8888',
    compress: /\.(htnl|js|css|md)/,
    cache: {
        maxAge: 600,
        expires: true,
        cacheControl: true,
        lastModified: true,
        etag: true
    }
} 
