<script setup>
import { ref } from 'vue'
import { Instagram, Mail, MapPin, Phone, ArrowRight, Send, Loader2 } from 'lucide-vue-next'

const form = ref({ name: '', email: '', phone: '', message: '' })
const status = ref({ submitting: false, success: false, error: false })

// URL DO FORMSPREE (Mantenha o seu ID)
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xnjjywnj' 

// DADOS DE CONTATO (Centralizados para facilitar edição)
const contactData = {
    phoneDisplay: '(71) 99716-0510',
    // Link direto para WhatsApp com mensagem pronta
    whatsappLink: 'https://wa.me/5571997160510?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20A2F%20e%20gostaria%20de%20um%20or%C3%A7amento.',
    instagramDisplay: '@a2farquitetura',
    instagramLink: 'https://www.instagram.com/a2farquitetura/',
    location: 'Salvador - BA',
    email: 'contato@a2f.com.br' // Coloque o email real aqui se tiver, senão pode remover
}

const handleSubmit = async () => {
    status.value.submitting = true
    status.value.success = false
    status.value.error = false

    try {
        const response = await fetch(FORMSPREE_ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify(form.value)
        })

        if (response.ok) {
            status.value.success = true
            form.value = { name: '', email: '', phone: '', message: '' }
        } else {
            status.value.error = true
        }
    } catch (e) {
        status.value.error = true
    } finally {
        status.value.submitting = false
    }
}
</script>

<template>
    <section id="contato" class="py-24 bg-white">
        <div class="container mx-auto px-6">
            <div class="flex flex-col lg:flex-row gap-16">
                
                <div class="lg:w-1/3">
                    <span class="text-[#C87D70] font-bold tracking-[0.2em] uppercase text-xs">Vamos conversar?</span>
                    <h2 class="font-serif text-4xl text-[#2C3E2D] mt-3 mb-8 uppercase tracking-wide">Entre em contato</h2>
                    <p class="text-gray-600 mb-10 font-light leading-relaxed">
                        Estamos prontas para transformar seu espaço. Preencha o formulário ao lado ou fale diretamente conosco pelos canais abaixo.
                    </p>
                    
                    <div class="space-y-6">
                         
                         <a :href="contactData.whatsappLink" target="_blank" class="flex items-center gap-4 text-gray-600 group hover:text-[#7A9578] transition-colors cursor-pointer">
                             <div class="w-12 h-12 rounded-sm bg-[#F9F8F6] flex items-center justify-center text-[#7A9578] group-hover:bg-[#7A9578] group-hover:text-white transition-all">
                                 <Phone class="w-5 h-5"/>
                             </div>
                             <div>
                                <span class="block text-xs uppercase tracking-widest text-gray-400 font-bold mb-1">WhatsApp</span>
                                <span class="text-lg">{{ contactData.phoneDisplay }}</span>
                             </div>
                         </a>

                         <a :href="contactData.instagramLink" target="_blank" class="flex items-center gap-4 text-gray-600 group hover:text-[#C87D70] transition-colors cursor-pointer">
                             <div class="w-12 h-12 rounded-sm bg-[#F9F8F6] flex items-center justify-center text-[#7A9578] group-hover:bg-[#C87D70] group-hover:text-white transition-all">
                                 <Instagram class="w-5 h-5"/>
                             </div>
                             <div>
                                <span class="block text-xs uppercase tracking-widest text-gray-400 font-bold mb-1">Instagram</span>
                                <span>{{ contactData.instagramDisplay }}</span>
                             </div>
                         </a>

                         <a :href="`mailto:${contactData.email}`" class="flex items-center gap-4 text-gray-600 group hover:text-[#2C3E2D] transition-colors cursor-pointer">
                             <div class="w-12 h-12 rounded-sm bg-[#F9F8F6] flex items-center justify-center text-[#7A9578] group-hover:bg-[#2C3E2D] group-hover:text-white transition-all">
                                 <Mail class="w-5 h-5"/>
                             </div>
                             <div>
                                <span class="block text-xs uppercase tracking-widest text-gray-400 font-bold mb-1">Email</span>
                                <span>{{ contactData.email }}</span>
                             </div>
                         </a>

                         <div class="flex items-center gap-4 text-gray-600 pt-4 border-t border-gray-100">
                             <div class="w-12 h-12 rounded-sm bg-white border border-gray-100 flex items-center justify-center text-[#C87D70]">
                                 <MapPin class="w-5 h-5"/>
                             </div>
                             <div>
                                <span class="block text-xs uppercase tracking-widest text-gray-400 font-bold mb-1">Localização</span>
                                <span class="font-serif text-lg text-[#2C3E2D]">{{ contactData.location }}</span>
                             </div>
                         </div>

                    </div>
                </div>

                <div class="lg:w-2/3 bg-[#F9F8F6] p-8 md:p-12 rounded-sm border-l-4 border-[#7A9578]">
                    <form @submit.prevent="handleSubmit" class="space-y-6">
                        
                        <div v-if="status.success" class="p-4 bg-[#7A9578]/10 text-[#7A9578] border border-[#7A9578] rounded-sm text-sm">
                            Mensagem enviada com sucesso! Entraremos em contato em breve.
                        </div>
                        <div v-if="status.error" class="p-4 bg-red-50 text-red-600 border border-red-200 rounded-sm text-sm">
                            Erro ao enviar. Por favor, tente pelo WhatsApp.
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div class="space-y-2">
                                <label class="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">Nome</label>
                                <input v-model="form.name" required type="text" class="w-full bg-white border border-transparent rounded-sm p-4 focus:border-[#7A9578] focus:ring-0 outline-none transition" placeholder="Seu nome completo">
                            </div>
                            <div class="space-y-2">
                                <label class="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">Telefone</label>
                                <input v-model="form.phone" required type="tel" class="w-full bg-white border border-transparent rounded-sm p-4 focus:border-[#7A9578] focus:ring-0 outline-none transition" placeholder="(71) 99999-9999">
                            </div>
                        </div>

                        <div class="space-y-2">
                            <label class="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">Email</label>
                            <input v-model="form.email" required type="email" class="w-full bg-white border border-transparent rounded-sm p-4 focus:border-[#7A9578] focus:ring-0 outline-none transition" placeholder="seu@email.com">
                        </div>

                        <div class="space-y-2">
                            <label class="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">Mensagem</label>
                            <textarea v-model="form.message" required rows="4" class="w-full bg-white border border-transparent rounded-sm p-4 focus:border-[#7A9578] focus:ring-0 outline-none transition" placeholder="Conte um pouco sobre seu projeto..."></textarea>
                        </div>

                        <button type="submit" :disabled="status.submitting" class="w-full py-5 bg-[#7A9578] text-white font-bold uppercase tracking-[0.2em] text-xs hover:bg-[#2C3E2D] transition-all rounded-sm shadow-lg flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed">
                            <span v-if="!status.submitting">Enviar Mensagem</span>
                            <span v-else>Enviando...</span>
                            <Send v-if="!status.submitting" class="w-4 h-4" />
                            <Loader2 v-else class="w-4 h-4 animate-spin" />
                        </button>
                    </form>
                </div>

            </div>
        </div>
    </section>
</template>