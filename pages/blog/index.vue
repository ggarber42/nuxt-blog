<template>
  <div class="main">
    <section class="container">
      <AppSearchInput />
    </section>
    <BlogList v-bind:articles="articles" />
    <!-- <section class="container blog-list">
      <ul>
        <li v-for="article of articles" :key="article.slug">
          <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
            <div class="blog-list__article">
               <small class="blog-list__article__updated">{{ formatDate(article.updatedAt) }}</small>
              <h3 class="blog-list__article__title">{{ article.title }}</h3>
              <p class="blog-list__article__description">{{ article.description }}</p>
            </div>
          </NuxtLink>
        </li>
      </ul>

    </section> -->

  </div>
</template>

<style>

</style>

<script>
  import BlogList from '~/components/BlogList';

  export default {
    async asyncData({ $content, params }) {
      const articles = await $content('articles', params.slug)
        .only(['title', 'description','slug','updatedAt'])
        .sortBy('createdAt', 'asc')
        .fetch()

      return {
        articles
      }
    },
  components:{
    BlogList
  },
  methods: {
    formatDate(date) {
      console.log(date);
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("pt-BR", options);
    }
  }
  }
</script>

<style lang="scss" scoped>
.main{
  .search-bar{
    margin-bottom: 3vh;
    position: relative;
    
  }
}
</style>
