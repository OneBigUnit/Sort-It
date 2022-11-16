import React, { useState } from 'react'
import { Box, Slider, SliderMark, SliderTrack, SliderFilledTrack, SliderThumb, Container } from '@chakra-ui/react'

const SpeedSlider = (props: {default: number, setter: (value: number) => void}) => {
    const [speed, setSpeed] = useState(props.default)
    const doSpeedSetting = (value: number) => {
        setSpeed(value)
        props.setter(value)
    }

    const labelStyles = {
      mt: '2',
      ml: '-2.5',
      fontSize: 'sm',
    }
  
    return (
      <Container maxW={"40%"}>
        <Box pt={6} pb={2}>
          <Slider min={5} max={300} defaultValue={props.default} aria-label='slider-ex-6' onChange={(val) => doSpeedSetting(val)}>
            <SliderMark value={5} {...labelStyles}>
              5/s
            </SliderMark>
            <SliderMark value={50} {...labelStyles}>
              50/s
            </SliderMark>
            <SliderMark value={100} {...labelStyles}>
              100/s
            </SliderMark>
            <SliderMark value={150} {...labelStyles}>
              150/s
            </SliderMark>
            <SliderMark value={200} {...labelStyles}>
              200/sv--v[]
            </SliderMark>
            <SliderMark value={250} {...labelStyles}>
              250/s
            </SliderMark>
            <SliderMark value={300} {...labelStyles}>
              300/s
            </SliderMark>
            <SliderMark
              value={speed}
              textAlign='center'
              bg='blue.500'
              color='white'
              mt='-10'
              ml='-5'
              w='12'
            >
              {speed}/s
            </SliderMark>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </Box>
      </Container>
    )
}

export default SpeedSlider
