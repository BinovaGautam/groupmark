import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LeaderBoardComp, TabsComp } from '../Component'
import { TabsList } from '../Assets'
import { useTabs } from '../Hooks'
import { Images } from '../Assets/Images'
import Ionicons from 'react-native-vector-icons/Ionicons'

type Props = {}

const LeaderBoardScreen = (props: Props) => {
  const {tab,handleTabChange} = useTabs(TabsList[0]?.value)
  return (
    <View style={styles.container}>
      <View style={styles.tabConainer}>
        <TabsComp tabs={TabsList} onChange={handleTabChange} selected={tab} />
      </View>
      {tab === 'level' && (
        <View style={[styles.itemRow]}>
          <Text style={styles.countryTxt}>Level 1</Text>
          <Ionicons name="chevron-forward" size={20} color="#aaa" />
        </View>
      )}

      {tab === 'country' && (
        <View style={[styles.itemRow, {backgroundColor: 'transparent'}]}>
          <Image source={Images.country} style={styles.itemImg} />
          <Text style={styles.countryTxt}>India</Text>
        </View>
      )}
      <LeaderBoardComp />
    </View>
  );
}

export default LeaderBoardScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  tabConainer: {
    paddingTop: 20,
    padding: 10,
    backgroundColor: '#fff',
  },
  itemRow: {
    flexDirection: 'row',
    margin: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
  },
  countryTxt: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
    flex:1
  },
  itemImg: {
    width: 20,
    height: 20,
    marginRight: 10,
  }
});