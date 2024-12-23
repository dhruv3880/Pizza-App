import {View} from 'react-native';

import products from '@assets/data/products';
import ProductListItem from '@/components/ProductListItem';

//using same layout for different data by calling the custom component and props to change the data in them
export default function MenuScreen() {
  return (
    <View>
      <ProductListItem product={products[0]} />
      <ProductListItem product={products[1]} />
    </View>
  );
}
