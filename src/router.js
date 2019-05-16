import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/Home.vue")
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/About.vue")
    },
    {
      path: "/form",
      name: "form",
      component: () => import("@/views/VueForm.vue")
    },
    {
      path: "/profiles",
      name: "profile",
      component: () => import("@/views/ProfileList.vue")
    },
    {
      path: "/profiles/:id",
      name: "profileID",
      component: () => import("@/views/Profile.vue"),
      children: [
        {
          path: "",
          component: () => import("@/components/UserData/UserData.vue")
        },
        {
          path: "data",
          component: () => import("@/components/UserData/UserData.vue")
        },
        {
          path: "task",
          component: () => import("@/components/UserTasks/UserTasks.vue")
        }
      ]
    }
  ]
});
