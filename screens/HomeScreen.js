import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/native';
import { signOut } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage'; 

const HomeScreen = () => {
    const navigation = useNavigation()

    const handelSingOut = () => {
        signOut(auth).then(() => {
                navigation.replace("Login")
          }).catch((error) => {
            // An error happened.
          });
    }
  return (
    <View style={styles.container}>
      <Text>Email: { auth.currentUser?.email } </Text>
      <TouchableOpacity 
      style={styles.button}
      onPress ={handelSingOut}> 
          <Text style={styles.buttonText}> Log out </Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
    },
    button:{
        backgroundColor: '#283618', 
        width: '60%', 
        padding: 15,
        borderRadius: 10, 
        alignItems: 'center', 
        marginTop: 10, 

    }, 
    buttonText:{
        color: 'white', 
        fontWeight: '700', 
        fontSize: 16
    }, 

})