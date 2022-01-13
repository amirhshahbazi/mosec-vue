import {ref} from 'vue'

export default function useIssues() {
    let selectedStates = ref([])

    const handleStateChange = (state) => {
        if (selectedStates.value !== state && !selectedStates.value.includes(state)) {
            selectedStates.value.push(state)
        } else {
            selectedStates.value.splice(selectedStates.value.indexOf(state), 1)
        }
    }

    return {
        handleStateChange,
        selectedStates
    }
}
