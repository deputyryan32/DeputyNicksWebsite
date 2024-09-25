<template lang="html">
  <div class="navbar">
      <div class="logoitem">
        <a href="">
          <Logo/>
        </a>
      </div>
      <div class="menuitems">
          <nuxt-link class="btn btn-4" to="/"> <span> Home  </span></nuxt-link>
          <nuxt-link class="btn btn-4" to="/videos"><span> Videos </span></nuxt-link>
          <nuxt-link class="btn btn-4" to="/merch"><span>Merch</span></nuxt-link>
          <nuxt-link class="btn btn-4" to="/about"><span>About</span></nuxt-link>
      </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  name: 'Navbar',
  components: {
    Logo
    // OtherComponent
  },
  data () {
    return {
      greeting: 'Hello'
    }
  }
}
</script>

<style lang="scss" scoped>
$menubuttons:#333333;
$menubuttonsactive:#000000;
$menubuttonsborder:$menubuttonsactive;
// *{outline:1px solid red;}
.navbar{
  display: grid;
  background-color: white;
  // min-height: 100px;
  grid-auto-flow: column;
  // grid-gap:20px;
  padding: 0px 20px 0px 20px;
  /* grid-template-columns: 20% 20% 20% 20% 20%; */
  width: 93%;
  font-size: 25px;
  .logoitem{
    display: grid;
    justify-content: start;
    align-content: center;
    margin:10px;

  }
  .menuitems{
    display: grid;
    justify-content: end;
    align-content: center;
    /* grid-template-columns: 20% 20% 20% 20% 20%;
    grid-area: 1; */
    grid-auto-flow: column;
    grid-gap: 50px;

///////////////////////////////
    // align-items: center;
    // display: flex;
    // flex-direction: column;
    // justify-content: center;
    // padding: 1em;
    text-align: center;
    vertical-align: middle;

    // @media (min-width: 600px) {
    //     flex-direction: row;
    //     justify-content: space-between;
    // }
    a{
      text-decoration: none;
      padding:22px;
      font-family: sans-serif;
      font-weight: lighter;
      color: $menubuttons;
      position: relative;
      text-decoration: none;
      text-transform: uppercase;
      width: 99%;
    }
    a:hover{
      text-decoration: none;
      padding:20px;
      border:2px solid $menubuttonsactive;
      border-radius: 4px;
      font-family: sans-serif;
      font-weight: lighter;
      color: $menubuttonsactive;
      position: relative;
      text-decoration: none;
      text-transform: uppercase;
      width: 99%;
    }
  }
/////////////////////////////
//button-4
//https://codepen.io/Zoe023/pen/ExjKRmJ
///////////////////////////
/////////////////////////////
//button-4 <a href="https://twitter.com/Dave_Conner" class="btn btn-4"><span>Hover</span></a>
///////////////////////////
    .btn-4 {
      overflow: hidden;
      position: relative;

      // span {
      //   z-index: 10;
      // }

      &:after {
        background: $menubuttonsactive;
        content: "";
        height: 225px;
        width: 65px;
        left: -150px;
        opacity: .2;
        position: absolute;
        top: -80px;
        transform: rotate(35deg);
        transition: all 700ms cubic-bezier(0.19, 1, 0.22, 1);

        // z-index: -10;
      }
    }
    .btn-4:hover {

      &:after {
        left: 150%;
        transition: all 700ms cubic-bezier(0.19, 1, 0.22, 1);
      }
    }
}


</style>
