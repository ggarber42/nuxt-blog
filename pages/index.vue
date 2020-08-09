<template>
  <div>
    <!-- introduction -->
    <section class="container introduction">
      <h3>Bem Vindo ao DeviaSerDev</h3>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque architecto eum, non illo odit repellendus dolores molestiae! Tempora maxime est quod aliquam quas animi facilis officia voluptates, molestiae quos deleniti!
      </p>
    </section>
    <section class="container">
      <NuxtLink to="/blog">
        <h4>Últimos Posts</h4>
      </NuxtLink>
      <ul>
        <li v-for="article of articles" :key="article.slug">
          <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
            <div>
              <h2>{{ article.title }}</h2>
              <p>{{ article.description }}</p>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
  export default {
    async asyncData({ $content, params }) {
      const articles = await $content('articles', params.slug)
        .only(['title', 'description','slug'])
        .sortBy('createdAt', 'asc')
        .limit(2)
        .fetch()

      return {
        articles
      }
    }
  }
</script>

<style lang="scss" scoped>
  
</style>
