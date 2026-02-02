<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  delay: { type: Number, default: 0 },
  direction: { type: String, default: 'up' } // up, left, right, none
})

const target = ref(null)
const isVisible = ref(false)

const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      isVisible.value = true
      observer.unobserve(entry.target) // Anima apenas uma vez
    }
  },
  { threshold: 0.15, rootMargin: '50px' }
)

onMounted(() => {
  if (target.value) observer.observe(target.value)
})

onUnmounted(() => {
  if (target.value) observer.unobserve(target.value)
})

// Classes dinâmicas baseadas na direção
const getTransformClass = () => {
  if (!isVisible.value) {
    switch (props.direction) {
      case 'up': return 'translate-y-12 opacity-0'
      case 'left': return '-translate-x-12 opacity-0'
      case 'right': return 'translate-x-12 opacity-0'
      default: return 'opacity-0'
    }
  }
  return 'translate-x-0 translate-y-0 opacity-100'
}
</script>

<template>
  <div 
    ref="target" 
    class="transition-all duration-1000 cubic-bezier(0.2, 1, 0.3, 1)"
    :class="getTransformClass()"
    :style="{ transitionDelay: `${delay}ms` }"
  >
    <slot />
  </div>
</template>

<style scoped>
/* A curva bezier (0.2, 1, 0.3, 1) dá aquele efeito "elástico" profissional */
.cubic-bezier {
    transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
}
</style>