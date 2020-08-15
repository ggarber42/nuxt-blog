<template>
  <div class="search-bar">
    <input
      v-model="searchQuery"
      type="search"
      autocomplete="off"
      placeholder="Pesquisa..."
    />
    <ul
      class="search-bar__result-list"
      v-if="articles.length"
    >
      <li class="search-bar__result-list__result" v-for="article of articles" :key="article.slug">
        <NuxtLink
          :to="{ name: 'blog-slug', params: { slug: article.slug } }"
        >
          {{ article.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchQuery: '',
      articles: []
    }
  },
  watch: {
    async searchQuery(searchQuery) {
      if (!searchQuery) {
        this.articles = []
        return
      }
      this.articles = await this.$content('articles')
        .limit()
        .search(searchQuery)
        .fetch()
    }
  }
}
</script>

<style lang="scss" scoped>
@media (max-width: $screen-sm){
    .search-bar{
  color: $accent;
  max-width: 70%;;
  input{
    width: 100%;
    padding: .25em 1em;
    border-radius: .5em;
    border: 1.5px solid $grey-2;
  }
  &__result-list{
      background: $background-secondary;
      position: absolute;
      z-index: 1;
      border: 1px solid $border-color-1;
      width: 100%;
      &__result{
        color: $accent;
        border: 1.25px solid $border-color-1;
        padding: .25em .75em;
        &:hover{
          color: $primary;
        }
      }
    }
  }
}
@media (min-width: $screen-sm){
    .search-bar{
      min-width: 600px;
    }
}
.search-bar{
  color: $accent;
  input{
    width: 100%;
    padding: .25em 1em;
    border-radius: .5em;
    border: 1.5px solid $grey-2;
    &:focus{
      outline: none;
      border-color: $accent;
    }
  }
  &__result-list{
      background: $background-secondary;
      position: absolute;
      z-index: 1;
      border: 1px solid $border-color-1;
      // width: 100%;
      &__result{
        color: $accent;
        border: 1.25px solid $border-color-1;
        padding: .25em .75em;
        margin: 0 2em;
        &:hover{
          color: $primary;
        }
      }
    }
  }
</style>

