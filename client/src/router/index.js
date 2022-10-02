// import Vue from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import TestFormUsers from "../components/TestFormUsers.vue";
import HelloWorld from "../components/HelloWorld.vue";


const routes = [
  {
    path: "/test/user",
    component: TestFormUsers,
  },
  {
    path: "/test/hello",
    name: "hello",
    component: HelloWorld,
  }
];

const router = new createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;