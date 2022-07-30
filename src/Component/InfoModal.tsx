import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View, Image} from 'react-native';
import { infoStrings } from '../Assets';
import { Images } from '../Assets/Images';

const InfoModal = ({visible,onClose}:any) => {
//   const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
      >
        <Pressable onPress={onClose } style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image source={Images.star} style={styles.starImg} />

            {
                infoStrings && infoStrings.map((info,index) => {
                    return (
                      <Text key={index} style={styles.textStyle}> {info}</Text>
                    )
                })
            }
            
          </View>
        </Pressable>
      </Modal>
    
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    // marginTop: 22,
  },
  modalView: {
    margin: 20,
    width : '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'black',
    textAlign: 'center',
    marginTop: 10,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  starImg :{
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20
  }
});

export default InfoModal;
