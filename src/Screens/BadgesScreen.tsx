import { Dimensions, Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { badgesList } from '../Assets'
import { Images } from '../Assets/Images'

type Props = {}

const {height,width} = Dimensions.get('window')

const BOX_DIM = width/2

const BadgesScreen = (props: Props) => {
  return (
    <ScrollView style={styles.container} >
        <View style={styles.badgesContainer}>
            {
                badgesList && badgesList.map((badge,index) => {
                    return (
                    <View  style={styles.badgeBox}>
                        <ImageBackground source={ badge?.unlocked ? Images.castle :Images.badge} style={styles.badgeImgBox}>
                            <Image source={Images.lock} style={styles.lockImg} />
                        </ImageBackground>
                        <Text style={styles.label}>{badge.label} </Text>
                    </View>
                    );
                })
            }

        </View>
    </ScrollView>
  )
}

export default BadgesScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 40,
  },
  badgesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  badgeBox: {
    width: BOX_DIM,
    // height: BOX_DIM,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical :20
  },
  badgeImgBox: {
    width: BOX_DIM / 2,
    height: BOX_DIM / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  badgeImg: {
    width: BOX_DIM / 2,
    height: BOX_DIM / 2,
  },
  label: {
    fontSize: 12,
    color: '#000',
    marginTop: 5,
  },
  lockImg: {
    width : 25,
    height : 25,
  }
});