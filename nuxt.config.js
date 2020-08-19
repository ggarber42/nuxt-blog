import { create } from 'domain';

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favgit remote add origin https://github.com/ggarber42/nuxt-blog.git.png' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Source+Code+Pro&family=Source+Sans+Pro&display=swap" rel="stylesheet'
      }
    ]
  },
  /*
   ** Global CSS
   */
  css: ['normalize.css/normalize.css', '@/assets/styles/main.scss'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
    '@nuxtjs/style-resources',
    '@nuxtjs/feed'
  ],
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-atom-dark.css'
      }
    }
  },
  styleResources: {
    scss: ['./assets/styles/main.scss']
  },
  feed: [
    {
      path: '/feed.xml',
      async create(feed) {
        feed.options = {
          // feedFormats: {
          //   rss: { type: 'rss2', file: 'rss.xml' },
          //   atom: { type: 'atom1', file: 'atom.xml' },
          //   json: { type: 'json1', file: 'feed.json' }
          // },
          title: 'DeviaSerDev',
          description: 'Posts do DeviaSerDev',
          link: 'https://www.deviaserdev.tech/feed.xml'
        };
        const { $content } = require('@nuxt/content');
        const posts = await $content('articles').fetch();
        posts.forEach((post) => {
          // the url of the post is set first
          const url = `https://www.deviaserdev.tech/${post.slug}`;
          feed.addItem({
            title: post.title,
            id: url,
            link: url,
            description: post.description,
            // description: post.blurb,
            // this is what we did in part two! Accessing that plain text
            // content: post.bodyPlainText,
          });
        });
      },
      cacheTime: 1000 * 60 * 15,
      type: 'rss2',
    }
  ],
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {}
};
