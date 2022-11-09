import React from 'react'
import { Button } from '@chakra-ui/react'

const PlaybackSwitch = (props: {isPaused: boolean, isPausedSetter: (value: boolean) => void, startFunction: () => void}) => {
  const toggleState = () => {
    props.isPausedSetter(!props.isPaused)
    props.startFunction()
  }

  if (props.isPaused) {
    return (
      <Button colorScheme='teal' variant='solid' onClick={toggleState}>
        Start
      </Button>
    )
  }
  return (
    <Button colorScheme='teal' variant='solid' onClick={toggleState}>
      Stop
    </Button>
  )
}

export default PlaybackSwitch
