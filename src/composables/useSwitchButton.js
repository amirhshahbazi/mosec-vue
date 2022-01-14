import {ref} from 'vue'

export default function useSwitchButton(emit) {
    const isActive = ref(false)

    const toggle = () => {
        isActive.value = !isActive.value
        emit('stateChange', isActive.value)
    }

    return {
        isActive,
        toggle
    }
}
