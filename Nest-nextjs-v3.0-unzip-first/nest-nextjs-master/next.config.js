    /* @type {import('next').NextConfig} */
    const { i18n } = require('./next-i18next.config');
    
    const nextConfig = {
      i18n,
      reactStrictMode: true,
      async rewrites() {
        return {
          fallback: [
            // product
            {
              source: '/z:id/:slug',
              destination: '/z/:id/:slug'
            },
            // category
            {
              source: '/c:id/:slug',
              destination: '/c/:id/:slug'
            },
            // exposant
            {
              source: '/pp:id/:slug',
              destination: '/pp/:id/:slug'
            },
            // typeprod
            {
              source: '/p:id/:slug',
              destination: '/p/:id/:slug'
            },
          ]
        }
      }
    }
    
    module.exports = nextConfig
    