import { View, StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { useEffect, useState } from 'react'
import { Slot } from 'expo-router'
const ScreensLayout = () => {
  return (
    <View style={styles.container}>
      <Slot />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    width: wp(100),
    height: hp(100),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  }
})
export default ScreensLayout
