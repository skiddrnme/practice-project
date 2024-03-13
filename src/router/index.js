import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BookView from '../views/BookView.vue'
import AuthView from '@/views/AuthView.vue'
import AdminView from '@/views/AdminView.vue'
import { useUserStore } from '@/store/user'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/book/:name',
    name: 'book',
    component: BookView,
    props: true
  },
  {
    path: '/registration',
    name: 'registration',
    component: AuthView
  },
  {
    path: '/login',
    name: 'login',
    component: AuthView
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminView,
    meta: { requiresAuth: true }
  },
  {
    path: '/:catchAll(.*)',
    redirect: { name: 'home' } // Перенаправление на домашнюю страницу в случае, если ни один из маршрутов не соответствует
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})



router.beforeEach((to, from, next) => {
  const user = useUserStore()
  const isAuth = user.isAuth // Получаем информацию о текущем пользователе

  if (to.meta.requiresAuth && !isAuth) {
    // Если маршрут требует аутентификации и пользователь не аутентифицирован,
    // перенаправляем пользователя на страницу входа
    next({ name: 'login' });
  } else {
    // В противном случае продолжаем нормальное перенаправление
    next();
  }
});

export default router;