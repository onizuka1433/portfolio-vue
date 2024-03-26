import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactForm from '@/components/ContactForm.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactForm
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
