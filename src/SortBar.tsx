import { Container } from '@chakra-ui/react'

const SortBar = (props: {value: number, itemsNumber: number, greatestItem: number, colour: string, setColour: (colour: string) => void}) => {
  return (
    <Container p={0} w={`${100 / props.itemsNumber}vw`} bg={props.colour} border={"1px"} borderColor={"black"} h={`${props.value * (100 / props.greatestItem)}%`} maxH={"100vh"} />
  )
}

export default SortBar
