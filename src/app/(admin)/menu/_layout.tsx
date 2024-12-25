import React from "react";
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import Colors from "@/constants/Colors"; // Assuming you have this for styling

const MenuStack = () => {
  const router = useRouter();

  const handlePress = () => {
    // console.log("Cart icon pressed");
    router.push("/");
  };

  return (
    <Stack>
      <Stack.Screen name="index" options={{
        title: "Menu", header: () => (
          <SafeAreaView
            style={{
              backgroundColor: "#fff", // Default header background color (white)
              shadowColor: "#000", // Shadow color
              shadowOffset: { width: 0, height: 2 }, // Shadow offset
              shadowOpacity: 0.8, // Shadow opacity
              shadowRadius: 4, // Shadow radius
              elevation: 4, // For Android shadow effect
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 15,
                backgroundColor: "#fff", // White background for header
                borderBottomWidth: 1, // Border bottom for visual separation
                borderBottomColor: "#ddd", // Light gray border color
              }}
            >
              {/* Menu text in the header */}
              <Text style={{ fontSize: 20, color: "#333" }}>Menu</Text>

              <TouchableOpacity onPress={handlePress} style={{ paddingRight: 10 }}>
                <FontAwesome
                  name="plus-square-o" // Cart icon
                  size={25}
                  color={Colors.light.tint}
                // Icon color
                />
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        ),
      }} />

      <Stack.Screen name="[id]" options={{
        title: "Menu", header: () => (
          <SafeAreaView
            style={{
              backgroundColor: "#fff", // Default header background color (white)
              shadowColor: "#000", // Shadow color
              shadowOffset: { width: 0, height: 2 }, // Shadow offset
              shadowOpacity: 0.8, // Shadow opacity
              shadowRadius: 4, // Shadow radius
              elevation: 4, // For Android shadow effect
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 15,
                backgroundColor: "#fff", // White background for header
                borderBottomWidth: 1, // Border bottom for visual separation
                borderBottomColor: "#ddd", // Light gray border color
              }}
            >
              {/* Menu text in the header */}
              <Text style={{ fontSize: 20, color: "#333" }}>Menu</Text>

              <TouchableOpacity onPress={handlePress} style={{ paddingRight: 10 }}>
                <FontAwesome
                  name="pencil" // Cart icon
                  size={25}
                  color={Colors.light.tint}
                // Icon color
                />
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        ),
      }} />



    </Stack>
  );
};

export default MenuStack;
