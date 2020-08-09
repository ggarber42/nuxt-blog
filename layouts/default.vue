<template>
  <div>
    <TheHeader />
    <main>
      <Nuxt />
    </main>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '../components/global/TheHeader';
import TheFooter from '../components/global/TheFooter';

export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>


<style>
</style>
