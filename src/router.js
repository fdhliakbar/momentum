import { createRouter, createWebHistory } from 'vue-router'
import NoteList from '@/components/NoteList.vue'
import NoteForm from '@/components/NoteForm.vue'

const routes = [
  { path: '/', component: NoteList },
  { path: '/input', component: NoteForm },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
