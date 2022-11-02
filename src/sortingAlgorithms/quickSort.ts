import SortingAlgorithm from "../sortingAlgorithm"


class QuickSort implements SortingAlgorithm {
    async *sort(items: number[]) {
        yield* this.quickSort(items, (one: number, two: number) => one - two, 0, items.length - 1)
    }

    async *swap(items: number[], left: number, right: number) {
        const temp = items[left];
        items[left] = items[right];
        items[right] = temp;
        yield items.slice()
    }

    async *partition(items: number[], compare: (one: number, two: number) => number, left: number, right: number) {
        const pivot = items[Math.floor((right + left) / 2)];
        let i = left;
        let j = right;
        while (i <= j) {
            while (compare(items[i], pivot) < 0) {
                i++;
            }
            while (compare(items[j], pivot) > 0) {
                j--;
            }
            if (i <= j) {
                yield* this.swap(items, i, j)
                i++;
                j--;
            }
        }
        return i;
    }

    async *quickSort(items: number[], compare: (one: number, two: number) => number, left: number, right: number): AsyncGenerator<number[], void> {
        let index;
        if (items.length > 1) {
            index = yield* this.partition(items, compare, left, right);
            if (left < index - 1) {
                yield* this.quickSort(items, compare, left, index - 1);
            }
            if (index < right) {
                yield* this.quickSort(items, compare, index, right);
            }
        }
        yield items
    }
}

export default QuickSort
