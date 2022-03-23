import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native'
import { useState } from 'react'

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../firebase';


import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

function LoginScreen() {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSingUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log('registered as ', user.email);
                // ...
            })
            .catch((error) => {
                switch (error.code) {
                    case 'auth/email-already-in-use':
                        Alert.alert('Email already used');
                        break;
                    case 'auth/invalid-email':
                        Alert.alert('Email invalid');
                        break;
                    case 'auth/weak-password':
                        Alert.alert('Password weak choose another one');
                        break;

                }
                // ..
            });




    };

    const handelLogIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log('logged as ', user.email);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    };
    return (
        <KeyboardAvoidingView
            style={styles.container}
            bahavior='padding'>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder='Email'
                    style={styles.input}
                    value={email}
                    onChangeText={text => setEmail(text)} />

                <TextInput
                    placeholder='Password'
                    style={styles.input}
                    secureTextEntry
                    value={password}
                    onChangeText={text => setPassword(text)} />
            </View>
            <View style={styles.buttonCotainer}>
                <TouchableOpacity
                    onPress={handelLogIn}
                    style={styles.button}>
                    <Text style={styles.buttonText}> Login </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={handleSingUp}
                    style={[styles.button, styles.buttonOutline]}>
                    <Text style={styles.buttonOutlineText}> Register </Text>
                </TouchableOpacity>


            </View>
        </KeyboardAvoidingView>


    );
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center', 

    },
    inputContainer:{
        width: '80%', 

    },
    input:{
        backgroundColor: 'white', 
        paddingHorizontal: 15, 
        paddingVertical: 10, 
        borderRadius: 10, 
        marginTop: 5, 
    }, 
    buttonCotainer:{
        width: '60%', 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginTop: 40, 

    }, 
    button:{
        backgroundColor: '#283618', 
        width: '100%', 
        padding: 15,
        borderRadius: 10, 
        alignItems: 'center'

    }, 
    buttonText:{
        color: 'white', 
        fontWeight: '700', 
        fontSize: 16
    }, 
    buttonOutline:{
        backgroundColor: 'white', 
        marginTop: 5,
        borderColor: '#283618', 
        borderWidth: 2, 
    }, 
    buttonOutlineText:{
        color: '#283618', 
        fontWeight: '700', 
        fontSize: 16
    }


})