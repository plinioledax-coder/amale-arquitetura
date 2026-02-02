<script setup>
import { PenTool, HardHat, Heart, MapPin } from 'lucide-vue-next'

// DIFERENCIAIS (Texto adaptado para a identidade AMALE)
const features = [
  {
    icon: PenTool,
    title: 'Identidade Única',
    text: 'Fugimos do "copia e cola". Cada projeto traduz a individualidade e a rotina do cliente.'
  },
  {
    icon: HardHat,
    title: 'Gestão Técnica',
    text: 'Acompanhamento rigoroso da obra. Garantimos que o design saia do papel com perfeição.'
  },
  {
    icon: Heart,
    title: 'Design Sensorial',
    text: 'Estética aliada ao bem-estar. Ambientes feitos para serem vividos e sentidos.'
  }
]

// MÉTRICAS (Baseado no perfil delas: Dupla, Regiões, etc)
const stats = [
  { value: '2', label: 'Sócias Arquitetas' },
  { value: '+250', label: 'Ambientes com Personalidade' }, // Estimativa
  { value: '100%', label: 'Dedicação'},
  { value: '4', label: 'Regiões de Atuação' } // SSA, Metro, Litoral, Chapada
]
</script>

<template>
  <section id="sobre" class="py-24 px-6 md:px-12 relative overflow-hidden bg-[#F9F8F6]">

    <div class="absolute top-0 right-0 w-1/3 h-full bg-[#7A9578]/5 skew-x-12 transform origin-top-right"></div>
    <div class="absolute bottom-0 left-0 w-64 h-64 bg-[#C87D70]/5 blur-3xl rounded-full"></div>

    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

      <div class="space-y-10 order-2 lg:order-1">

        <div class="space-y-4">
          <div class="flex items-center gap-4">
            <div class="w-12 h-[2px] bg-[#C87D70]"></div>
            <span class="text-[#7A9578] uppercase tracking-[0.2em] text-sm font-bold">O Escritório</span>
          </div>

          <h2 class="font-serif text-4xl md:text-5xl text-[#2C3E2D] leading-none uppercase tracking-wide">
            Não desenhamos <br> apenas casas. <br>
            <span class="font-light text-[#C87D70]">Criamos cenários.</span>
          </h2>
        </div>

        <div class="text-[#2C3E2D]/80 text-lg leading-relaxed font-sans font-light space-y-4 text-justify">
          <p>
            Na <strong class="text-[#7A9578] font-bold">AMALE Arquitetura</strong>, acreditamos que o bom design nasce da
            escuta.
            Somos um escritório liderado por <strong>Alessandra Andrade</strong> e <strong>Amanda Fraga</strong>, unindo
            criatividade e rigor técnico.
          </p>
          <p>
            Atuamos em <strong>Salvador, Litoral Norte e Chapada Diamantina</strong>.
            Nosso foco é entregar praticidade e beleza, garantindo que sua individualidade esteja presente em cada
            detalhe do espaço.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-[#2C3E2D]/10">
          <div v-for="(feature, index) in features" :key="index" class="space-y-3 group">
            <component :is="feature.icon"
              class="w-6 h-6 text-[#C87D70] group-hover:scale-110 transition-transform duration-300" />
            <h3 class="font-bold text-[#2C3E2D] text-xs uppercase tracking-widest">{{ feature.title }}</h3>
            <p class="text-xs text-[#2C3E2D]/60 leading-relaxed font-sans">{{ feature.text }}</p>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-y-8 gap-x-4 pt-8 border-t border-[#2C3E2D]/10">
          <div v-for="(stat, index) in stats" :key="index">
            <span class="block text-4xl font-serif text-[#7A9578] leading-none mb-1">{{ stat.value }}</span>
            <span class="text-[10px] uppercase tracking-[0.2em] text-[#2C3E2D]/60 font-bold">{{ stat.label }}</span>
          </div>
        </div>

      </div>

      <div class="relative order-1 lg:order-2 h-full min-h-[500px]">

        <div
          class="absolute top-0 right-0 w-5/6 h-5/6 overflow-hidden shadow-2xl z-10 group border-l-4 border-b-4 border-white">
          <img src= '../../assets/images/ambas.jpeg'
            alt="Equipe AMALE" class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700">
          <div
            class="absolute inset-0 bg-[#2C3E2D]/20 mix-blend-multiply pointer-events-none transition-opacity group-hover:opacity-0">
          </div>
        </div>

        <div class="absolute bottom-10 left-0 w-1/2 h-1/2 bg-white p-2 shadow-xl z-20">
          <div class="w-full h-full overflow-hidden relative">
            <img src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop"
              alt="Detalhe de projeto"
              class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105">
          </div>
          <div class="absolute -top-2 -right-2 w-4 h-4 bg-[#C87D70]"></div>
        </div>

        <div class="absolute -bottom-4 -left-4 w-32 h-32 border border-[#C87D70]/50 z-0"></div>
        <div
          class="absolute top-10 right-10 w-full h-full border border-[#7A9578]/20 z-0 transform translate-x-4 translate-y-4">
        </div>

      </div>
    </div>

  </section>
</template>