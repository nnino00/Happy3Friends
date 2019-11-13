import React from 'react';
import { inject, observer } from 'mobx-react';
import {
  Image, ScrollView, Modal, TouchableOpacity
} from 'react-native';
import { View, Item, Text, Input } from 'native-base';
import studyGoLogo from '../../assets/images/studygo.png';

const Rankings = ({ closeRankings }) => (
  <Modal
    visible
    transparent
  >
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
      }}
    >
      <View
        style={{
          backgroundColor: 'white',
          height: '70%',
          width: '80%',
          borderRadius: 10,
          padding: 10,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
       <Text style={{ fontWeight: 'bold', alignSelf: 'center', color: 'black', fontSize: 18 }}>World Rankings</Text>
        <View
          style={{
            marginTop: 10,
            backgroundColor: '#4CCEEB',
            height: '70%',
            width: '90%',
          }}
        >
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 10,
            }}
          >
            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>1. Cardo Dalisay</Text>
            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Level 99</Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 10,
            }}
          >
            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>2. Billy Jeans</Text>
            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Level 79</Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 10,
            }}
          >
            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>3. Juan Dela Cruz</Text>
            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Level 50</Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 10,
            }}
          >
            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>4. Bill Gates</Text>
            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Level 10</Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            width: 70,
            height: 40,
            backgroundColor: '#4CCEEB',
            borderRadius: 10,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
            zIndex: 99,
          }}
          onPress={closeRankings}
        >
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>
)

export default Rankings;
