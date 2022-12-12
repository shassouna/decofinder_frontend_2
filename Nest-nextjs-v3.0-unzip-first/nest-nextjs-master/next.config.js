    /* @type {import('next').NextConfig} */
    const { i18n } = require('./next-i18next.config');
    
    const nextConfig = {
      i18n,
      reactStrictMode: true,
      async rewrites() {
        return {
          fallback: [
            {
              source: '/z:id/:slug',
              destination: '/z/:id/:slug'
            },
            {
              source: '/c:id/:slug',
              destination: '/c/:id/:slug'
            }
          ]
        }
      }
    }
    
    module.exports = nextConfig
    