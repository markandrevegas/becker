import { ref, watch, onUnmounted } from 'vue'

export function useInViewport(elRef: any) {
  const isVisible = ref(false)
  let observer: IntersectionObserver

  const attachObserver = () => {
    if (!elRef.value) return
    observer = new IntersectionObserver(
      ([entry]) => {
        isVisible.value = entry?.isIntersecting as boolean
      },
      { threshold: 0.1 }
    )
    observer.observe(elRef.value)
  }

  watch(elRef, (newEl) => {
    if (newEl) attachObserver()
  })

  onUnmounted(() => observer?.disconnect())

  return { isVisible }
}
