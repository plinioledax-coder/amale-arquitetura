<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { ArrowDown } from 'lucide-vue-next'
import ScrollReveal from '../ui/ScrollReveal.vue' // Ajuste o caminho se necessário

const currentSlide = ref(0)
const timer = ref(null)

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1920&auto=format&fit=crop',
    title: 'Essência',
    subtitle: 'Atemporal',
    text: 'Arquitetura que respeita o tempo e celebra a vida.'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1920&auto=format&fit=crop',
    title: 'Refúgio',
    subtitle: 'Particular',
    text: 'Transformamos espaços vazios em cenários de memórias.'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1920&auto=format&fit=crop',
    title: 'Design',
    subtitle: 'Sensorial',
    text: 'Texturas, luz e formas que despertam os sentidos.'
  }
]

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length
}

onMounted(() => {
  timer.value = setInterval(nextSlide, 5000)
})

onUnmounted(() => clearInterval(timer.value))
</script>

<template>
  <header class="relative h-screen w-full overflow-hidden bg-[#2C3E2D]">
    
    <transition-group name="zoom">
      <div
        v-for="(slide, index) in slides"
        v-show="currentSlide === index"
        :key="slide.id"
        class="absolute inset-0 bg-cover bg-center"
        :style="{ backgroundImage: `url('${slide.image}')` }"
      >
        <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80"></div>
      </div>
    </transition-group>

    <div class="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
      
      <div class="absolute top-0 left-0 w-full h-full pointer-events-none border-[20px] md:border-[30px] border-white/5 z-20"></div>

      <div class="max-w-5xl mx-auto space-y-2">
         <ScrollReveal>
             <p class="text-[#C87D70] font-bold tracking-[0.4em] uppercase text-xs md:text-sm mb-4">
                 A2F Arquitetura
             </p>
         </ScrollReveal>

         <div class="overflow-hidden">
            <transition name="slide-up" mode="out-in">
                <h1 :key="currentSlide" class="font-serif text-6xl md:text-8xl lg:text-9xl text-[#F9F8F6] leading-none uppercase mix-blend-overlay opacity-90">
                    {{ slides[currentSlide].title }}
                    <span class="block text-[#C87D70] italic font-light lowercase text-4xl md:text-6xl mt-2 tracking-normal opacity-100 mix-blend-normal">
                        {{ slides[currentSlide].subtitle }}
                    </span>
                </h1>
            </transition>
         </div>
      </div>

      <div class="absolute bottom-12 animate-bounce">
          <a href="#projetos" class="flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors cursor-pointer">
              <span class="text-[10px] uppercase tracking-widest">Discover</span>
              <ArrowDown class="w-5 h-5" />
          </a>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* Efeito Ken Burns Suave (Zoom) */
.zoom-enter-active, .zoom-leave-active { transition: opacity 1.5s ease, transform 6s ease-out; }
.zoom-enter-from { opacity: 0; transform: scale(1.1); }
.zoom-leave-to { opacity: 0; transform: scale(1); }
.zoom-enter-to { opacity: 1; transform: scale(1); }

/* Animação do Texto trocando */
.slide-up-enter-active, .slide-up-leave-active { transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
.slide-up-enter-from { opacity: 0; transform: translateY(40px); }
.slide-up-leave-to { opacity: 0; transform: translateY(-40px); }
</style>