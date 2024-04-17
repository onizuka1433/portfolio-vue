import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactForm from '@/components/ContactForm.vue';
import NotFound from '@/components/NotFound.vue';
import MoshiSushi from '@/components/MoshiSushi.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },

  {
    path: '/contact',
    name: 'Contact',
    component: ContactForm
  },

  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  },

  {
    path: '/moshisushi',
    name: 'MoshiSushi',
    component: MoshiSushi
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
