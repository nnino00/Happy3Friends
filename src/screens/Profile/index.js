import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { Dimensions, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { View, Text, Thumbnail } from 'native-base'

const styles = StyleSheet.create({
  row: {
    display: 'flex', 
    flexDirection: 'row', 
    justifyContent: 'center',
  }
})

class Profile extends Component {
  render() {
    const {
      navigation: { goBack },
      authStore,
    } = this.props
    return(
      <View style={{ display: 'flex', justifyContent: 'center', height: Dimensions.get('screen').height, backgroundColor: 'white' }}>
        <TouchableOpacity style={{ backgroundColor: '#4CCEEB', padding: 10, borderRadius: 12, width: 100, marginTop: 20, marginLeft: 20 }} onPress={() => goBack()}>
          <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>Back</Text>
        </TouchableOpacity>

        <View style={[styles.row, { marginTop: 30 }]}>
          <Thumbnail large source={require('../../assets/images/user.png')} />
        </View>

        <View style={[styles.row]}>
          <Text style={{color: 'black', fontWeight: 'bold', fontSize: 20}}>Immortal</Text>
        </View>
        <Image resizeMode="contain" style={{ alignSelf: 'center', width: 100, height: 40}} source={require('../../assets/images/bar.png')} />
        <Text style={{ paddingBottom: 5, alignSelf: 'center', color: 'black', fontWeight: 'bold', fontSize: 20}}>Level 99</Text>
        <View style={styles.row}>
          <View style={{ display: 'flex',  padding: 10, width: '80%', backgroundColor: '#4CCEEB', borderRadius: 7, height: 280 }}>
            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 25 }}>{`${authStore.user.firstName} ${authStore.user.lastName}`}</Text>
            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20 }}>{authStore.user.userName}</Text>
            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20 }}>World Rank: 1</Text>
            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20 }}>Questions Taken: 5</Text>
            <View
              style={{
                display: 'flex',
                alignSelf: 'center',
                marginTop: 10,
              }}
            >
              <Text style={{ alignSelf: 'center', color: 'black', fontWeight: 'bold', fontSize: 20 }}>Stats</Text>
              <Text style={{ alignSelf: 'flex-start', color: 'black', fontWeight: 'bold', fontSize: 15 }}>Science: 35%</Text>
              <Text style={{ alignSelf: 'flex-start', color: 'black', fontWeight: 'bold', fontSize: 15 }}>Mathematics: 99%</Text>
              <Text style={{ alignSelf: 'flex-start', color: 'black', fontWeight: 'bold', fontSize: 15 }}>English: 50%</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default inject('authStore')(observer(Profile))