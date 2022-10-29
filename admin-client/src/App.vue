<template>
  <div>
    <ul class="">
      <li v-for="link in links" :key="link.name" class="">
        <router-link :to="{ name: link.name }">{{ link.text }}</router-link>
      </li>
    </ul>
  </div>
  <router-view />

</template>
<script>
export default {
  name: 'App',
  data: () => ({
    drawer: false,
    group: null,
    links: [
      { name: 'Home', text: 'Home' },
      { name: 'ControlPanel', text: 'Control panel' },
      // { name: 'SubjectsViewPanel', text: 'Subjects View Panel' },
      { name: 'AuthLogin', text: 'Login' },
      { name: 'AuthRegister', text: 'Register' },
      { name: 'FeaturesView', text: 'FeaturesView' },
    ]
  }),
};

</script>
<style>
button.button {
  /* background-color: rgb(103, 87, 248); */
  border-radius: 10px;
  padding: 16px 12px;
  color: white;
  font-weight: 600;
  border: 1px solid black;
}

a.button {
  border-radius: 10px;
  padding: 16px 12px;
  color: white;
  font-weight: 600;
  border: 1px solid black;
  width: fit-content;
  color: palevioletred;
}

.block {
  display: block;
}
</style>

