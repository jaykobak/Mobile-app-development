import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={styles.container}>
        <View style={{ flexDirection: 'row' }}>
            <Text style={{ color: '#606770', fontSize: 14, fontWeight: '600' }}>English (US) </Text>
            {/* Arrow down icon */}
            <Image source={require('../../assets/images/arrow-down.png')} style={{ width: 15, height: 15, }} />
        </View>
        {/* Facebook logo icon */}
        <Image source={require('../../assets/images/facebook_logo.png')} style={styles.facebook_image}/>

        {/* Main character image */}
        <Image source={require('../../assets/images/example.jpg')} style={styles.character_image}/>

        <Text style={{ fontSize: 22, fontWeight: 'bold', paddingTop: 10 }}>Akintola Jacob</Text>
        <View></View>
        <Text style={{ fontSize: 12, color: '#606770', fontWeight: 600 }}>9+ notifications</Text>
        <Text style={{ fontSize: 15, paddingHorizontal: 15, paddingVertical: 20 }}>By proceeding, you agree to <Text style={{color: '#1877F2'}}>MTN's Terms</Text> which includes letting Facebook request and receive your phone number. <Text style={{ color: '#1877F2' }}>Change Settings</Text></Text>

        {/* Login button */}
        <TouchableOpacity style={styles.login}><Text style={{ color: 'white' }}>Log in</Text></TouchableOpacity>
        <Text style={styles.login_text}>Log into another account</Text>
        {/* Create new account button */}
        <TouchableOpacity style={styles.create_account}><Text style={{ color: '#1877F2' }}>Create a new account</Text></TouchableOpacity>

        {/* Meta logo */}
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={require('../../assets/images/meta.png')} style={[styles.meta, {width: 20, height: 20}]}/>
            <Text style={styles.meta}>Meta</Text>
        </View>
        
    </View>
  )
}

export default App

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eef7fe',
        flex: 1,
        alignItems: 'center',
        paddingTop: 50
    },

    facebook_image: {
        width: 45,
        height: 45,
        marginTop: 12,
        marginBottom: 30,
        borderWidth: 1,
        borderRadius: 25,
        borderColor: '#333333',
    },

    character_image: {
        height: 180,
        width: 180,
        borderWidth: 6,
        borderRadius: 200,
        borderColor: 'white',
    },

    login: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1877F2',
        width: 300,
        height: 40,
        borderRadius: 200,
    },

    login_text: {
        marginTop: 20,
        fontSize: 15,
        fontWeight: '500',
    },

    create_account: {
        marginTop: 8,
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
        height: 40,
        borderColor: '#1877F2',
        borderWidth: 2,
        borderRadius: 200,
    },

    meta: {
        marginTop: 20,
        color: '#333333',
        fontWeight: 700,
    },
})