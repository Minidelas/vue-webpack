import Vue from "vue";
import Router from "vue-router";
import {
  HOME_ROUTE,
  ABOUT_ROUTE,
  FORM_ROUTE,
  PROFILES_ROUTE,
  PROFILE_ID_ROUTE,
  PROFILE_DATA_ROUTE,
  PROFILE_TASK_ROUTE
} from "@/routes-names";

Vue.use(Router);

// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: HOME_ROUTE.path,
      name: HOME_ROUTE.name,
      component: () => import("@/views/ViewHome.vue")
    },
    {
      path: ABOUT_ROUTE.path,
      name: ABOUT_ROUTE.name,
      component: () => import("@/views/ViewAbout.vue")
    },
    {
      path: FORM_ROUTE.path,
      name: FORM_ROUTE.name,
      component: () => import("@/views/ViewForm.vue")
    },
    {
      path: PROFILES_ROUTE.path,
      name: PROFILES_ROUTE.name,
      component: () => import("@/views/ViewProfileList.vue")
    },
    {
      path: PROFILE_ID_ROUTE.path,
      name: PROFILE_ID_ROUTE.name,
      component: () => import("@/views/ViewProfile.vue"),
      children: [
        {
          path: PROFILE_DATA_ROUTE.path,
          name: PROFILE_DATA_ROUTE.name,
          component: () => import("@/components/UserData/UserData.vue")
        },
        {
          path: PROFILE_TASK_ROUTE.path,
          name: PROFILE_TASK_ROUTE.name,
          component: () => import("@/components/UserTasks/UserTasks.vue")
        }
      ]
    }
  ]
});
