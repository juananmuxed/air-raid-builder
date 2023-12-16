import { App } from 'vue';
import {
  RouteRecordRaw,
  createRouter,
  createWebHistory,
} from 'vue-router';

import { MenuPublicRoutes, MenuRoutes } from './MenuRoutes';
import { useTitle } from 'src/composables/UseTitle';
import { useUserStore } from 'src/stores/UseUserStore';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('src/layouts/PublicMainLayout.vue'),
    children: [
      ...MenuPublicRoutes || [],
    ],
  },
  {
    path: '/admin',
    component: () => import('src/layouts/MainLayout.vue'),
    children: [
      ...MenuRoutes || [],
    ],
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      titleTag: 'menu.login',
    },
    component: () => import('src/views/LoginView.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

export const installRouter = (app: App) => {
  app.use(router);
};

let titleRouteTimeout: NodeJS.Timeout;

router.beforeEach((to, from, next) => {
  const title = useTitle();
  const user = useUserStore();

  titleRouteTimeout && clearTimeout(titleRouteTimeout);
  titleRouteTimeout = setTimeout(() => {
    title.setTitle(to);
  }, 200);

  const publicPages = ['login', 'about', 'welcome', 'configuration', 'lists'];
  const authRequired = !publicPages.includes(to.name?.toString() || '');

  if (authRequired) {
    if (!user.validToken) next({ name: 'login' });
    else if (user.isValidRole(to.meta.roles)) next();
    else next({ name: 'home' });
  } else {
    next();
  }
});
