<template>
  <nav class="flex items-center justify-between px-6 py-4 bg-white shadow-md animate-fade-in">
    <div class="flex items-center gap-2">
      <img src="/zebra_logos.jpg" alt="Logo" class="h-10 w-10 object-contain" />
      <span class="font-bold text-xl">Momentum</span>
    </div>
    <ul class="hidden md:flex gap-8 text-gray-700 font-medium">
      <li><a href="#home" class="hover:text-black transition">Home</a></li>
      <li><a href="#inputform" class="hover:text-black transition">Input Form</a></li>
      <li><a href="#testimonials" class="hover:text-black transition">Testimonials</a></li>
    </ul>
    <button
      class="border border-gray-400 rounded-lg px-4 py-2 hover:bg-gray-100 transition font-medium"
    >
      Sign up
    </button>
    <button class="md:hidden ml-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
  </nav>
</template>

<script setup>
// No script needed for static navbar
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in {
  animation: fade-in 0.8s ease;
}
</style>
