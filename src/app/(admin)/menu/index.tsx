import {View,FlatList} from 'react-native';

import products from '@assets/data/products';
import ProductListItem from '@/components/ProductListItem';

//using same layout for different data by calling the custom component and props to change the data in them
export default function MenuScreen() {
  return (
       <FlatList 
        data={products}
        renderItem={({item})=>
          <ProductListItem product={item}/>
        }
        numColumns={2}
        contentContainerStyle={{gap:10,padding:10}}
        columnWrapperStyle={{gap:10}}
        />
  );
}
