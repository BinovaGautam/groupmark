import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { clearOptions } from '../Assets'

type Props = {}

const ClearContentScreen = (props: Props) => {
    const onDelete = () => {
        Alert.alert(
            'Delete Content',
            'Do you want to delete content of this chapter?',
            [
                { text: 'NO', style: 'cancel' },
                { text: 'YES', onPress: () => {}}
            ],
        )
    }
  return (
    <View style={styles.container} >
        {
            clearOptions && clearOptions.map((option,index) => {
                return(
                    <View key={index} style={{marginVertical:10}} >
                        <Text style={styles.sectionTitle} >{option?.title} </Text>
                        {
                            option?.options && option?.options.map((opt,id) => 
                                <TouchableOpacity key={id} activeOpacity={0.9} style={[styles.itemRow, ]} >
                                    <Text style={[styles.ItemTxt]}>  {opt.label}</Text>
                                    <Ionicons onPress={onDelete} name={"md-trash-outline"} size={20} color={"#000"} />
                                </TouchableOpacity>
                            )}
                    </View>
                )
            })
        }
    </View>
  )
}

export default ClearContentScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 40,
  },
  itemRow: {
    flexDirection: 'row',
    margin: 10,
    height: 45,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
  },
  ItemTxt: {
    fontSize: 15,
    color: '#000',
    flex: 1,
  },
  sectionTitle: {
    color: '#767272',
    fontSize: 16,
    letterSpacing: 1,
    // fontWeight: 'bold',
    marginLeft: 10,
  },
});