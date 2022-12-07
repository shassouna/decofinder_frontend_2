    /* @type {import('next').NextConfig} */
    const { i18n } = require('./next-i18next.config');
    
    const nextConfig = {
      i18n,
      reactStrictMode: true,
      async rewrites() {
        return {
          fallback: [
            {
              source: '/pp:id/:slug',
              destination: '/pp/:id/:slug'
          }
          ]
        }
      }
    }
    
    module.exports = nextConfig
    