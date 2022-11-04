import React from 'react'
import {Button, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { ChevronUpIcon } from '@chakra-ui/icons'

const NewArrayButton = (props: {creationTypes: {[name: string]: (length: number) => number[]}, newArrayFunction: (creationType: string) => void}) => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronUpIcon />}>
        New Array
      </MenuButton>
      <MenuList>
        {Object.keys(props.creationTypes).map(creationType => <MenuItem onClick={() => props.newArrayFunction(creationType)}>{creationType}</MenuItem>)}
      </MenuList>
    </Menu>
  )
}

export default NewArrayButton
