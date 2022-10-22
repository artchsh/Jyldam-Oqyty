<template>
  <ul class="">
    <li v-for="link in links" :key="link.name" class="">
      <router-link :to="{ name: link.name }">{{ link.text }}</router-link>
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
    links: [
      {name: 'Home', text: 'Home'},
      {name: 'ControlPanel', text: 'Control panel'},
      {name: 'SubjectsViewPanel', text: 'Subjects View Panel'},
      {name: 'AuthLogin', text: 'Login'},
      {name: 'AuthRegister', text: 'Register'},
      {name: 'FeaturesView', text: 'FeaturesView'},
    ]
  }),
};

</script>

