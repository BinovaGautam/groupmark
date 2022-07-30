import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {AppColors} from '../Assets'
import { Images } from '../Assets/Images'

const {height,width} = Dimensions.get('window')

let COMP_DIM = (width-120)/3

type Props = {}

const LeaderBoardComp = (props: Props) => {
    let stars = [0,0,0]
  return (
    <View style={styles.container} >
      {stars.map((star,index) => {
        let isCenter = index === 1;
        return (
            <View style={[styles.starComp, isCenter && styles.center]} >
                <Image source={Images.user} style={styles.mainImg} />
                <View style={styles.starContainer} >
                    <Image source={Images.star} style={styles.starImg} />
                    <Text>{star}</Text>
                </View>
            </View>
        )
      })}
    </View>
  )
}

export default LeaderBoardComp

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.white,
    borderRadius: 8,
    margin:10,
    padding:10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop :30
  },
    starComp: {
        width : COMP_DIM,
        height : COMP_DIM,
        backgroundColor: AppColors.primary,
        borderRadius: COMP_DIM/2,
        alignItems: 'center',
        marginVertical : 50
    },
    center: {
        marginTop:5,
        marginBottom:95
    },
    mainImg: {
        flex:1,
        resizeMode: 'contain',
    },
    starContainer: {
        position: 'absolute',
        bottom: -(COMP_DIM  -45),
        right: COMP_DIM/2 - 20,
        width : 40,
        height : 60,
        backgroundColor: AppColors.white,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection : 'row'
    },
    starImg: {
        width : 20,
        height : 20,
        resizeMode: 'contain',
        marginRight : 5
    }
});