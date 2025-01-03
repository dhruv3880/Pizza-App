import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { useCart } from '@/providers/CartProvider'
import CartListItem from '@/components/CartListItem';
import Button from '@/components/Button';

const cart = () => {
    const {items,total} = useCart();


  return (
    <View style={{padding:10}}>
        
        <FlatList data={items} renderItem={({item})=> <CartListItem cartItem={item}/>}
        contentContainerStyle={{gap:10}} 
        />
        <Text style={{marginTop:10,fontSize:15,fontWeight:'500'}}>Total: ${total}</Text>
        <Button text="Checkout"/>

    </View>
  );
};

export default cart;