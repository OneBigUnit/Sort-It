interface SortingAlgorithm {
    sort: (items: number[]) => AsyncGenerator<number[], void>
}

export default SortingAlgorithm
