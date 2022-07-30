import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AppColors } from '../Assets'

type Props = {
    tabs : any[],
    onChange : (tab: any) => void,
    selected ?: string,
}


 
const TabsComp = ({tabs,onChange,selected}: Props) => {
  return (
    <View style={styles.container} >
        {tabs.map((tab,index) => {
            let isSelected = selected ? tab?.value === selected  : index === 0;
            return (
                <TouchableOpacity style={[styles.tab, isSelected && styles.selected]} onPress={() => onChange(tab?.value)}>
                    <Text style={[styles.tabTxt, isSelected && styles.selectedTxt]}>{tab.name}</Text>
                </TouchableOpacity>
            )}
    )}
    </View>
  )
}

export default TabsComp

const styles = StyleSheet.create({
    container : {
        margin: 10,
        height : 40,
        backgroundColor: AppColors.primary,
        flexDirection: 'row',
        padding :3,
        borderRadius: 8,
        marginHorizontal:15
    },
    tab : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
        borderRadius : 5,
        // borderWidth : 1,
    },
    tabTxt : {
        fontSize : 14,
        color : '#fff',
    },
    selected : {
        backgroundColor : AppColors.white,
    },
    selectedTxt : {
        color : AppColors.primary,
    }

})