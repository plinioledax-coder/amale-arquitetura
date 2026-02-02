<script setup>
import { Quote, Star } from 'lucide-vue-next'

const testimonials = [
    {
        id: 1,
        text: "A A2F não entregou apenas um projeto, entregou a nossa identidade. Conseguiram captar exatamente o que queríamos, mesmo quando nem nós sabíamos explicar direito.",
        author: "Mariana & João",
        project: "Apartamento Vila Nova",
        type: "Reforma Completa",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&h=100&auto=format&fit=crop" 
    },
    {
        id: 2,
        text: "O profissionalismo com o orçamento foi o diferencial. Fizeram mágica com a verba que tínhamos e o resultado final ficou muito acima do que imaginávamos.",
        author: "Roberto Mendes",
        project: "Escritório RM",
        type: "Corporativo",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&h=100&auto=format&fit=crop"
    },
    {
        id: 3,
        text: "Contratamos a consultoria para o quarto do bebê e foi a melhor escolha. Soluções práticas, rápidas e com um bom gosto indiscutível. O resultado ficou um sonho.",
        author: "Carla Siqueira",
        project: "Residencial Horto",
        type: "Consultoria de Interiores",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100&h=100&auto=format&fit=crop"
    }
]
</script>

<template>
    <section id="depoimentos" class="py-24 bg-[#7A9578] text-white relative overflow-hidden">
        
        <div class="absolute top-0 right-0 w-64 h-64 border border-white/5 rotate-45 transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 border border-white/5 rotate-12 transform -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

        <div class="container mx-auto px-6 relative z-10">
            
            <div class="text-center mb-16">
                <span class="text-[#2C3E2D] bg-[#F9F8F6] font-bold tracking-[0.2em] uppercase text-[10px] px-4 py-2 rounded-sm shadow-sm">
                    Feedback
                </span>
                <h2 class="font-serif text-3xl md:text-4xl text-white mt-6 uppercase tracking-wide">
                    O que dizem <span class="italic font-light text-white/80">nossos clientes</span>
                </h2>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div 
                    v-for="item in testimonials" 
                    :key="item.id" 
                    class="bg-[#2C3E2D]/20 backdrop-blur-md p-8 rounded-sm border-l-[3px] border-[#C87D70] hover:bg-[#2C3E2D]/40 transition-all duration-300 group"
                >
                    <div class="flex gap-1 mb-6">
                        <Star v-for="n in 5" :key="n" class="w-4 h-4 fill-[#C87D70] text-[#C87D70]" />
                    </div>

                    <Quote class="w-8 h-8 text-white/30 mb-4" />
                    
                    <p class="font-sans font-light text-base md:text-lg leading-relaxed mb-8 text-white min-h-[120px]">
                        "{{ item.text }}"
                    </p>

                    <div class="flex items-center gap-4 pt-6 border-t border-white/10">
                        <img :src="item.image" :alt="item.author" class="w-12 h-12 rounded-sm object-cover border border-white/30">
                        
                        <div>
                            <p class="font-serif text-lg text-white font-medium">{{ item.author }}</p>
                            <div class="flex flex-col text-xs mt-1">
                                <span class="text-white/90 font-bold uppercase tracking-widest">{{ item.project }}</span>
                                <span class="text-white/60 font-light">{{ item.type }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="md:hidden mt-8 text-center opacity-60">
                 <p class="text-[10px] uppercase tracking-widest text-white">Deslize para ver mais</p>
            </div>

        </div>
    </section>
</template>