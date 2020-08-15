<template>
  <article class="container blog-post">
    <div class="blog-post__summary">
       <small class="blog-post__updated">{{ formatDate(article.updatedAt) }}</small>
      <h1 class="blog-post__title">{{ article.title }}</h1>
      <p class="blog-post__desc">{{ article.description }}</p>
    </div>
    <nuxt-content :document="article"/>
    <prev-next :prev="prev" :next="next"/>
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content("articles", params.slug).fetch();
    const [prev, next] = await $content("articles")
      .only(["title", "slug"])
      .sortBy("createdAt", "desc")
      .surround(params.slug)
      .fetch();
    return { article, prev, next };
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("pt-BR", options);
    }
  },
   head () {
      return {
        title: this.article.title,
        meta: [
          { name: "author", content: "Marina Aisa" },
          { property: "og:title", content: this.article.title },
          { name: "description", property: "og:description", content: this.article.description, hid: "description" },
        ]
      };
    }
};
</script>

<style lang="scss" scoped>
@media (max-width: $screen-sm) {
  .blog-post {
    &__title {
      font-size: $fs-h3;
    }
 
  }
}
@media (min-width: $screen-sm) {
  .blog-post {
    &__title {
      font-size: $fs-h2;
    }
  }
}
@media (min-width: $screen-md) {
  .blog-post {
    &__title {
      font-size: $fs-h1;
    }
  }
}
.blog-post{
  &__summary{
    margin-bottom: .75em;
  }
  &__updated{
    color: $grey-2;
    width: 100%;
    display: block;
    text-align: end;
  }
  &__title {

  }
  &__desc{
    color: $grey-2;
  }
}
</style>
