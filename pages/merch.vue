<template>
  <div class="container">
    <Navbar/>
    <div class="main-content">
      <div class="left-side">
      cbbcbb
      </div>
      <div class="right-side">

      </div>
    </div>


    <Footer/>
  </div>
</template>

<script>

import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'

export default {
  name: 'MerchPage',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style lang="scss" scoped>
// *{outline:1px solid blue;}
.container {
  background-color: green;
  font-size: 25px;
}
.main-content{
  display: grid;
  // /* grid-gap:5em;
  /* grid-auto-rows: 200px; */
  // /* grid-template-columns: 100%; */
  /* padding: 0px 20px 0px 20px; */
  // grid-template-columns: 60% 40%;
}
.left-side{
  display: grid;
  grid-column:1/3;
  grid-row:1/3;
  // grid-gap:1em;
  // padding: 20px;

  /* justify-content: start; */
  /* align-content: center; */
  /* margin:10px; */
}
.right-side{
  display: grid;
  grid-column:3;
  grid-row:1/3;
  /* justify-content: start; */
  /* align-content: center; */
  /* margin:10px; */
}

</style>
