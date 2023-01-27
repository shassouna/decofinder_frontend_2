/* @type {import('next').NextConfig} */

const { i18n } = require('./next-i18next.config');
    
    const nextConfig = {
      i18n,
      reactStrictMode: true,
      async rewrites(x) {
        console.log(x)
        return {
          fallback: [
            // product
            {
              source: '/z:id/:slug',
              destination: '/z/:id/:slug'
            },
            // typeprod
            {
              source: '/p:id/:slug',
              destination: '/p/:id/:slug'
            },
            // category
            {
              source: '/c:id/:slug',
              destination: '/c/:id/:slug'
            },
            // univers
            {
              source: '/u:id/:slug',
              destination: '/u/:id/:slug'
            },
            // superunivers
            {
              source: '/su:id/:slug',
              destination: '/su/:id/:slug'
            },
            // exposant
            {
              source: '/ss:id/:slug',
              destination: '/ss/:id/:slug'
            }
          ]
        }
      },   
    }
    
    module.exports = nextConfig
    