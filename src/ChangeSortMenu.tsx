import React from 'react'
import { Select } from '@chakra-ui/react'
import SortingAlgorithm from './sortingAlgorithm'

const ChangeSortMenu = (props: {sorts: {[name: string]: SortingAlgorithm}, setter: (sort: string) => void}) => {
  return (
    <Select variant={"outline"} placeholder={"Choose a sort"} onChange={event => props.setter(event.target.value)}>
      {Object.keys(props.sorts).map(sort => <option value={sort}>{sort}</option>)}
    </Select>
  )
}

export default ChangeSortMenu
