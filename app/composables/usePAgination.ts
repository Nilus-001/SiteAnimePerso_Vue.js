export const usePagination = () => {
    const nbrPages = ref(0)
    const currentPage = ref(0)

    const updatePage = (value) => {
        nbrPages+value
    }



    return {
        nbrPages,
        currentPage,
    }
}