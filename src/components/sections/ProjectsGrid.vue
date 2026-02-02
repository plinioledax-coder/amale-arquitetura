<script setup>
import { ref } from 'vue'
import { ArrowUpRight } from 'lucide-vue-next'
import ScrollReveal from '../ui/ScrollReveal.vue'

const projects = [
  {
    id: 1,
    title: 'Casa Horizonte',
    year: '2023',
    location: 'Alphaville, BA',
    description: 'Um desafio topográfico transformado em poesia visual. A casa se projeta sobre o vale, criando um mirante privativo onde a luz natural é a principal protagonista.',
    tags: ['Residencial', 'Interiores'],
    image: 'https://images.unsplash.com/photo-1600596542815-6ad4c727dd2d?q=80&w=2075&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Loja Aura',
    year: '2024',
    location: 'Shopping da Bahia',
    description: 'Minimalismo comercial. O objetivo era criar um vazio fértil onde os produtos fossem as únicas cores. O piso monolítico guia o cliente numa jornada fluida.',
    tags: ['Comercial', 'Retail'],
    image: 'https://images.unsplash.com/photo-1582037928769-181f242afcf8?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Loft Industrial',
    year: '2022',
    location: 'Horto Florestal',
    description: 'A brutalidade do concreto suavizada pela madeira e pelo linho. Um projeto para um jovem casal que precisava de integração total e praticidade.',
    tags: ['Reforma', 'Interiores'],
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop'
  }
]
</script>

<template>
  <section id="projetos" class="bg-[#F9F8F6] py-24 md:py-32">
    <div class="container mx-auto px-6">
      
      <ScrollReveal class="mb-20 md:mb-32 flex flex-col md:flex-row justify-between items-end gap-6 border-b border-[#2C3E2D]/10 pb-8">
        <div>
           <span class="text-[#C87D70] font-bold tracking-[0.2em] uppercase text-xs">Portfólio Selecionado</span>
           <h2 class="font-serif text-4xl md:text-6xl text-[#2C3E2D] mt-4 uppercase leading-none">
             Obras <br> <span class="italic font-light opacity-60">em destaque</span>
           </h2>
        </div>
        <div class="hidden md:block">
            <p class="text-[#2C3E2D]/60 max-w-sm text-sm font-light text-right">
                Cada projeto é uma resposta única ao contexto, ao clima e, principalmente, aos sonhos de quem habita.
            </p>
        </div>
      </ScrollReveal>

      <div class="flex flex-col gap-24 md:gap-40">
        
        <div 
          v-for="(project, index) in projects" 
          :key="project.id"
          class="group flex flex-col md:flex-row gap-8 md:gap-20 items-stretch"
        >
          <div class="md:w-1/3 md:sticky md:top-32 md:self-start flex flex-col justify-center order-2 md:order-1">
             <ScrollReveal :delay="200" direction="up">
                <div class="flex items-center gap-4 mb-6 opacity-60">
                    <span class="text-xs font-mono border border-[#2C3E2D]/20 rounded-full px-3 py-1">{{ project.year }}</span>
                    <span class="w-12 h-[1px] bg-[#2C3E2D]/40"></span>
                    <span class="text-xs uppercase tracking-widest font-bold">{{ project.location }}</span>
                </div>

                <h3 class="font-serif text-4xl md:text-5xl text-[#2C3E2D] mb-6 leading-tight group-hover:text-[#C87D70] transition-colors duration-500">
                    {{ project.title }}
                </h3>

                <p class="text-[#2C3E2D]/70 font-light leading-relaxed mb-8 text-sm md:text-base text-justify">
                    {{ project.description }}
                </p>

                <div class="flex flex-wrap gap-2 mb-8">
                    <span v-for="tag in project.tags" :key="tag" class="text-[10px] uppercase tracking-widest text-[#7A9578] font-bold bg-[#7A9578]/10 px-2 py-1 rounded-sm">
                        #{{ tag }}
                    </span>
                </div>

                <a href="#contato" class="inline-flex items-center gap-2 text-[#2C3E2D] font-bold uppercase text-xs tracking-[0.2em] border-b border-[#2C3E2D] pb-1 hover:text-[#C87D70] hover:border-[#C87D70] transition-all w-fit">
                    Ver Detalhes <ArrowUpRight class="w-4 h-4" />
                </a>
             </ScrollReveal>
          </div>

          <div class="md:w-2/3 order-1 md:order-2 overflow-hidden rounded-sm relative cursor-none md:cursor-pointer">
             <ScrollReveal direction="none">
                <div class="overflow-hidden w-full aspect-[4/3] relative group-hover:shadow-2xl transition-all duration-500">
                    <img 
                        :src="project.image" 
                        :alt="project.title"
                        class="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 grayscale md:grayscale-0"
                    >
                    <div class="absolute inset-0 bg-[#2C3E2D]/10 group-hover:opacity-0 transition-opacity duration-500"></div>
                </div>
             </ScrollReveal>
          </div>

        </div>

      </div>

      <div class="mt-32 text-center">
          <a href="#contato" class="inline-block px-12 py-5 bg-[#2C3E2D] text-white font-bold uppercase tracking-[0.2em] text-xs hover:bg-[#C87D70] transition-all duration-300 rounded-sm shadow-xl">
              Iniciar um novo projeto
          </a>
      </div>

    </div>
  </section>
</template>