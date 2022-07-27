import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import GroupsScreen from './src/Screens/GroupsScreen'

type Props = {}

const App = (props: Props) => {
  return (
    <View style={{flex:1}} >
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
       <GroupsScreen />
    </View>
  )
}

export default App

const styles = StyleSheet.create({})