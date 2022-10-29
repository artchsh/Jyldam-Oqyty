import { createRouter, createWebHistory  } from "vue-router";

// TODO components neeeds to change to VIEWS
// import SubjectList from "@/Components/Admin/Subjects/SubjectsList.vue"
import SubjectEditor from "@/Components/Admin/Subjects/SubjectEditor.vue"

// Admin Views
import FeaturesView from '@/Views/Admin/FeaturesView.vue'
import ControlPanel from "@/Views/Admin/ControlPanel.vue";


// User Views
import SubjectViewer from '@/Views/User/Subscription/SubjectViewer.vue'
import LoginPage from "@/Views/User/Authentication/LoginPage.vue"
import RegisterPage from "@/Views/User/Authentication/RegisterPage.vue"

// Guest/Main views
import HomeView from "@/Views/HomeView.vue"


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
  // {
  //   path: "/controlpanel/subjects",
  //   name: "SubjectsViewPanel",
  //   component: SubjectList
  // },
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
  },
  {
    path: '/dev',
    name: 'FeaturesView',
    component: FeaturesView
  },
  {
    path: '/subjects',
    name: 'subjects',
    component: FeaturesView,
  },
  {
    path: '/subjects/:subjectName',
    name: 'SubjectViewer',
    component: SubjectViewer
  },
  
];

const Router = new createRouter({
  history: createWebHistory(),
  routes,
});

export default Router;