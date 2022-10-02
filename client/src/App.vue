<template>
  <ul class="topnav">
    <li>
      <router-link :to="{ name: 'Home' }" class="active">Home</router-link>
    </li>
    <li>
      <router-link :to="{ name: 'ControlPanel' }">User Control panel</router-link>
    </li>
  </ul>
  <v-app>
    <v-main>

      <router-view />
    </v-main>
  </v-app>
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
ul.topnav {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

ul.topnav li {
  float: left;
}

ul.topnav li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
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
</style>
