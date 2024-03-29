import { RouteRecordRaw } from 'vue-router';

import { ROLES } from 'src/constants/Roles';

export type IMenuItem = {
  titleTag: string;
  url?: string;
  icon?: string;
  // eslint-disable-next-line no-use-before-define
  children?: IMenuItem[];
  roles?: number[];
  noMenu?: boolean;
}
type Menu = IMenuItem[]

const publicRoutes: RouteRecordRaw[] = [
  {
    path: '',
    name: 'welcome',
    meta: {
      titleTag: 'menu.home',
      icon: 'fas fa-house',
    },
    component: () => import('src/views/public/HomeView.vue'),
  },
  {
    path: 'lists',
    name: 'lists',
    meta: {
      titleTag: 'menu.lists',
      icon: 'fas fa-list',
    },
    component: () => import('src/views/public/ListsView.vue'),
  },
  {
    path: 'configuration',
    name: 'configuration',
    meta: {
      titleTag: 'menu.config',
      icon: 'fas fa-cog',
    },
    component: () => import('src/views/public/ConfigView.vue'),
  },
  {
    path: 'about',
    name: 'about',
    meta: {
      titleTag: 'menu.about',
      icon: 'fas fa-user',
    },
    component: () => import('src/views/public/AboutView.vue'),
  },
];

const routes: RouteRecordRaw[] = [
  {
    path: '',
    name: 'home',
    meta: {
      titleTag: 'menu.home',
      icon: 'fas fa-house',
    },
    component: () => import('src/views/WelcomeView.vue'),
  },
  {
    path: 'aircraft',
    name: 'aircraft',
    meta: {
      titleTag: 'menu.aircraft',
      icon: 'fas fa-plane-up',
      roles: [ROLES.EDITOR, ROLES.ADMIN],
    },
    children: [
      {
        path: 'aircraft-classes',
        name: 'aircraft-classes',
        meta: {
          titleTag: 'menu.aircraftClasses',
          icon: 'fas fa-paper-plane',
          roles: [ROLES.EDITOR, ROLES.ADMIN],
        },
        component: () => import('src/views/aircraft/AircraftClassesView.vue'),
      },
      {
        path: 'costs',
        name: 'costs',
        meta: {
          titleTag: 'menu.costs',
          icon: 'fas fa-coins',
          roles: [ROLES.EDITOR, ROLES.ADMIN],
        },
        component: () => import('src/views/aircraft/CostsView.vue'),
      },
      {
        path: 'stats',
        name: 'stats',
        meta: {
          titleTag: 'menu.stats',
          icon: 'fas fa-chart-column',
          roles: [ROLES.EDITOR, ROLES.ADMIN],
        },
        component: () => import('src/views/aircraft/StatsView.vue'),
      },
      {
        path: 'planes',
        name: 'planes',
        meta: {
          titleTag: 'menu.planes',
          icon: 'fas fa-jet-fighter',
          roles: [ROLES.EDITOR, ROLES.ADMIN],
        },
        component: () => import('src/views/aircraft/PlanesView.vue'),
      },
    ],
  },
  {
    path: 'manufacturers',
    name: 'manufacturers',
    meta: {
      titleTag: 'menu.manufacturers',
      icon: 'fas fa-industry',
      roles: [ROLES.EDITOR, ROLES.ADMIN],
    },
    children: [
      {
        path: 'years',
        name: 'years',
        meta: {
          titleTag: 'menu.years',
          icon: 'fas fa-calendar',
          roles: [ROLES.EDITOR, ROLES.ADMIN],
        },
        component: () => import('src/views/manufacturers/YearsView.vue'),
      },
      {
        path: 'nations',
        name: 'nations',
        meta: {
          titleTag: 'menu.nations',
          icon: 'fas fa-flag',
          roles: [ROLES.EDITOR, ROLES.ADMIN],
        },
        component: () => import('src/views/manufacturers/NationsView.vue'),
      },
      {
        path: 'nation-years',
        name: 'nation-years',
        meta: {
          titleTag: 'menu.nationYears',
          icon: 'fas fa-house-flag',
          roles: [ROLES.EDITOR, ROLES.ADMIN],
        },
        component: () => import('src/views/manufacturers/NationYearsView.vue'),
      },
    ],
  },
  {
    path: 'special-abilities',
    name: 'special-abilities',
    meta: {
      titleTag: 'menu.specialAbilities',
      icon: 'fas fa-book',
      roles: [ROLES.EDITOR, ROLES.ADMIN],
    },
    component: () => import('src/views/specialAbilities/SpecialAbilitiesView.vue'),
  },
  {
    path: 'config',
    name: 'config',
    meta: {
      titleTag: 'menu.config',
      icon: 'fas fa-gear',
      roles: [ROLES.ADMIN],
    },
    children: [
      {
        path: 'users',
        name: 'users',
        meta: {
          titleTag: 'menu.users',
          icon: 'fas fa-users',
          roles: [ROLES.ADMIN],
        },
        component: () => import('src/views/config/UsersView.vue'),
      },
      {
        path: 'roles',
        name: 'roles',
        meta: {
          titleTag: 'menu.roles',
          icon: 'fas fa-scale-balanced',
          roles: [ROLES.ADMIN],
        },
        component: () => import('src/views/config/RolesView.vue'),
      },
    ],
  },
];

function routeToMenu(route: RouteRecordRaw) {
  const hasChildren = !!route.children?.length;
  const activeChildren = route.children?.filter((child) => !child.meta?.noMenu);

  const item = {
    titleTag: route.meta?.titleTag || route.name || '',
    icon: route.meta?.icon,
    url: hasChildren ? undefined : route.name,
    roles: route.meta?.roles,
    children: activeChildren?.map(routeToMenu).filter((child) => child) as Menu,
    noMenu: route.meta?.noMenu,
  } as IMenuItem;

  const hasActiveChildren = !!item.children?.length;
  if (hasChildren && !hasActiveChildren) {
    return undefined;
  }

  if (!item.titleTag && route.meta?.name && activeChildren) {
    const index = activeChildren.findIndex((child) => child.name === route.meta?.name) ?? -1;

    if (index > -1) {
      const activeChild = activeChildren[index];
      item.children?.slice(index, 1);

      if (activeChild) {
        const subChildren = activeChild.children?.filter((child) => !child.meta?.noMenu);

        item.titleTag = activeChild.meta?.titleTag || activeChild.name?.toString() || '';
        item.icon = activeChild.meta?.icon;
        item.noMenu = activeChild.meta?.noMenu;
        item.url = subChildren?.length ? undefined : activeChild.name?.toString();
        item.children = subChildren?.map(routeToMenu).filter((child) => child) as Menu;
      }
    }
  }
  return item;
}

export function getMenu() {
  return routes.filter((route) => !route.meta?.noMenu).map(routeToMenu).filter((route) => route) as Menu;
}

export function getPublicMenu() {
  return publicRoutes.filter((route) => !route.meta?.noMenu).map(routeToMenu).filter((route) => route) as Menu;
}

export {
  routes as MenuRoutes,
  publicRoutes as MenuPublicRoutes,
};
