<template>
  <div class="main">
    <section class="search-bar-section">
      <AppSearchInput />
    </section>
    <BlogList v-bind:articles="articles" />
  </div>
</template>

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
  },
   head () {
      return {
        title: 'Blog Posts | DeviaSerDev',
        meta: [
          { name: "author", content: "Guilherme Garber" },
          { property: "og:title", content: 'Blog Posts | DeviaSerDev'},
          { name: "description", property: "og:description", content: 'listagem de todos os posts', hid: "description" },
        ]
      };
    }
  }
</script>

<style lang="scss" scoped>
.main{
  .search-bar-section{
    display: flex;
    justify-content: center;
    .search-bar{
      margin-bottom: 3vh;
      position: relative;
      
    }
  }
}
</style>
