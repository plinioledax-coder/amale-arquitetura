<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const phone = '5571997160510'
const message = encodeURIComponent('Olá! Visitei o site da A2F Arquitetura e gostaria de solicitar um orçamento.')
const link = `https://wa.me/${phone}?text=${message}`

const visible = ref(false)
const isDarkSection = ref(true) // Começa true porque o Hero é escuro

// CONFIGURAÇÃO DE CONTRASTE
// Liste aqui os IDs das seções que têm fundo CLARO (Branco/Off-white)
// Nessas seções, o botão ficará ESCURO (Verde Musgo Profundo)
const lightSections = ['sobre', 'servicos', 'projetos', 'team', 'contato']

const handleScroll = () => {
  const scrollY = window.scrollY
  
  // 1. Visibilidade (aparece depois de 100px)
  visible.value = scrollY > 100

  // 2. Lógica de Cor Dinâmica
  const sections = document.querySelectorAll('section, header, footer')
  
  // Posição do gatilho (aprox. onde o botão fica na tela)
  const buttonPosition = window.innerHeight - 80

  sections.forEach(section => {
    const rect = section.getBoundingClientRect()
    
    // Verifica se este é o elemento que está "atrás" do botão agora
    if (rect.top <= buttonPosition && rect.bottom >= buttonPosition) {
      const sectionId = section.id
      
      // Se a seção atual for clara, botão escuro. Se for escura, botão claro.
      if (lightSections.includes(sectionId)) {
        isDarkSection.value = false // Botão vira Verde Escuro
      } else {
        isDarkSection.value = true  // Botão vira Salmão
      }
    }
  })
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <transition name="fade-slide">
    <a
      v-if="visible"
      :href="link"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Atendimento via WhatsApp"
      class="
        group
        fixed
        bottom-6
        right-6
        sm:bottom-8
        sm:right-8
        z-50
        w-14
        h-14
        rounded-[14px]
        flex
        items-center
        justify-center
        transition-all
        duration-500
        hover:scale-[1.05]
        shadow-2xl
        border-2
        border-white/20
      "
      :class="isDarkSection ? 'variant-bright' : 'variant-dark'"
    >
      
      <span
        class="absolute inset-0 rounded-[14px] opacity-0 group-hover:opacity-100 transition duration-500 animate-pulse"
        :class="isDarkSection ? 'bg-[#C87D70]/40' : 'bg-[#2C3E2D]/40'"
        style="transform: scale(1.3);"
      />

      <svg
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        class="relative w-7 h-7 transition-transform duration-300 group-hover:rotate-12"
      >
        <path d="M16 3C9.4 3 4 8 4 14.5c0 2.7 1 5.2 2.7 7.2L6 29l7.6-2.5c.7.2 1.6.3 2.4.3 6.6 0 12-5 12-11.5S22.6 3 16 3z"/>
        <path d="M12.7 10.7c-.3-.7-.6-.7-.9-.7h-.8c-.3 0-.7.1-1 .4-.4.4-1.3 1.3-1.3 3.2s1.3 3.7 1.5 4c.2.3 2.5 4 6.2 5.4 3 1.2 3.6 1 4.3.9.7-.1 2.2-.9 2.5-1.7.3-.8.3-1.5.2-1.7-.1-.2-.3-.3-.6-.5l-2.1-1c-.3-.1-.6-.2-.8.2-.2.4-.9 1.1-1.1 1.3-.2.2-.4.2-.7.1-.3-.1-1.5-.6-2.8-1.8-1-1-1.7-2.3-1.9-2.6-.2-.3 0-.5.1-.6.2-.2.3-.4.5-.6.2-.2.3-.4.4-.6.1-.2 0-.4 0-.6l-.9-2.2z"/>
      </svg>

      <span
        class="
          absolute
          right-16
          whitespace-nowrap
          text-xs
          tracking-[0.2em]
          uppercase
          px-4
          py-2
          rounded-sm
          opacity-0
          translate-x-4
          group-hover:opacity-100
          group-hover:translate-x-0
          transition-all
          duration-300
          font-bold
          shadow-lg
        "
        :class="isDarkSection 
          ? 'bg-[#C87D70] text-white' 
          : 'bg-[#2C3E2D] text-white'"
      >
        Fale Conosco
      </span>
    </a>
  </transition>
</template>

<style scoped>
/* VARIANTE 1: Para fundos escuros (Hero, Depoimentos, Footer) */
/* Botão SALMÃO para acender no verde */
.variant-bright {
  background: #C87D70;
  color: white; 
}

/* VARIANTE 2: Para fundos claros (Sobre, Serviços, Projetos...) */
/* Botão VERDE ESCURO para contrastar no branco */
.variant-dark {
  background: #2C3E2D;
  color: #F9F8F6; /* Off-white */
}

/* ANIMAÇÃO DE ENTRADA */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.8);
}
</style>