<template>
  <ul class="topnav">
    <li>
      <router-link :to="{ name: 'Home' }" class="active">Home</router-link>
    </li>
    <li>
      <router-link :to="{ name: 'ControlPanel' }">Control panel</router-link>
    </li>
    <li>
      <router-link :to="{ name: 'SubjectsViewPanel' }">Subjects View Panel</router-link>
    </li>
  </ul>
  <router-view />
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
</style>
