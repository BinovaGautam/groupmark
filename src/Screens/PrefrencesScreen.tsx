import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useTabs } from '../Hooks'
import { AppColors, buttonsList } from '../Assets'
import Ionicons from 'react-native-vector-icons/Ionicons'
import ClearContentScreen from './ClearContentScreen'

type Props = {}


const PrefrencesScreen = (props: Props) => {
    const {tab,handleTabChange} = useTabs(buttonsList[0]?.value)

    
  return (
    <View style={styles.container} >
        {   buttonsList.map((button,index) => {
                let isSelected = button?.value === tab;
                return (
                    <TouchableOpacity activeOpacity={0.9} style={[styles.itemRow, isSelected && styles.selectedRow]} onPress={() => handleTabChange(button.value)}>
                        <Ionicons name={button.icon} size={20} color={isSelected ? "#fff" : "#000"} />
                        <Text style={[styles.ItemTxt,isSelected && styles.selectedTxt]}>  {button.label}</Text>
                    </TouchableOpacity>
                )
            })
        }
     
    </View>
  )
}

export default PrefrencesScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
  },
  itemRow: {
    flexDirection: 'row',
    margin: 10,
    height :45,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
  },
  selectedRow :{
    backgroundColor: AppColors.primary,
  },
  ItemTxt: {
    color: '#000',
    flex: 1,
  },
  selectedTxt : {
    color: '#fff',
  }
});