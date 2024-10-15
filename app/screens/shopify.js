import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Shopify = () => {
  return (
    <View style={styles.container}>
        <Image source={require('../../assets/images/Shopify-Simbolo2.png')} style={styles.shopify_logo} />
        <View style={{ paddingTop: 250, marginBottom: -300 }}>
            <TouchableOpacity style={styles.login_button}><Text style={{color: 'white'}}>Log in</Text></TouchableOpacity>
            <Text style={{color: 'white', alignSelf: 'center', marginTop: 30}}>New to Shopify? <Text style={{color: '#90ee90'}}>Sign up</Text></Text>
        </View>
    </View>
  )
}

export default Shopify

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#006400',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    shopify_logo: {
        width: 300,
        height: 150,
    },

    login_button: {
        backgroundColor: 'green',

        width: 300,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    }
})