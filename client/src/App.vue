<template>
  <ul class="fixed top-0 left-0 inline font-semibold uppercase rounded-md shadow-sm bg-slate-700 text-slate-200">
    <li v-for="link in links" :key="link.name" class="inline px-4 py-2 m-3">
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
      {name: 'AuthRegister', text: 'Register'}
    ]
  }),
};

</script>

