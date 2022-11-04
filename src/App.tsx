import { useState } from 'react';
import './App.css';
import { Center, Container, Heading, HStack, VStack } from '@chakra-ui/react';
import SortingAlgorithm from './sortingAlgorithm';
import QuickSort from './sortingAlgorithms/quickSort';
import BubbleSort from './sortingAlgorithms/bubbleSort';
import SortBar from './SortBar';

const INITIAL_ITEMS_NUMBER = 100

const App = () => {
  const randomArray = (length: number) => (
    Array(length).fill(0).map(() => Math.round(Math.random() * length))
  )
  const shuffledRangeArray = (length: number) => (
    [...Array(length).keys()].map(it => [it, Math.random()]).sort((a, b) => a[1] - b[1]).map(it => it[0] + 1)
  )
  const inverseSortedArray = (length: number) => (
    [...Array(length).keys()].map(it => it + 1).reverse()
  )

  const sorts: {[name: string]: any} = {
    "Bubble Sort": BubbleSort,
    "Quick Sort": QuickSort
  }
  const creationTypes: {[name: string]: (length: number) => number[]} = {
    "Random": randomArray,
    "Range": shuffledRangeArray, 
    "Inverse": inverseSortedArray
  }

  const [itemsNumber, setItemsNumber] = useState(INITIAL_ITEMS_NUMBER)
  const [items, setItems] = useState<number[]>(shuffledRangeArray(itemsNumber))
  const [activeSort, setSort] = useState<SortingAlgorithm | null>(null)
  const [colours, setColours] = useState<string[]>([])

  const changedAt = (old: string[], changeIndex: number, newValue: string): string[] => {
    const newArray: string[] = []
    for (let i = 0; i < Math.max(old.length, changeIndex + 1); i++) {
      newArray[i] = i == changeIndex ? newValue : old[i]
    }
    return newArray
  }

  return (
    <VStack h={"100%"}>
      <Center>
        <Heading p={"24px"} size={"3xl"} color={"teal.500"}>Sorting Visualizer</Heading>
      </Center>
      <HStack spacing={0} alignItems={"end"} flexGrow={1} maxW={"98%"}>
        {items.map((it, index) => 
            <SortBar value={it} colour={colours[it] ?? "gray.800"} setColour={colour => setColours(colours => changedAt(colours, it, colour))} itemsNumber={items.length} greatestItem={Math.max(...items)} />
        )}
      </HStack>
      <Container h={"14%"} maxW={"80vw"} p={"24px"}>
        <HStack spacing={"10%"} justifyContent={"center"}>
          <VStack w={"20%"}>
            
          </VStack>
          <VStack w={"10%"}>
          </VStack>
        </HStack>
      </Container>
    </VStack>
  );
}

export default App
