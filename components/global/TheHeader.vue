<template>
  <header class="header">
    <div class="logo">
      <NuxtLink to="/">
        <!-- <img
          title="Home"
          src="https://img.icons8.com/clouds/100/000000/periscope-logo.png"
          style="width:60%"
        > -->
        <!-- D&ltS/&gtD -->
        D{S}D
      </NuxtLink>
    </div>
    <nav class="horizontal-nav">
      <NuxtLink to="/blog">Blog</NuxtLink>
      <!-- <a target="_blank" href="https://www.google.com.br/">Contato</a> -->
      <!-- <a target="_blank" href="https://www.google.com.br/">Sobre</a> -->
    </nav>
    <button class="hamburger hamburger--emphatic" type="button" @click="toggleHamburger">
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
    </button>
    <div class="overlay"></div>
    <nav class="vertical-nav" @click="toggleHamburger">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/blog">Blog</NuxtLink>
      <a target="_blank" href="https://www.google.com.br/">Contato</a>
      <a target="_blank" href="https://www.google.com.br/">Sobre</a>
    </nav>
  </header>
</template>

<script>
export default {
  methods: {
    toggleHamburger() {
      const hamburgerButton = document.querySelector("button.hamburger");
      const verticalNav = document.querySelector('.vertical-nav');
      const overlay = document.querySelector('.overlay');
      hamburgerButton.classList.toggle("is-active");
      verticalNav.classList.toggle('--show');
      overlay.classList.toggle('--show');
    }
  }
};
</script>


<style scoped lang="scss">


@media (max-width: $screen-sm) {
  header.header {
    padding: 0 2vw;

    nav.horizontal-nav {
      display: none;
    }   

    button.hamburger {
      display: block;
    }
  }
}
@media (min-width: $screen-sm) {
  header.header {
    padding: 0 10vw;

    nav.horizontal-nav {
      display: flex;
    }

    button.hamburger {
      display: none;
    }
  }
}

header.header {
  background: $background-secondary;
  color: $primary;
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 10;
  width: 100%;
  top: 0;
  box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.2);

  .logo{
    display: flex;
    align-items: center;
  }

  nav{
    a {
      color: inherit;
      margin: 0.25em 0.25em 0.5em;
      text-decoration: none;
      transition: border-color 0.45s ease 0s;
      font-size: $fs-small;

      &:hover {
        border-bottom: 2px solid $accent;
        color: $accent;
      }
    }
  }

  nav.horizontal-nav {
    justify-content: space-evenly;
    min-width: 25%;
    margin-right: 5vw;
  }

  button.hamburger {

    z-index: 13;

    .hamburger-box {
      span {
        background-color: $primary;

        &::before,
        &::after {
          background-color: $primary;
        }
      }
    }
  }

  .overlay{
    display: none;
    position: fixed;
    color: inherit;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 11;
    background: black;
    opacity: .75;
    transition: all 250ms cubic-bezier(0.5, 0, 0.5, 1);

    &.--show{
      display: block;
    }
  }

  nav.vertical-nav{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    color: inherit;
    top: 0;
    bottom: 0;
    right: 0;
    left: calc(100vw - 300px);
    z-index: 12;
    transform: translateX(100%);
    transition: transform 250ms cubic-bezier(0.5, 0, 0.5, 1);
    background-color: $background-secondary;

    &.--show{
      transform: translateX(0%);
    }
  }


}
</style>
