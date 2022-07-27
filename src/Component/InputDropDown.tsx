import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

type Props = {
    onPress?: () => void;
    value ? :number;
    secondary ? : boolean
}

const InputDropDown = ({onPress,value,secondary}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={[styles.box,secondary && {backgroundColor: '#fff',}]}>
      <Text>{value || 0} </Text>
      <Ionicons name="caret-down" size={12} color="#0000ff88" />
    </TouchableOpacity>
  );
}

export default InputDropDown

const styles = StyleSheet.create({
  box: {
    width: 50,
    backgroundColor: '#e8eaf1',
    padding: 5,
    height: 30,
    borderRadius: 5,
    paddingHorizontal: 8,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
});