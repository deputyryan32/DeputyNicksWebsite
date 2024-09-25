<template lang="html">
  <div class="about">
    <Navbar/>
    <h1>About page</h1>
    <p> Some info  Some info  Some info  Some info  Some info  Some info  Some info  Some info
      Some info  Some info  Some info  Some info  Some info  Some info  Some info  Some info
      Some info  Some info  Some info  Some info  Some info  Some info  Some info  Some info
      Some info  Some info  Some info  Some info  Some info  Some info  Some info  Some info
       Some info  Some info  Some info  Some info  Some info  Some info  Some info
     </p>
     <p> Some info  Some info  Some info  Some info  Some info  Some info  Some info  Some info
       Some info  Some info  Some info  Some info  Some info  Some info  Some info  Some info
       Some info  Some info  Some info  Some info  Some info  Some info  Some info  Some info
       Some info  Some info  Some info  Some info  Some info  Some info  Some info  Some info
        Some info  Some info  Some info  Some info  Some info  Some info  Some info
      </p>
    <Footer/>
  </div>
</template>

<script>
// import OtherComponent from './OtherComponent.vue'
import Navbar from '~/components/Navbar.vue'

import Footer from '~/components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
  }
};

</script>

<style lang="scss" scoped>
  .about{
    display:grid;
    grid-gap:3em;
    background-color: whitesmoke;
    font-size: 25px;
  }
  h1, p{
    margin: 0px 3em 0px 3em;
  }
</style>
