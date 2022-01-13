import {ref, onBeforeUnmount, onMounted} from 'vue'

export default function useScrollAnchor() {
    let observer = ref({})
    let time = ref(0)

    onMounted(() => {
        observer.value = new IntersectionObserver(([entry]) => {
            observerChanged(entry)
        })
        observer.value.observe(document.querySelector('.scroll-anchor'))
    })

    const observerChanged = (entry) => {
        if (entry && entry.isIntersecting) {
            time.value = entry.time
        }
    }

    onBeforeUnmount(() => {
        observer.value.disconnect()
    })

    return {
        observer,
        observerChanged,
        time
    }
}
