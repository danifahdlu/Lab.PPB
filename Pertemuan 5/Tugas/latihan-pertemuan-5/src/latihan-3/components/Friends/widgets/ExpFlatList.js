import React from 'react'
import { FlatList } from 'react-native'
import UserItem from './UserItem'

const ExpFlatList = ({Users}) => {
  return (
    <FlatList data={Users} renderItem={({item}) => <UserItem item={item} />} />
  )
}

export default ExpFlatList
