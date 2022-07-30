import { Pressable, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import GroupsScreen from './src/Screens/GroupsScreen'
import LeaderBoardScreen from './src/Screens/LeaderBoardScreen'
import PrefrencesScreen from './src/Screens/PrefrencesScreen'
import ClearContentScreen from './src/Screens/ClearContentScreen'
import BadgesScreen from './src/Screens/BadgesScreen'
import { InfoModal } from './src/Component'
import Ionicons from 'react-native-vector-icons/Ionicons'

type Props = {}

const TOP_COLOR = '#242E3A';

const MenuItems = [
  {name : 'Home', icon : 'ios-home', screen : GroupsScreen},
  {name : 'Groups', icon : 'ios-people', screen : GroupsScreen},
  {name : 'Leaderboard', icon : 'ios-stats-chart', screen : LeaderBoardScreen},
  {name : 'Prefrences', icon : 'ios-settings', screen : PrefrencesScreen},
  {name : 'Clear Content', icon : 'ios-trash', screen : ClearContentScreen},
  {name : 'My Badges', icon : 'ios-ribbon', screen : BadgesScreen},
  
]



const App = (props: Props) => {
  const [modalVisible, setModalVisible] = React.useState(false)
  const [selectedScreen, setSelectedScreen] = React.useState<any>(MenuItems[0])

  const goBack = () => {
    setModalVisible(false)
    setSelectedScreen(MenuItems[0])
  }
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={TOP_COLOR}  barStyle="light-content" />
      <View style={styles.topBar}>
        <Ionicons onPress={goBack}  name="ios-arrow-back" size={30} color="#fff" />
        <Text style={styles.topBarText}>{selectedScreen.name || 'Home'}</Text>
      </View>
      {
        selectedScreen.name === 'Home' ?
        <View style={styles.menu}>
          {MenuItems.map((item, index) => {
            return (
              <Pressable
                key={index}
                onPress={() => {
                  setSelectedScreen({...item})
                  setModalVisible(false)
                }
                }
                style={styles.menuItem}>
                <Ionicons name={item.icon} size={20} color="#000" />
                <Text style={styles.menuItemText}> {item.name}</Text>
              </Pressable>
            )
          }
          )}
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(true)}>
            <Text style={styles.textStyle}>Show Modal</Text>
          </Pressable>
        </View>
        :
        <View style={styles.screen}>
          <selectedScreen.screen />
        </View>
      }
      <InfoModal visible={modalVisible} onClose={() => setModalVisible(false)} />
    </View>
  );
}

export default App

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  topBar: {
    backgroundColor: TOP_COLOR,
    height: 50,
    width: '100%',
    flexDirection : 'row',
    alignItems  : 'center', 
    paddingHorizontal : 10,
  },
  topBarText: {
    color: '#fff',
    fontSize: 20,
    marginLeft: 10,
  },
  menu: {
    backgroundColor: '#fff',
    height: '100%',
    width: '100%',
    padding:20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuItemText: {
    color: '#000',
    fontSize: 15,
    marginLeft: 10,
  },
  screen : {
    flex: 1,
    backgroundColor: '#f5f5f5',
  }
});