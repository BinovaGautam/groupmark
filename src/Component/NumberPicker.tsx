import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Picker} from '@react-native-picker/picker'

type Props = {
  selected?: {group: number; item: number};
  onClose?: () => void;
  marks?: number;
  onSelect?: (marks: number) => void;
  ref ? :any;
};

const {height, width} = Dimensions.get('window');

const BOX_DIM = height / 2;

const NumberPicker = ({selected, onClose, marks, onSelect,ref}: Props) => {
  let {group, item} = selected || {group: 0, item: 0};
  let [point, setPoint] = React.useState(marks || 0);
  let pointsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleChange = (point: number) => {
    setPoint(point);
    onSelect && onSelect(point);
  };

  return (
    
      <Picker
        ref={ref}
        selectedValue={point}
        onValueChange={(itemValue: number, itemIndex: any) =>
          handleChange(itemValue)
        }>
       
        {
            pointsArr.map((pnt, pntId) => {
                let isSelected = pnt === point;
                return (
                    <Picker.Item label={pnt+''} value={pnt} key={pntId} />
                );

            })
        }
      </Picker>
     
    
  );
};

export default NumberPicker;

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
    // width: '100%',
    // height: BOX_DIM,
    backgroundColor: '#544d4d',
    borderRadius: 10,
    padding: 15,
    // marginHorizontal :100,
  },
  headerTxt: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
  pnt: {
    width: 100,
    justifyContent: 'center',
    marginVertical: 5,
    marginHorizontal: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
  },
  pntTxt: {
    fontSize: 20,
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  selected: {
    backgroundColor: '#5b4e8c',
    color: '#fff',
  },
  selectedTxt: {
    color: '#fff',
  },
});
