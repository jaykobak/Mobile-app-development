import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const Login = () => {
  return (
    <View style={{ backgroundColor: '#080c0b', flex: 1 }}>
      <View style={{ marginTop: 50, marginLeft: 15, marginBottom: 40 }}>
        <Text style={{ color: 'white', fontSize: 25 }}>Create Account</Text>
        <Text style={{ color: 'grey' }}>Let's Create Account Together</Text>
      </View>

      {/* User name */}
      <TextInput style={{ width: 350, height: 50, color: 'white', backgroundColor: '#1e322e', fontSize: 16, borderRadius: 10, paddingLeft: 20, marginHorizontal: 20 }} placeholder='Enter Your Name' placeholderTextColor={'gray'}/>

      {/* User name */}
      <TextInput style={{ width: 350, height: 50, color: 'white', backgroundColor: '#1e322e', fontSize: 16, borderRadius: 10, paddingLeft: 20, marginHorizontal: 20, marginVertical: 50 }} placeholder='Enter Your Name' placeholderTextColor={'gray'}/>

      {/* User password */}
      <TextInput style={{ width: 350, height: 50, color: 'white', backgroundColor: '#1e322e', fontSize: 16, borderRadius: 10, paddingLeft: 20, marginHorizontal: 20 }} placeholder='Enter your password' placeholderTextColor={'gray'}/>

      {/* Sign up button */}
      <TouchableOpacity style={{ backgroundColor: '#00665b', height: 60, justifyContent: 'center', alignItems: 'center', marginTop: 50, borderRadius: 10, marginHorizontal: 20 }}>
        <Text style={{ color: 'white', fontSize: 18 }}>Sign up</Text>
      </TouchableOpacity>

      <Text style={{ color: 'white', alignSelf: 'center' , paddingVertical: 30}}>Or</Text>

      {/* Create account with google button */}
      <TouchableOpacity style={{ backgroundColor: '#1e322e', height: 60, justifyContent: 'center', alignItems: 'center', borderRadius: 10, marginHorizontal: 20 }}>
        <Text style={{ color: 'white', fontSize: 17 }}>Sign up with google</Text>
      </TouchableOpacity>

    </View>
  )
}

export default Login

const styles = StyleSheet.create({})