import React from "react";
import { Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Stack, Link } from "expo-router";
import Colors from "@/constants/Colors"; // Assuming you have this for styling

const MenuStack = () => {
  return (
    <Stack
      screenOptions={{
        headerRight: () => (
          <Link href="/cart" asChild>
            <Pressable>
            {({ pressed }) => (
              <FontAwesome
                name="shopping-cart" // Cart icon
                size={25}
                color={Colors.light.tint}
                style={{
                    marginRight: 15,
                    opacity: pressed ? 0.5 : 1,
                }}
              />)}
            </Pressable>
          </Link>
        ),
      }}
    >
      <Stack.Screen name="index" options={{ title: "Menu" }} />
    </Stack>
  );
};

export default MenuStack;
