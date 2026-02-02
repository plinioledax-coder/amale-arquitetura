<script setup>
import Navbar from '../components/layout/Navbar.vue'
import Hero from '../components/sections/Hero.vue'
import About from '../components/sections/About.vue' // (O Manifesto)
import Team from '../components/sections/Team.vue'   // (As Arquitetas - NOVO)
import Services from '../components/sections/Services.vue'   // (Serviços - NOVO)
import ProjectsGrid from '../components/sections/ProjectsGrid.vue'
import Testimonials from '../components/sections/Testimonials.vue' // (Depoimentos - NOVO)
import Contact from '../components/sections/Contact.vue'
import Footer from '../components/layout/Footer.vue'
import FloatingWhatsapp from '../components/ui/FloatingWhatsapp.vue'
import ScrollReveal from '../components/ui/ScrollReveal.vue'

</script>

<template>
  <div class="min-h-screen">
    <Navbar />

    <Hero />

    <About />
  
    <Team />
    
    <Services/>

    <ProjectsGrid />

    <Testimonials />

    <Contact />

    <ScrollReveal />

    <Footer />

    <FloatingWhatsapp />

  </div>
</template>