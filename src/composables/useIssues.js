export default function useIssues() {
    const handleStateChange = (state) => {
        console.log(state)
    }

    return {
        handleStateChange
    }
}
