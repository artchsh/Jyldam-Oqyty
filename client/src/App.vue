<template>
  <div class="margin"></div>
  <ul class="topnav">
    <router-link :to="{ name: 'Home' }">
      <img :src="require('./assets/logo.svg')" class="my-3" contain height="200" />
    </router-link>
    <!-- <li>
      <router-link :to="{ name: 'Home' }" class="active">Home</router-link>
    </li> -->
    <li>
      <router-link :to="{ name: 'ControlPanel' }">Control panel</router-link>
    </li>
    <li>
      <router-link :to="{ name: 'SubjectsViewPanel' }">Subjects View Panel</router-link>
    </li>
    <li>
      <router-link :to="{ name: 'AuthLogin' }">Login</router-link>
    </li>
    <li>
      <router-link :to="{ name: 'AuthRegister' }">Register</router-link>
    </li>
  </ul>
  <router-view v-slot="{ Component }">
    <transition>
      <component :is="Component" />
    </transition>
  </router-view>
</template>
<script>
export default {
  name: 'App',
  data: () => ({
    drawer: false,
    group: null,
  }),
};

</script>
<style scoped>
.margin {
  margin-bottom: 4rem;
}

ul.topnav {
  list-style-type: none;
  margin: .3rem;
  padding: 0;
  overflow: hidden;
  background-color: #333;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 10px;
  box-shadow: rgb(0, 0, 0, 0.2) 5px 5px 10px;
}

ul.topnav li {
  float: left;
}

img.my-3 {
  height: 20px;
  float: left;
  margin-left: 1rem;
  margin-right: .6rem;
}

ul.topnav li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  transition: all .3s ease-in;
}

ul.topnav li a:hover:not(.active) {
  background-color: #111;
}

ul.topnav li a.active {
  background-color: #04AA6D;
}

ul.topnav li.right {
  float: right;
}

@media screen and (max-width: 600px) {

  ul.topnav li.right,
  ul.topnav li {
    float: none;
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
