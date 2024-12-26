import { FlatList, Text } from "react-native"
import orders from "@assets/data/orders";
import OrderListItem from "@/components/orderListItem";

export default function OrderSection() {
    return (
    <FlatList 
    data={orders}
    renderItem={({item}) => <OrderListItem order={item}/>}
    contentContainerStyle={{gap:10,padding:10}}
    />
);
}