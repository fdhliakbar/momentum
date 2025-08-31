<template>
  <div class="w-full max-w-2xl mx-auto mt-8">
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-2xl font-bold">Daftar Catatan</h2>
      <button
        @click="$router.push('/input')"
        class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Input Form
      </button>
    </div>
    <ul>
      <li
        v-for="note in notes"
        :key="note.id"
        class="flex justify-between items-center bg-gray-100 rounded px-4 py-2 mb-2"
      >
        <div>
          <span class="font-semibold">{{ note.title }}</span>
          <p class="text-gray-600 text-sm">{{ note.content }}</p>
        </div>
        <div class="flex gap-2">
          <button @click="editNote(note)" class="text-yellow-600 hover:underline">Edit</button>
          <button @click="deleteNote(note.id)" class="text-red-600 hover:underline">Delete</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const notes = ref([])

function loadNotes() {
  const saved = localStorage.getItem('notes')
  notes.value = saved ? JSON.parse(saved) : []
}
function deleteNote(id) {
  notes.value = notes.value.filter((n) => n.id !== id)
  localStorage.setItem('notes', JSON.stringify(notes.value))
}
function editNote(note) {
  router.push({ path: '/input', query: { edit: note.id } })
}
onMounted(loadNotes)
window.addEventListener('storage', loadNotes)
</script>
