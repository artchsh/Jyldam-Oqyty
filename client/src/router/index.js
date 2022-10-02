// import Vue from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import ControlPanel from "../views/admin/ControlPanel.vue";
import HelloWorld from "../components/HelloWorld.vue";
import HomeView from "@/views/HomeView.vue"


const routes = [
  {
    path: "/controlpanel",
    name: "ControlPanel",
    component: ControlPanel,
  },
  {
    path: "/test/hello",
    name: "testHello",
    component: HelloWorld,
  },
  {
    path: "/",
    name: "Home",
    component: HomeView
  }
];

const router = new createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;