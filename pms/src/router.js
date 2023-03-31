import { createRouter, createWebHistory } from "vue-router";
import ProjectList from "./pages/ProjectList.vue";
import ProjectDetail from "./components/ProjectDetail.vue";
import UserAuth from "./auth/UserAuth.vue";
import NotFound from "./pages/NotFound.vue";
import CreateProject from "./components/CreateProject.vue";
import store from "./store";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/projects", meta: { requiresAuth: true } },
    { path: "/projects", component: ProjectList, meta: { requiresAuth: true } },
    {
      path: "/projects/:id",
      component: ProjectDetail,
      props: true,
      meta: { requiresAuth: true },
    },
    {
      path: "/projects/new",
      component: CreateProject,
      meta: { requiresAuth: true },
    },
    { path: "/auth", component: UserAuth, meta: { requiresUnauth: true } },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});
router.beforeEach((to, _, next) => {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next("/auth");
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next("/projects");
  } else {
    next();
  }
});

export default router;
