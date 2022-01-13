import {ref} from 'vue'
import issuesApi from "../api/issuesApi"

export default function useIssues() {
    let selectedStates = ref([])
    let issues = ref([])
    let ended = ref(false)
    let loading = ref(false)
    let page = ref(1)
    let {fetchIssues} = issuesApi

    const handleStateChange = (state) => {
        reset()
        if (selectedStates.value !== state && !selectedStates.value.includes(state)) {
            selectedStates.value.push(state)
        } else {
            selectedStates.value.splice(selectedStates.value.indexOf(state), 1)
        }
    }

    const handleScrollAnchor = async () => {
        if (!ended.value) {

            let state = determineState()
            loading.value = true

            let result = await fetchIssues({
                page: page.value,
                state,
                sort: 'created'
            })

            if (result.data.length === 0) {
                ended.value = true
            } else {
                page.value++
                issues.value = issues.value.concat(result.data)
            }
            loading.value = false
        }
    }

    const determineState = () => {
        if (selectedStates.value.length === 2 || selectedStates.value.length === 0) {
            return 'all'
        } else {
            return selectedStates.value[0]
        }
    }

    const reset = () => {
        issues.value = []
        ended.value = false
        page.value = 1
    }

    return {
        handleStateChange,
        handleScrollAnchor,
        reset,
        selectedStates,
        issues,
        loading
    }
}
