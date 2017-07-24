import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home';
import Profile from './components/Profile';
import User from './components/User';
import SignIn from './components/SignIn';
import ProfileEdit from './components/ProfileEdit';
import { Auth } from './services';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/profile', component: Profile, meta: { requiresAuth: true } },
    { path: '/user/:id', component: User },
    { path: '/signin', component: SignIn },
    { path: '/profile/edit', component: ProfileEdit, meta: { requiresAuth: true } },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(x => x.meta.requiresAuth)) {
    Auth.requireUser()
      .then(() => {
        next();
      }, () => {
        next({ path: '/signin', query: { redirect: to.fullPath } });
      });
    return;
  }
  next();
});

export default router;
