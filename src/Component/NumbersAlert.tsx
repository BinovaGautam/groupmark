import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

type Props = {
  selected?: {group: number; item: number};
  onClose?: () => void;
  marks ? :number;
  onSelect ? :(marks:number) => void;
};

const {height, width} = Dimensions.get('window');

const BOX_DIM = height / 2;

const NumbersAlert = ({selected, onClose , marks,onSelect}: Props) => {
  let {group, item} = selected || {group: 0, item: 0};
  let [point ,setPoint] = React.useState(marks || 0);
  let pointsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];
  
  const handleChange = (point:number) => {
    setPoint(point);
    onSelect && onSelect(point);
    }

  let isTeacher = group === -1
  return (
    <View style={styles.overLay}>
      <View style={styles.box}>
        <Text style={styles.headerTxt}>
          {isTeacher ? 'Teacher ' : `Group ${group + 1} -`}
          <Text style={{fontSize: 14}}>
            {isTeacher ? 'Group' : 'SubGroup'} {item + 1}
          </Text>{' '}
        </Text>
        <View style={styles.pntsContainer}>
          {pointsArr.map((pnt, pntId) => {
            let isSelected = pnt === point;
            return (
              <TouchableOpacity
                key={pntId}
                onPress={() => handleChange(pnt)}
                activeOpacity={0.8}
                style={[styles.pnt, isSelected && styles.selected]}>
                <Text style={[styles.pntTxt, isSelected && styles.selectedTxt]}>
                  {pnt}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
        <Ionicons name="close-circle-outline" size={40} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default NumbersAlert;

const styles = StyleSheet.create({
  overLay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    zIndex: 1,
  },
  box: {
    width: '100%',
    height: BOX_DIM,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    overlay : 'hidden'
    // marginHorizontal :100,
  },
  headerTxt: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  closeBtn: {
    position: 'absolute',
    top: 10,
    right: 10,
    // backgroundColor : '#fff',
    padding: 5,
    borderRadius: 50,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
    pntsContainer: {
    width: '100%',
    // alignItems: 'center',
    // flexDirection : 'row',
    // flexWrap : 'wrap',
    // justifyContent : 'space-between',
    // padding : 10
    },
    pnt: {
    justifyContent: 'center',
    height : 35,
    borderBottomWidth: 0.5,
    borderColor : '#bbb'
    },
    pntTxt: {
    fontSize : 14,
    color : '#000',
    // textAlign : 'center',
    marginLeft:20,
    fontWeight : 'bold'
    },
    selected: {
    backgroundColor : '#5b4e8c',
    color : '#fff'
    },
    selectedTxt: {
    color : '#fff'
    }

});
