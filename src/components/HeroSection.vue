<template>
  <section class="flex flex-col justify-center min-h-[60vh] px-6 md:px-20 animate-hero-fade">
    <div class="mt-16 md:mt-32">
      <h1 class="text-3xl md:text-5xl font-bold text-black mb-4 leading-tight animate-slide-in">
        Fokus pada apa yang penting.<br />
        Biarkan sisanya kami yang urus.
      </h1>
      <p class="text-gray-600 mb-8 max-w-xl animate-fade-in">
        Dapatkan kontrol penuh atas jadwal Anda. Momentum adalah to-do list yang dirancang untuk
        membantu Anda menyelesaikan lebih banyak pekerjaan, mengurangi stres, dan menikmati hidup.
      </p>
      <button
        class="bg-gray-800 text-white px-6 py-3 rounded-lg shadow hover:bg-gray-900 transition animate-bounce-in"
      >
        Get Started Now
      </button>
    </div>
  </section>
</template>

<script setup>
// No script needed for static hero section
</script>

<style scoped>
@keyframes hero-fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.animate-hero-fade {
  animation: hero-fade 1s ease;
}
@keyframes slide-in {
  from {
    opacity: 0;
    transform: translateX(-40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
.animate-slide-in {
  animation: slide-in 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.animate-fade-in {
  animation: fade-in 1.2s ease;
}
@keyframes bounce-in {
  0% {
    transform: scale(0.8);
    opacity: 0;
  }
  60% {
    transform: scale(1.05);
    opacity: 1;
  }
  100% {
    transform: scale(1);
  }
}
.animate-bounce-in {
  animation: bounce-in 0.7s;
}
</style>
