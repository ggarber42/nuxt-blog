<template>
  <div class="main">
    <!-- introduction -->
    <section class="container introduction">
      <h1 class="introduction__title">Bem Vindo ao DeviaSerDev</h1>

      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque architecto eum, non illo odit repellendus dolores molestiae! Tempora maxime est quod aliquam quas animi facilis officia voluptates, molestiae quos deleniti!</p>
    </section>
    <section class="container blog-list">
      <NuxtLink to="/blog">
        <h2 class="blog-list__title">Últimos Posts</h2>
      </NuxtLink>
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
    </section>
  </div>
</template>

<script>
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

  .blog-list {
    &__title {
      color: $grey-2;
    }
    &__article {
      display: flex;
      flex-direction: column;
      margin: 1em 0;
      border: 1px solid #d6d6d6;
      transition: border-width 0.1s linear;

      &__updated {
        color: $grey-2;
        align-self: flex-end;
      }

      &__description {
        text-align: center;
      }
      &:hover,
      &:focus {
        border: 1.05px solid $accent;
      }
    }
  }
}
</style>
