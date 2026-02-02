<script setup>
const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
    <footer class="bg-[#2C3E2D] text-[#F9F8F6]/70 py-12 px-6 border-t border-[#C87D70]/20">
        <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            
            <div class="flex flex-col items-center md:items-start order-1">
                <a href="#" @click.prevent="scrollToTop" class="cursor-pointer hover:opacity-100 transition-opacity opacity-80">
                    <img src="https://placehold.co/200x80/transparent/white?text=AMALE+Arq&font=playfair-display" alt="AMALE Arquitetura" class="w-24 h-auto mb-2 opacity-90"> 
                </a>
            </div>

            <div class="text-xs uppercase tracking-[0.2em] font-medium flex flex-wrap justify-center gap-8 order-2 md:order-2">
                <a href="#sobre" class="hover:text-[#C87D70] transition-colors text-white">O Escritório</a>
                <a href="#team" class="hover:text-[#C87D70] transition-colors text-white">Quem Somos</a>
                <a href="#servicos" class="hover:text-[#C87D70] transition-colors text-white">Serviços</a>
                <a href="#projetos" class="hover:text-[#C87D70] transition-colors text-white">Portfólio</a>
                <a href="#depoimentos" class="hover:text-[#C87D70] transition-colors text-white">Depoimentos</a>
                <a href="#contato" class="hover:text-[#C87D70] transition-colors text-white">Contato</a>
            </div>

            <div class="text-[10px] text-center md:text-right leading-relaxed order-3 opacity-60">
                <p>&copy; {{ new Date().getFullYear() }} AMALE Arquitetura. Todos os direitos reservados.</p>
                <p>
                    Desenvolvido por
                    <a href="https://www.instagram.com/aperte.f1/" target="_blank"
                        class="hover:text-[#C87D70] transition-colors cursor-pointer font-bold border-b border-transparent hover:border-[#C87D70]">
                        Aperte F1
                    </a>
                </p>
            </div>
            
        </div>
    </footer>
</template>