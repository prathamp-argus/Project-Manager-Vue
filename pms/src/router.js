import { createRouter, createWebHistory } from "vue-router";
import ProjectList from './pages/ProjectList.vue'
import ProjectDetail from './components/ProjectDetail.vue'
import UserAuth from './auth/UserAuth.vue'
import NotFound from './pages/NotFound.vue'
import CreateProject from "./components/CreateProject.vue"


const router = createRouter({
    history : createWebHistory(),
    routes : [
        { path: '/', redirect: '/projects' },
        { path : '/projects' , component: ProjectList},
        {path : '/projects/:id', component : ProjectDetail, props: true},
        {path : '/projects/new', component : CreateProject},
        { path: '/auth', component: UserAuth, meta: { requiresUnauth: true } },
        { path: '/:notFound(.*)', component: NotFound }
        
    ]
})

export default router;