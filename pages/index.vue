<template>
  <div class="main">
    <!-- introduction -->
    <section class="container introduction">
      <h1 class="introduction__title">Bem Vindo ao DeviaSerDev</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque architecto eum, non illo odit repellendus dolores molestiae! Tempora maxime est quod aliquam quas animi facilis officia voluptates, molestiae quos deleniti!</p>
    </section>
    <!-- blog list -->
    <BlogList v-bind:articles="articles"/>
    <!-- blog anchor -->
    <section class="container blog-anchor">
      <NuxtLink title="Ver posts" to="/blog">
        <small class="blog-anchor__text">Ver todos</small>
      </NuxtLink>
    </section>
  </div>
</template>

<script>
import BlogList from "../components/BlogList";

export default {
  async asyncData({ $content, params }) {
    const articles = await $content("articles", params.slug)
      .only(["title", "description", "slug", "updatedAt"])
      .sortBy("createdAt", "asc")
      .limit(2)
      .fetch();

    return {
      articles
    };
  },
  methods: {
    formatDate(date) {
      console.log(date);
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("pt-BR", options);
    }
  }
};
</script>

<style lang="scss" scoped>
@media (max-width: $screen-sm) {
  .main {
    .introduction__title {
      font-size: $fs-h3;
    }
    .blog-list {
      &__title {
        font-size: 2.15rem;
      }
      &__article {
        padding: 1em;
        &__title {
          font-size: $fs-body;
        }
        &__description {
          font-size: $fs-body-responsive;
        }
      }
    }
  }
}
@media (min-width: $screen-sm) {
  .main {
    // background: red;
    font-size: $fs-body-responsive;
    .introduction__title {
      font-size: $fs-h1;
    }

    .blog-list {
      &__title {
        font-size: $fs-h2;
      }
      &__article {
        padding: 2em 1.15em;

        &__title {
          font-size: $fs-body;
        }
        &__description {
          font-size: $fs-body;
        }
      }
    }
  }
}

.main {
  h1,
  h3 {
    text-align: center;
  }

  & > * {
    margin-bottom: 5vh;
  }

  .introduction {
    border-bottom: 1px dotted $accent;
    // border-radius: .35em;
    padding: 0.75em;
  }
   .blog-anchor{
      &__text{
        font-size: $fs-body-responsive;
      }
      &:hover{
        color: $accent;
      }
    }
}
</style>
