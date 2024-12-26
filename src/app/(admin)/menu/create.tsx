import { View, Text, StyleSheet, TextInput, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import Button from '@/components/Button'
import { defaultPizzaImage } from '@/components/ProductListItem';
import Colors from '@/constants/Colors';
import * as ImagePicker from 'expo-image-picker'
import { Stack, useLocalSearchParams } from 'expo-router';

const CreateProductScreen = () => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [errors, setErrors] = useState('');
    const [image, setImage] = useState('');
    const { id } = useLocalSearchParams();
    const isUpdating = !!id;

    const resetFields = () => {
        setName('');
        setPrice('');
        setImage('');
    };

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images', 'videos', 'livePhotos'],
            allowsEditing: true,
            aspect: [3, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri)
        }
    };

    const validateInput = () => {
        setErrors('');
        if (!name) {
            setErrors('Name is required');
            return false;
        }
        if (!price) {
            setErrors('Price is required');
            return false;
        }
        if (!image) {
            setErrors('Image is required');
            return false;
        }
        if (isNaN(parseFloat(price))) {
            setErrors('Price is not a number');
            return false;
        }
        return true;
    };

    const onSubmit = () => {
        if (isUpdating) {
            onUpdate();
        } else {
            onCreate();
        }
    };

    const onCreate = () => {
        if (!validateInput()) {
            return;
        }

        console.warn("creating product", name, price)

        resetFields();
    };

    const onUpdate = () => {
        if (!validateInput()) {
            return;
        }

        console.warn("creating product", name, price)

        resetFields();
    };

    const onDelete = () => {
        console.warn("Delete")
    };

    const confirmDelete = () => {
        Alert.alert("Confirm", "Are you sure \nYou want to delete?", [{
            text: 'Cancel',
        },
        {
            text: 'Delete',
            style: 'destructive',
            onPress: onDelete,
        },
        ]);
    };


    return (
        <View style={styles.container}>
            <Stack.Screen options={{ title: isUpdating ? "Update Product" : "Create Product" }} />


            <Image source={{ uri: image || defaultPizzaImage }} style={styles.image} />
            <Text onPress={pickImage} style={styles.imgBtn}>Select Image</Text>
            <Text style={styles.label}>Name</Text>
            <TextInput placeholder="Name"
                value={name}
                onChangeText={setName}
                style={styles.input} />

            <Text style={styles.label}>Price ($)</Text>
            <TextInput placeholder="$9.99"
                value={price}
                onChangeText={setPrice}
                style={styles.input} keyboardType='numeric' />

            <Text style={{ color: 'red' }}>{errors}</Text>
            <Button onPress={onSubmit} text={isUpdating ? 'Update' : 'Create'} />
            {isUpdating && <Text onPress={confirmDelete} style={styles.imgBtn}>Delete</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 10
    },
    input: {
        backgroundColor: "white",
        borderRadius: 5,
        marginTop: 5,
        marginBottom: 5,
        padding: 10,
    },
    label: {
        color: 'grey',
        fontSize: 16
    },
    image: {
        width: '50%',
        aspectRatio: 1,
        alignSelf: 'center'

    },
    imgBtn: {
        alignSelf: 'center',
        fontWeight: 'bold',
        color: Colors.light.tint,
        marginVertical: 10,
    }
})


export default CreateProductScreen