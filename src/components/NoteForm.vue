<template>
  <div class="w-full max-w-xl mx-auto mt-8 bg-white p-6 rounded shadow">
    <h2 class="text-2xl font-bold mb-4">{{ editMode ? 'Edit Catatan' : 'Tambah Catatan' }}</h2>
    <form @submit.prevent="handleSubmit">
      <div class="mb-4">
        <label class="block mb-1 font-medium">Judul</label>
        <input v-model="title" type="text" class="w-full border rounded px-3 py-2" required />
      </div>
      <div class="mb-4">
        <label class="block mb-1 font-medium">Isi Catatan</label>
        <textarea v-model="content" class="w-full border rounded px-3 py-2" required></textarea>
      </div>
      <div class="flex gap-2">
        <button
          type="submit"
          class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          {{ editMode ? 'Update' : 'Tambah' }}
        </button>
        <button type="button" @click="goBack" class="border px-4 py-2 rounded">Kembali</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
const title = ref('')
const content = ref('')
const editMode = ref(false)
const editId = ref(null)

onMounted(() => {
  if (route.query.edit) {
    const notes = JSON.parse(localStorage.getItem('notes') || '[]')
    const note = notes.find((n) => n.id === route.query.edit)
    if (note) {
      title.value = note.title
      content.value = note.content
      editMode.value = true
      editId.value = note.id
    }
  }
})

function handleSubmit() {
  let notes = JSON.parse(localStorage.getItem('notes') || '[]')
  if (editMode.value) {
    notes = notes.map((n) =>
      n.id === editId.value ? { ...n, title: title.value, content: content.value } : n,
    )
  } else {
    notes.push({ id: Date.now().toString(), title: title.value, content: content.value })
  }
  localStorage.setItem('notes', JSON.stringify(notes))
  router.push('/')
}
function goBack() {
  router.push('/')
}
</script>
