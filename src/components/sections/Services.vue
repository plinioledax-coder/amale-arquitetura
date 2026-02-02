<template>
  <section id="servicos" class="py-24 bg-white">
    <div class="container mx-auto px-6">
      
      <div class="text-center mb-20">
        <span class="text-[#C87D70] font-bold tracking-[0.2em] uppercase text-xs">O que fazemos</span>
        <h2 class="font-serif text-4xl md:text-5xl text-[#2C3E2D] mt-3 uppercase tracking-wide">Nossos Serviços</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <div 
          v-for="service in services" 
          :key="service.id" 
          class="group relative bg-[#F9F8F6] p-8 pb-10 rounded-sm hover:shadow-xl transition-all duration-300 border-l-4 border-transparent hover:border-[#C87D70]"
        >
          <div class="absolute -top-6 left-6 w-12 h-12 bg-[#7A9578] text-white rounded-sm flex items-center justify-center font-serif text-xl shadow-lg group-hover:bg-[#C87D70] transition-colors duration-300">
            {{ service.number }}
          </div>

          <div class="mt-6">
            <h3 class="font-serif text-xl text-[#2C3E2D] mb-4 min-h-[56px] flex items-end uppercase tracking-wider group-hover:text-[#C87D70] transition-colors">
              {{ service.title }}
            </h3>
            <p class="font-sans text-gray-600 font-light leading-relaxed text-sm">
              {{ service.description }}
            </p>
          </div>

          <div class="mt-8 border-t border-[#2C3E2D]/10 pt-4 flex justify-end opacity-60 group-hover:opacity-100 transition-opacity">
             <a 
               href="#contato" 
               class="text-[#7A9578] text-[10px] uppercase tracking-[0.2em] font-bold group-hover:text-[#C87D70] flex items-center gap-2 cursor-pointer transition-colors"
             >
                Saiba mais <span class="text-lg leading-none">→</span>
             </a>
          </div>
        </div>

      </div>

      <div class="mt-20 text-center">
        <p class="text-gray-500 mb-6 font-light">Não sabe qual o ideal para você?</p>
        <a href="#contato" class="inline-block px-10 py-4 bg-[#7A9578] text-white rounded-sm font-semibold hover:bg-[#2C3E2D] transition duration-300 shadow-lg uppercase text-xs tracking-[0.2em]">
          Fale com a gente
        </a>
      </div>

    </div>
  </section>
</template>

<script setup>
const services = [
  {
    id: 1,
    number: '01',
    title: 'Projeto Arquitetônico',
    description: 'Concepção completa da edificação. Planejamos desde a implantação no terreno até a volumetria e fachada, unindo estética e funcionalidade.'
  },
  {
    id: 2,
    number: '02',
    title: 'Projeto de Interiores',
    description: 'Detalhamento de ambientes internos. Marcenaria, iluminação, revestimentos e decoração pensados para traduzir sua personalidade.'
  },
  {
    id: 3,
    number: '03',
    title: 'Acompanhamento de Obra',
    description: 'Gestão técnica para garantir que o projeto seja executado fielmente, controlando qualidade e solucionando dúvidas in loco.'
  },
  {
    id: 4,
    number: '04',
    title: 'Consultoria',
    description: 'Soluções pontuais e rápidas para transformar ambientes sem a necessidade de obras complexas ou grandes reformas.'
  },
  {
    id: 5,
    number: '05',
    title: 'Produção de Ambientes',
    description: 'O toque final. Seleção de objetos, quadros, vegetação e organização para deixar o espaço pronto para morar ou fotografar.'
  },
  {
    id: 6,
    number: '06',
    title: 'Regularização de Imóveis',
    description: 'Análise técnica e adequação de imóveis já construídos às normas municipais, garantindo a documentação correta e a segurança jurídica.'
  }
]
</script>