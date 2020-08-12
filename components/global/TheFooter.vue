<template>
  <footer>
    <div class="footer__info">
      <div class="container footer__info-container">
        <div class="footer__copyright">
          © {{ year }} — Web app designed and coded by Guilherme Garber using Vue.js + Nuxt.
        </div>
        <a href="#top" class="footer__top-page">
        </a>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  computed: {
    year () {
      return new Date().getFullYear()
    }
  }
}
</script>

<style lang="scss">
.footer__copyright{
    color: #fff;
    font-size: 1rem;
    text-align: center;
}
</style>
