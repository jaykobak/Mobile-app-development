import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

const Track = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'transparent'}/>
      <View>
        {/* Map image */}
        <Image source={require('../assets/images/snazzy-image.png')} style={{ width: 420, height: 450, opacity: 0.5, marginBottom: 50 }}/>
        {/* Arrow icon */}
        <Image source={require('../assets/images/back-arrow1 (1).png')} style={ styles.back_arrow }/>
        <Text style={ styles.text }>Track Order</Text>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 35, alignItems: 'center', paddingBottom: 50 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          {/* User image */}
          <Image style={{ width: 50, height: 50 }} source={require('../assets/images/circle-person.png')}/>
          {/* User details */}
          <View style={{ flexDirection: 'column', paddingLeft: 15 }}>
            <Text style={ styles.user_title_text }>Jacob</Text>
            <Text style={ styles.user_subtitle_text }>Drive - AD 4856 AUE</Text>
          </View>
        </View>

        {/* Phone icon */}
        <Image source={require('../assets/images/phone.png')} style={{ width: 45, height: 45 }}/>
      </View>

      {/* User details */}
      {/* Clock icon */}
      <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 50 }}>
        <View style={ styles.icon }>
          <Image source={require('../assets/images/clock.png')} style={{ width: 25, height: 25 }}/>
        </View>
        <View style={{ flexDirection: 'column', paddingLeft: 15 }}>
          <Text style={[ styles.user_title_text, { fontSize: 17, paddingBottom: 2 } ]}>Germany Cuisine</Text>
          <Text style={ styles.user_subtitle_text }>Housing State | 16: 40</Text>
        </View>
      </View>

      {/* Location icon */}
      <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 40, paddingLeft: 50 }}>
        <View style={ styles.icon }>
          <Image source={require('../assets/images/location.png')} style={{ width: 25, height: 25 }}/>
        </View>
        <View style={{ flexDirection: 'column', paddingLeft: 15 }}>
          <Text style={[ styles.user_title_text, { fontSize: 17, paddingBottom: 2 } ]}>East 58th Street, BDT</Text>
          <Text style={ styles.user_subtitle_text }>House | 18: 40</Text>
        </View>
      </View>

      {/* Order now button */}
      <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#00665b', marginHorizontal: 30, height: 50, borderRadius: 10, marginTop: 50 }}>
        <Text style={{ textAlign: 'center', color: 'white', fontSize: 18 }}>Order Received</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Track

const styles = StyleSheet.create({
  container: {
    color: 'white',
    flex: 1,
  },

  text: {
    position: 'absolute',
    fontSize: 18,
    color: 'black',
    alignSelf: 'center',
    marginTop: 50,
  },

  back_arrow: {
    position: 'absolute', 
    marginTop: 55,
    marginHorizontal: 20,
    width: 20,
    height: 20,
  },

  icon: {
    width: 50, 
    height: 50, 
    borderWidth: 20, 
    borderColor: '#ececf4', 
    borderRadius: 40, 
    justifyContent: 'center', 
    alignItems: 'center'
  },

  user_title_text: {
    fontSize: 20,
    paddingBottom: 4,
    fontWeight: 500,
    color: 'black',
  },

  user_subtitle_text: {
    fontSize: 15,
    color: '#bcbcbd',
    fontWeight: 400,
  },

  order_now_button: {

  }
})