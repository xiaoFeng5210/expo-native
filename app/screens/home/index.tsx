import { View, Text, Button } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { useEffect, useState } from 'react'
import {router} from 'expo-router'

const Home = () => {

  useEffect(() => {
    console.log('初始化')
  }, [])
  return (
    <View>
      <Text>Home</Text>
      <Button title='去往tab' onPress={() => router.push('/(tabs)')}></Button>
    </View>
  )
}
export default Home
