<template>
  <div class="main">
    <!-- introduction -->
    <section class="container introduction">
      <h1 class="introduction__title">Bem Vindo ao <span class="accent-highlight">DeviaSerDev</span></h1>
      <p>Nesse blog eu vou compartilhar projetos, escrever  tutoriais e também relatar algumas experiências. Foi uma maneira que achei de estudar e quem sabe compartilhar um pouco do que aprendi</p>
      <p>Caso queria entrar em contato, meu site de pessoal é <a href="#">esse</a>.</p>
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
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("pt-BR", options);
    }
  },
   head () {
      return {
        title: "DeviaSerDev",
        meta: [
          { name: "author", content: "Guilherme Garber" },
          { property: "og:title", content: "DeviaSerDev"},
          { name: "description", property: "og:description", content: "DeviaSerDev", hid: "description" },
        ],
        script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }]
      };
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
    border-bottom: 1px dashed $grey-2;
    // border-radius: .35em;
    padding: 0.75em;
    .accent-highlight{
      color: $accent;
      text-decoration: underline;
    }
  }
   .blog-anchor{
      &__text{
        font-size: $fs-body-responsive;
        text-decoration: underline;
      }
      &:hover{
        color: $accent;
      }
    }
}
</style>
