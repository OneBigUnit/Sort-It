import React, { useState } from 'react'
import { Box, Slider, SliderMark, SliderTrack, SliderFilledTrack, SliderThumb, Container } from '@chakra-ui/react'

const NumberItemsSlider = (props: {default: number, setter: (value: number) => void, isPaused: boolean}) => {
    const [itemsNumber, setItemsNumber] = useState(props.default)
    const doItemsNumberSetting = (value: number) => {
        setItemsNumber(value)
        props.setter(value)
    }

    const labelStyles = {
      mt: '2',
      ml: '-2.5',
      fontSize: 'sm',
    }

    return (
      <Container>
        <Box pt={6} pb={2}>
          <Slider colorScheme={!props.isPaused ? "blackAlpha" : "teal.500"} isReadOnly={!props.isPaused} min={5} max={400} defaultValue={props.default} aria-label='slider-ex-6' onChange={(val) => doItemsNumberSetting(val)}>
            <SliderMark value={5} {...labelStyles}>
              5 Items
            </SliderMark>
            <SliderMark value={400} {...labelStyles}>
              400 Items
            </SliderMark>
            <SliderMark
              value={itemsNumber}
              textAlign='center'
              bg={props.isPaused ? "teal.500" : "blackAlpha.600"}
              color='white'
              mt='-10'
              ml='-5'
              w='12'
            >
              {itemsNumber}
            </SliderMark >
            <SliderTrack>
              <SliderFilledTrack bg={props.isPaused ? "teal.500" : "blackAlpha.500"} />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </Box>
      </Container>
    )
}

export default NumberItemsSlider
