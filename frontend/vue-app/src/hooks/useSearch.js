import { computed, ref, watch } from "vue"


export default function useSearch(items, searchKey = '') {
    const enteredSearchTerm = ref('')
    let activeSearchTerm = ref('')
    const updateSearch = text => enteredSearchTerm.value = text

    const filteredItems = computed(() => (
        activeSearchTerm.value) ? [...items.value].filter((item) => item[searchKey].includes(activeSearchTerm.value)) : items.value
    )

    watch(enteredSearchTerm, (value => !value.length ? activeSearchTerm.value = value : delayInput(enteredSearchTerm, activeSearchTerm, value)))


    return { enteredSearchTerm, availableItems: filteredItems, updateSearch }
}


const delayInput = (entered, active, value) => {
    setTimeout(() => {
        if (entered.value === value) {
            active.value = value
        }
    }, 1500);
}