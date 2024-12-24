import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import products from '@assets/data/products';
import { defaultPizzaImage } from '@/components/ProductListItem';
import { useState } from 'react';
import Button from '@/components/Button';
import { useCart } from '@/providers/CartProvider';
import { PizzaSize } from '@/types';
import { useRoute } from '@react-navigation/native';

const Sizes: PizzaSize[] = ['S', 'M', 'L', 'XL'];
const ProductsDetailScreen = () => {
  const { id } = useLocalSearchParams();
  const [selectedSize, setSelectedSize] = useState<PizzaSize>('M');
  const {addItem} =useCart();

  const router =useRouter();

  const product = products.find((p) => p.id.toString() === id);

  const addTocart = () =>{
    if(!product){
      return;
    }
    addItem(product,selectedSize)
    router.push('/cart');
  };

  if (!product) {
    return <Text>Product not found</Text>;
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: product?.name }} />
      <Image source={{ uri: product.image || defaultPizzaImage }} style={styles.image} />

      <Text>Select size</Text>
      <View style={styles.sizes}>
        {
          Sizes.map((size) =>
            <Pressable
              onPress={() => {
                setSelectedSize(size)
              }}
              style={[styles.size, {
                backgroundColor: selectedSize === size ? 'gainsboro' : 'white',
              },
              ]}
              key={size}>
              <Text style={[styles.sizeText, {
                color: selectedSize === size ? 'black' : 'gray',
              },
              ]}>
                {size}</Text>
            </Pressable>
          )}

      </View>

      <Text style={styles.price}>${product.price}{id}</Text>

      <Button onPress={addTocart} text='Add to cart'/>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 10
  },
  image: {
    width: '100%',
    aspectRatio: 1
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop:'auto'
  },
  sizes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10
  },
  size: {
    backgroundColor: 'gainsboro',
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  sizeText: {
    fontSize: 20,
    fontWeight: '500'
  }
})


export default ProductsDetailScreen;