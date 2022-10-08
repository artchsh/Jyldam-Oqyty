// import Vue from "vue";
import { createRouter, createWebHistory  } from "vue-router";
import SubjectList from "@/components/subjects/SubjectsList.vue"
import ControlPanel from "@/views/admin/ControlPanel.vue";
import SubjectEditor from "@/views/admin/SubjectEdit.vue"
import HomeView from "@/views/HomeView.vue"


const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView
  },
  {
    path: "/controlpanel",
    name: "ControlPanel",
    component: ControlPanel,
  },
  {
    path: "/controlpanel/subjects",
    name: "SubjectsViewPanel",
    component: SubjectList
  },
  {
    path: "/controlpanel/subjects/:id",
    name: "SubjectsControlPanelByID",
    component: SubjectEditor
  }
];

const router = new createRouter({
  history: createWebHistory(),
  routes,
});

export default router;