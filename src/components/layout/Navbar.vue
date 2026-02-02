<script setup>
import { ref, onMounted, onUnmounted, nextTick, watch } from 'vue'
import { Menu, X } from 'lucide-vue-next'

const isScrolled = ref(false)
const isMenuOpen = ref(false)
const NAVBAR_OFFSET = 100

watch(isMenuOpen, (val) => {
  document.body.style.overflow = val ? 'hidden' : ''
})

const checkScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
  document.body.style.overflow = ''
})

const scrollTo = async (id) => {
  isMenuOpen.value = false
  await nextTick()
  const el = document.getElementById(id)
  if (!el) return
  const y = el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_OFFSET
  window.scrollTo({ top: y, behavior: 'smooth' })
}

const handleLogoClick = () => {
  isMenuOpen.value = false
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <nav class="fixed w-full z-50 transition-all duration-500 ease-in-out px-6" :class="isScrolled
    ? 'bg-[#F9F8F6]/95 backdrop-blur-md shadow-sm py-4'
    : 'bg-transparent py-8'">
    <div class="max-w-7xl mx-auto flex justify-between items-center relative z-50">

      <a href="#" @click.prevent="handleLogoClick" class="block w-28 md:w-32 hover:opacity-80 transition-opacity">
        <img v-if="isScrolled || isMenuOpen"
          src="https://placehold.co/200x80/transparent/7A9578?text=A2F+Arq&font=playfair-display" alt="A2F Arquitetura"
          class="w-full h-auto" />
        <img v-else src="https://placehold.co/200x80/transparent/white?text=A2F+Arq&font=playfair-display"
          alt="A2F Arquitetura" class="w-full h-auto" />
      </a>

      <div class="hidden xl:flex gap-6 items-center">
        <button @click="scrollTo('sobre')" :class="isScrolled ? 'text-[#7A9578]' : 'text-white'"
          class="text-xs uppercase tracking-[0.15em] hover:text-[#C87D70] transition-colors font-medium">O
          Escritório</button>

        <button @click="scrollTo('team')" :class="isScrolled ? 'text-[#7A9578]' : 'text-white'"
          class="text-xs uppercase tracking-[0.15em] hover:text-[#C87D70] transition-colors font-medium">Quem
          Somos</button>

        <button @click="scrollTo('servicos')" :class="isScrolled ? 'text-[#7A9578]' : 'text-white'"
          class="text-xs uppercase tracking-[0.15em] hover:text-[#C87D70] transition-colors font-medium">Serviços</button>
        <button @click="scrollTo('projetos')" :class="isScrolled ? 'text-[#7A9578]' : 'text-white'"
          class="text-xs uppercase tracking-[0.15em] hover:text-[#C87D70] transition-colors font-medium">Portfólio</button>
        <button @click="scrollTo('depoimentos')" :class="isScrolled ? 'text-[#7A9578]' : 'text-white'"
          class="text-xs uppercase tracking-[0.15em] hover:text-[#C87D70] transition-colors font-medium">Depoimentos</button>
        <button @click="scrollTo('contato')" :class="isScrolled ? 'text-[#7A9578]' : 'text-white'"
          class="text-xs uppercase tracking-[0.15em] hover:text-[#C87D70] transition-colors font-medium">Contato</button>
        <a href="https://portal-do-cliente-arq.vercel.app/" target="_blank"
          class="ml-4 px-6 py-3 text-xs uppercase tracking-widest transition-all duration-300 rounded-full font-bold shadow-lg hover:-translate-y-0.5"
          :class="isScrolled
            ? 'bg-[#C87D70] text-white hover:bg-[#B06A5E] hover:shadow-xl'
            : 'bg-white text-[#7A9578] hover:bg-[#7A9578] hover:text-white hover:shadow-green-900/20'">
          Portal do Cliente
        </a>
      </div>

      <button @click="isMenuOpen = !isMenuOpen" class="xl:hidden relative z-50 transition-colors"
        :class="(isScrolled || isMenuOpen) ? 'text-[#7A9578]' : 'text-white'">
        <X v-if="isMenuOpen" />
        <Menu v-else />
      </button>
    </div>

    <Teleport to="body">
      <transition enter-active-class="transition duration-300 ease-out" enter-from-class="opacity-0 translate-y-[-20px]"
        enter-to-class="opacity-100 translate-y-0" leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-[-20px]">
        <div v-if="isMenuOpen"
          class="fixed inset-0 bg-[#F9F8F6] z-40 flex flex-col items-center justify-center gap-8 overflow-hidden">
          <button @click="scrollTo('sobre')"
            class="text-xl font-serif text-[#7A9578] hover:text-[#C87D70] transition-colors">O Escritório</button>

          <button @click="scrollTo('team')"
            class="text-xl font-serif text-[#7A9578] hover:text-[#C87D70] transition-colors">Quem Somos</button>

          <button @click="scrollTo('servicos')"
            class="text-xl font-serif text-[#7A9578] hover:text-[#C87D70] transition-colors">Serviços</button>
          <button @click="scrollTo('projetos')"
            class="text-xl font-serif text-[#7A9578] hover:text-[#C87D70] transition-colors">Portfólio</button>
          <button @click="scrollTo('depoimentos')"
            class="text-xl font-serif text-[#7A9578] hover:text-[#C87D70] transition-colors">Depoimentos</button>
          <button @click="scrollTo('contato')"
            class="text-xl font-serif text-[#7A9578] hover:text-[#C87D70] transition-colors">Contato</button>

          <a href="https://portal-do-cliente-arq.vercel.app/" target="_blank"
            class="mt-6 px-10 py-4 bg-[#C87D70] text-white font-bold uppercase tracking-widest rounded-full hover:bg-[#B06A5E] transition-colors shadow-lg">
            Portal do Cliente
          </a>
        </div>
      </transition>
    </Teleport>
  </nav>
</template>