import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/new.png')} style={{ width: 200, height: 200 }}/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00665b',
    alignItems: 'center',
    justifyContent: 'center',
  }
})