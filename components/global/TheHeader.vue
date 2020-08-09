<template>
  <header>
    <div class="logo">
      <NuxtLink to="/">
        <img title="home" src="https://img.icons8.com/clouds/100/000000/periscope-logo.png" style="width:60%">
      </NuxtLink>
    </div>
    <nav>
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/blog">Blog</NuxtLink>
      <a target="_blank" href="https://www.google.com.br/">Contato</a>
      <a target="_blank" href="https://www.google.com.br/">Sobre</a>
    </nav>
  </header>
</template>

<style scoped lang="scss">

header {
  background: $background-secondary;
  color: $primary;
  display: flex;
  justify-content: space-between;
  padding: 0 10vw;
  position: fixed;
  width: 100%;
  top: 0;
  box-shadow: 1px 1px 4px 0px rgba(0,0,0,.2);

  nav {
    display: flex;
    justify-content: space-evenly;
    min-width: 25%;
    margin-right: 5vw;

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
}
</style>
