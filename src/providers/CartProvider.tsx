import { createContext, PropsWithChildren, useContext, useState } from "react";
import { CartItem, Product } from "@/types";
import { randomUUID } from 'expo-crypto';

type CartType = {
    items: CartItem[],
    addItem: (product: Product, size: CartItem['size']) => void;
    updateQuantity: (itemId: string, amount: -1 | 1) => void;
};

const CartContext = createContext<CartType>({
    items: [],
    addItem: () => { },
    updateQuantity: () => { },
});

const CartProvider = ({ children }: PropsWithChildren) => {
    const [items, setItems] = useState<CartItem[]>([]);

    const addItem = (product: Product, size: CartItem['size']) => {

        const exisitingItem = items.find(item => item.product == product && item.size == size);

        if(exisitingItem){
            updateQuantity(exisitingItem.id, 1 );
            return;
        }



        const newCartItem: CartItem = {
            id: randomUUID(),
            product,
            size,
            quantity: 1,
            product_id: product.id
        };

        setItems([newCartItem, ...items]);
    };

    const updateQuantity = (itemId: string, amount: -1 | 1) => {
        setItems(
            items.map((item) =>
                item.id !== itemId
                    ? item
                    : { ...item, quantity: item.quantity + amount }
            ).filter((item)=>item.quantity>0)
        );
    };

    return (
        <CartContext.Provider value={{ items: items, addItem, updateQuantity }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;

export const useCart = () => useContext(CartContext);