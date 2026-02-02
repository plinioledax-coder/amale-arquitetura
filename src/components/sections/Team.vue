<script setup>
import { Linkedin, Instagram, ArrowRight } from 'lucide-vue-next'
import ScrollReveal from '../ui/ScrollReveal.vue'

// Certifique-se que o caminho está correto
import fotoAmanda from '../../assets/images/amanda.jpeg' 
import fotoAlessandra from '../../assets/images/alessandra.jpeg'

const team = [
  { 
    id: 1, 
    name: 'Amanda Fraga', 
    role: 'Sócia & Gestão',
    crea: 'CAU A123456-7',
    desc: 'O olhar analítico que viabiliza o sonho. Especialista em transformar o abstrato em cronogramas tangíveis e estruturas sólidas.',
    quote: 'A inovação precisa de calma.',
    img: fotoAmanda, 
    color: '#7A9578'
  },
  { 
    id: 2, 
    name: 'Alessandra Andrade', 
    role: 'Sócia & Criativo',
    crea: 'CAU B987654-3',
    desc: 'A alma criativa que traduz sensações em espaços. Sua arquitetura não é apenas visual, é tátil, sonora e emotiva.',
    quote: 'Bem-estar é métrica.',
    img: fotoAlessandra,
    color: '#C87D70'
  }
]
</script>

<template>
    <section id="team" class="py-24 md:py-32 bg-[#F9F8F6] overflow-hidden">
        
        <div class="container mx-auto px-6 mb-20 md:mb-32">
             <ScrollReveal>
                <div class="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-[#2C3E2D]/10 pb-8">
                    <div>
                        <span class="text-[#C87D70] font-bold tracking-[0.2em] uppercase text-xs">Quem Somos</span>
                        <h2 class="font-serif text-4xl md:text-5xl text-[#2C3E2D] mt-4 uppercase leading-none">
                            Mentes <span class="italic font-light opacity-60">Criativas</span>
                        </h2>
                    </div>
                    <p class="hidden md:block text-[#2C3E2D]/60 max-w-sm text-sm font-light text-right">
                        A dualidade perfeita entre razão e emoção, técnica e arte.
                    </p>
                </div>
             </ScrollReveal>
        </div>

        <div class="container mx-auto px-6 flex flex-col gap-32">
            
            <div 
                v-for="(member, index) in team" 
                :key="member.id"
                class="group relative flex flex-col md:flex-row items-center gap-12 md:gap-24"
                :class="index % 2 === 1 ? 'md:flex-row-reverse' : ''"
            >
                
                <div class="w-full md:w-1/2 relative flex justify-center">
                    <ScrollReveal :direction="index % 2 === 0 ? 'left' : 'right'" class="w-full max-w-md"> <div 
                            class="absolute -inset-4 opacity-20 rounded-sm transform transition-transform duration-700 group-hover:scale-105 group-hover:rotate-2"
                            :style="{ backgroundColor: member.color }"
                        ></div>

                        <div class="relative overflow-hidden rounded-sm shadow-2xl aspect-[3/4] md:aspect-[4/5]">
                            <img 
                                :src="member.img" 
                                :alt="member.name" 
                                class="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 grayscale group-hover:grayscale-0"
                            >
                            
                            <div class="absolute bottom-6 left-6 right-6 p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-sm text-white opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 hidden md:block">
                                <p class="font-serif italic text-lg mb-2">"{{ member.quote }}"</p>
                                <div class="flex gap-4 mt-4 pt-4 border-t border-white/20">
                                    <a href="#" class="hover:text-[#C87D70] transition-colors"><Linkedin class="w-5 h-5"/></a>
                                    <a href="#" class="hover:text-[#C87D70] transition-colors"><Instagram class="w-5 h-5"/></a>
                                </div>
                            </div>
                        </div>

                        <div class="absolute top-4 right-4 bg-[#F9F8F6] text-[#2C3E2D] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                            {{ member.crea }}
                        </div>

                    </ScrollReveal>
                </div>

                <div class="w-full md:w-1/2 space-y-4 text-center md:text-left">
                    <ScrollReveal :delay="200" direction="up">
                        
                        <div class="space-y-2">
                            <span class="block text-[#C87D70] font-bold uppercase tracking-[0.2em] text-xs">
                                {{ member.role }}
                            </span>
                            
                            <h3 class="font-serif text-5xl md:text-7xl text-[#2C3E2D] leading-none">
                                {{ member.name.split(' ')[0] }} <br>
                                <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#2C3E2D] to-[#2C3E2D]/50 italic">
                                    {{ member.name.split(' ')[1] }}
                                </span>
                            </h3>
                        </div>

                        <div class="w-12 h-1 bg-[#C87D70] mx-auto md:mx-0 rounded-full my-10"></div>

                        <p class="text-lg text-[#2C3E2D]/70 font-light leading-relaxed max-w-md mx-auto md:mx-0">
                            {{ member.desc }}
                        </p>

                        <div class="md:hidden flex justify-center gap-6 pt-8 text-[#2C3E2D]/60">
                             <a href="#" class="flex items-center gap-2 text-xs uppercase tracking-widest hover:text-[#C87D70]">
                                 <Linkedin class="w-4 h-4"/> LinkedIn
                             </a>
                             <a href="#" class="flex items-center gap-2 text-xs uppercase tracking-widest hover:text-[#C87D70]">
                                 <Instagram class="w-4 h-4"/> Instagram
                             </a>
                        </div>
                        
                    </ScrollReveal>
                </div>

            </div>

        </div>

        <div class="container mx-auto px-6 mt-32 text-center">
            <ScrollReveal direction="up">
                <p class="text-2xl md:text-3xl font-serif text-[#2C3E2D] max-w-3xl mx-auto leading-relaxed">
                    "Acreditamos que a arquitetura deve servir à vida, <br> e não o contrário."
                </p>
                <div class="mt-8">
                     <a href="#contato" class="inline-flex items-center gap-2 text-[#C87D70] border-b border-[#C87D70] pb-1 font-bold uppercase text-xs tracking-[0.2em] hover:opacity-70 transition-opacity">
                        Fale com a nossa equipe <ArrowRight class="w-4 h-4"/>
                    </a>
                </div>
            </ScrollReveal>
        </div>

    </section>
</template>