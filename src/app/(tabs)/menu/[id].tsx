import { View, Text } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'

const ProductsDetailScreen = () => {
  const {id} = useLocalSearchParams();

  return (
    <View>
      <Stack.Screen options={{title:"Details: " + id}}/>
      <Text style={{fontSize:20, fontWeight:"bold"}}>ProductsDetailScreen for id:{id}</Text>
    </View>
  )
}

export default ProductsDetailScreen;