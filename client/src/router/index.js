// import Vue from "vue";
import { createRouter, createWebHistory  } from "vue-router";
import SubjectList from "@/components/subjects/SubjectsList.vue"
import ControlPanel from "@/views/admin/ControlPanel.vue";
import SubjectEditor from "@/views/admin/SubjectEdit.vue"
import HomeView from "@/views/HomeView.vue"
import LoginPage from "@/views/user/LoginPage.vue"
import RegisterPage from "@/views/user/RegisterPage.vue"

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
  },
  {
    path: "/login",
    name: "AuthLogin",
    component: LoginPage
  },
  {
    path: "/register",
    name: "AuthRegister",
    component: RegisterPage
  }
];

const router = new createRouter({
  history: createWebHistory(),
  routes,
});

export default router;