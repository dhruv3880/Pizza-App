import { View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import products from '@assets/data/products';
import { defaultPizzaImage } from '@/components/ProductListItem';
import { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { PizzaSize } from '@/types';

const Sizes: PizzaSize[] = ['S', 'M', 'L', 'XL'];

const ProductsDetailScreen = () => {
  const { id } = useLocalSearchParams();
  const [selectedSize, setSelectedSize] = useState<PizzaSize>('M');
  const router = useRouter();

  const product = products.find((p) => p.id.toString() === id);

  const handleEditPress = () => {
    router.push(`/(admin)/menu/create?id=${id}`);
  };

  if (!product) {
    return <Text style={styles.errorText}>Product not found</Text>;
  }

  return (
    <View style={styles.container}>
      {/* Custom Header */}
      <Stack.Screen
        options={{
          title: product?.name || 'Menu',
          header: () => (
            <SafeAreaView
              style={{
                backgroundColor: "#fff",
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.8,
                shadowRadius: 4,
                elevation: 4,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: 15,
                  backgroundColor: "#fff",
                  borderBottomWidth: 1,
                  borderBottomColor: "#ddd",
                }}
              >
                {/* Back Button */}
                <TouchableOpacity onPress={router.back} style={{ paddingRight: 10 }}>
                  <FontAwesome
                    name="arrow-left" // Back arrow icon
                    size={20}
                    color="black"
                  />
                </TouchableOpacity>

                {/* Product Name */}
                <Text style={{ fontSize: 20, color: "#333", flex: 1, textAlign: 'center' }}>
                  {product.name}
                </Text>

                {/* Edit Button */}
                <TouchableOpacity onPress={handleEditPress} style={{ paddingLeft: 10 }}>
                  <FontAwesome
                    name="pencil" // Edit icon
                    size={25}
                    color="#2f95dc"
                  />
                </TouchableOpacity>
              </View>
            </SafeAreaView>
          ),
        }}
      />

      {/* Product Image */}
      <Image source={{ uri: product.image || defaultPizzaImage }} style={styles.image} />

      {/* Product Name */}
      <Text style={styles.title}>{product.name}</Text>

      {/* Product Price */}
      <Text style={styles.price}>${product.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 10,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    marginBottom: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#555',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default ProductsDetailScreen;
