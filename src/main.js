import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import NoteList from '@/components/NoteList.vue'
import NoteForm from '@/components/NoteForm.vue'

createApp(App).use(router).mount('#app')
