import { ref, onBeforeUnmount, onMounted } from 'vue'

export default function useScrollAnchor() {
    let observer = ref({})

    onMounted(() => {
        observer.value = new IntersectionObserver(([entry]) => {
            if (entry && entry.isIntersecting) {
                console.log('intersected!')
            }
        })
        observer.value.observe(document.querySelector('.scroll-anchor'))
    })

    onBeforeUnmount(() => {
        observer.value.disconnect()
    })

    return {
        observer
    }
}
