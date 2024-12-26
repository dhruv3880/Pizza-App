import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import Colors from '@/constants/Colors'
import Button from '@/components/Button'

const signUpScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Email</Text>
            <TextInput placeholder='abc@email.com' style={styles.input} />
            <Text style={styles.text}>Password</Text>
            <TextInput secureTextEntry placeholder='Enter password' style={styles.input} />
            <Button text="Sign Up" />
            <Link href='/(auth)/signin' style={styles.txtbtn}>Sign In</Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        justifyContent: 'center'
    },
    input: {
        backgroundColor: "white",
        borderRadius: 5,
        marginTop: 5,
        padding: 10,

    },
    text: {
        color: 'black',
        fontWeight: '500',
        fontSize: 16
    },
    txtbtn: {
        alignSelf: 'center',
        color: Colors.light.tint,
        paddingTop: 5
    }
})

export default signUpScreen