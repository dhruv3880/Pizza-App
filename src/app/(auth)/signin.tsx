import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Button from '@/components/Button'
import { Link } from 'expo-router'
import Colors from '@/constants/Colors'

const SignIn = () => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');


    return (
        <View style={styles.container}>
            <Text style={styles.text}>Email</Text>
            <TextInput value={email} onChangeText={setEmail} placeholder='abc@email.com' style={styles.input} />
            <Text style={styles.text}>Password</Text>
            <TextInput secureTextEntry value={password} onChangeText={setPassword} placeholder='Enter password' style={styles.input} />
            <Button text="Sign In" />
            <Link href ='/(auth)/signup' style={styles.txtbtn}>Don't have an Account? Sign Up</Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 10,
    },
    input: {
        backgroundColor: "white",
        borderRadius: 5,
        marginTop: 5,
        padding: 10,

    },
    text:{
        color:'grey',
        fontWeight:'500',
        fontSize:16
    },
    txtbtn:{
        alignSelf:'center',
        color: Colors.light.tint,
        paddingTop:5
    }
})

export default SignIn