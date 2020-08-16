<template>
  <footer>
    <div class="footer__info">
      <div class="container footer__info-container">
        <div class="footer__tech">
          </> com <a target="_blank" href="https://vuejs.org/">Vue.js</a> + <a target="_blank" href="https://nuxtjs.org/">Nuxt</a>
        </div> 
        <div class="footer__icons">
          <div class="footer__icons__rss">
            <a clas="footer__icons__rss__link"  title="feed" href="/feed.xml" target="_blank">
              <img src="~assets/images/rss_icon.png" alt="" style="max-width: 35px">
            </a>
          </div>
        </div>
        <div class="footer__copyleft">
          &#127279 {{ year }} — Garber 
        </div>
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
.footer__info{
  text-align: center;
  color: #fff;
  font-size: 1rem;
  padding: .25em 0 0;

  .footer__copyright{
      text-align: center;
  }
  a{
    color: $accent;
    &:hover{
      text-decoration: underline;
    }
  }
  .footer__icons{
    &__rss{
      display: flex;
      justify-content: center;
    }
  }
}
</style>
