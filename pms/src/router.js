import { createRouter, createWebHistory } from "vue-router";
import ProjectList from './pages/ProjectList.vue'
import ProjectDetail from './components/ProjectDetail.vue'
import UserAuth from './auth/UserAuth.vue'


const router = createRouter({
    history : createWebHistory(),
    routes : [
        { path: '/', redirect: '/projects' },
        { path : '/projects' , component: ProjectList, children:[

            {path : ':id', component : ProjectDetail},
        ] },
        { path: '/auth', component: UserAuth, meta: { requiresUnauth: true } },
        
    ]
})

export default router;