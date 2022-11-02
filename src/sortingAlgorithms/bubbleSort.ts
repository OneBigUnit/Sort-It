import SortingAlgorithm from "../sortingAlgorithm"


class BubbleSort implements SortingAlgorithm {
    async *sort(items: number[]) {
        for (let i = 0; i < items.length; i++) {
            for (let j = 0; j < items.length - 1; j++) {
                if (items[j] > items[j + 1]) {
                    let swap = items[j]
                    items[j] = items[j + 1]
                    items[j + 1] = swap
                    yield items.slice()
                }
            }
        }
    }
}

export default BubbleSort
