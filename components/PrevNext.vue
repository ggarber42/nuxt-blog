<template>
  <div class="prev-next">
    <div class="next">
      <NuxtLink
        title="próximo"
        class="prev-next__anchor"
        v-if="next"
        :to="{ name: 'blog-slug', params: { slug: next.slug } }"
      >
        <small class="prev-next__anchor__post-title">← {{ next.title }}</small>
      </NuxtLink>
      <span v-else>&nbsp;</span>
    </div>
    <div class="prev">
      <NuxtLink
        title="anterior"
        class="prev-next__anchor"
        v-if="prev"
        :to="{ name: 'blog-slug', params: { slug: prev.slug } }"
      >
        <small class="prev-next__anchor__post-title">{{ prev.title }} →</small>
      </NuxtLink>
      <span v-else>&nbsp;</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => null
    },
    next: {
      type: Object,
      default: () => null
    }
  }
};
</script>

<style lang="scss" scoped>
@media (max-width: $screen-xs) {
  .prev-next {
    display: flex;
    flex-direction: column;
    align-items: center;
    &__anchor {
      &__post-title {
        font-size: $fs-small-responsive;
        &:before{
        font-size: $fs-body;
      }
      }
    }
  }
}
@media (max-width: $screen-sm) {
  .prev-next {
    &__anchor {
      font-size: $fs-body;
      &__post-title {
        font-size: $fs-small-responsive;
        &:before{
          font-size: $fs-body;
      }
      }
    }
  }
}
.prev-next {
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  &__anchor {
    display: flex;
    flex-direction: column;
    color: $grey-2;
    &__post-title {
      word-break: break-all;
      max-width: 100%;
      display: block;
      color: $primary;
      &:hover {
        color: $accent;
      }
      &:before{
        display: block;
        color: $grey-2;
        text-align: center;
      }
    }
  }
  .next {
    .prev-next__anchor__post-title:before {
      content: "Próximo";
    }
  }
  .prev {
    .prev-next__anchor__post-title:before {
      content: "Anterior";
    }
  }
}
</style>
