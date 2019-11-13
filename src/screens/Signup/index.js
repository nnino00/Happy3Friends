import React from 'react';
import { inject, observer } from 'mobx-react';
import {
  Image, ScrollView,
} from 'react-native';

import { View, Item, Text, Input } from 'native-base';
import studyGoLogo from '../../assets/images/studygo.png';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Signup = ({ 
  navigation, 
  authStore: {
    setUserParams,
    createUser,
    user,
  } }) => (
  <ScrollView>
    <View
      style={{
        marginTop: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Image
        source={studyGoLogo}
        style={{
          width: 130,
          height: 130,
        }}
      />
      <Text
        style={{
          fontSize: 25,
          color: '#4CCEEB',
          fontWeight: 'bold',
        }}
      >
        STUDY
      </Text>
      <Text
        style={{
          fontSize: 25,
          color: '#4CCEEB',
          fontWeight: 'bold',
        }}
      >
        GO
      </Text>
      <View
        style={{
          display: 'flex',
          width: '98%',
          margin: 10,
        }}
      >
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}
        >
          <View
            style={{
              borderWidth: 1,
              borderColor: 'gray',
              borderRadius: 5,
              height: 40,
              width: '48%',
              backgroundColor: '#E5E5E5'
            }}
          >
            <Input
              placeholder='Firstname'
              placeholderTextColor='gray'
              onChangeText={value => setUserParams('firstName', value)}
            />
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: 'gray',
              borderRadius: 5,
              height: 40,
              width: '48%',
              backgroundColor: '#E5E5E5'
            }}
          >
            <Input
              placeholder='Lastname'
              placeholderTextColor='gray'
              onChangeText={value => setUserParams('lastName', value)}
            />
          </View>
        </View>
        <View
          style={{
            marginTop: 10,
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 5,
            height: 40,
            width: '98%',
            backgroundColor: '#E5E5E5',
            alignSelf: 'center',
          }}
        >
          <Input
            placeholder='Email'
            placeholderTextColor='gray'
            onChangeText={value => setUserParams('email', value)}
          />
        </View>
        <View
          style={{
            marginTop: 5,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}
        >
          <View
            style={{
              borderWidth: 1,
              borderColor: 'gray',
              borderRadius: 5,
              height: 40,
              width: '48%',
              backgroundColor: '#E5E5E5'
            }}
          >
            <Input
              placeholder='Gender'
              placeholderTextColor='gray'
              onChangeText={value => setUserParams('gender', value)}
            />
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: 'gray',
              borderRadius: 5,
              height: 40,
              width: '48%',
              backgroundColor: '#E5E5E5'
            }}
          >
            <Input
              placeholder='Birthdate'
              placeholderTextColor='gray'
              onChangeText={value => setUserParams('email', value)}
            />
          </View>
        </View>
        <View
          style={{
            marginTop: 5,
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 5,
            height: 40,
            width: '98%',
            backgroundColor: '#E5E5E5',
            alignSelf: 'center',
          }}
        >
          <Input
            placeholder='Username'
            placeholderTextColor='gray'
            onChangeText={value => setUserParams('userName', value)}
          />
        </View>
        <View
          style={{
            marginTop: 5,
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 5,
            height: 40,
            width: '98%',
            backgroundColor: '#E5E5E5',
            alignSelf: 'center',
          }}
        >
          <Input
            placeholder='Password'
            placeholderTextColor='gray'
            onChangeText={value => setUserParams('password', value)}
            secureTextEntry
          />
        </View>
      </View>
      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderColor: '#56CCF2',
          borderRadius: 5,
          width: 140,
          height: 40,
          backgroundColor: '#56CCF2',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 50,
        }}
        onPress={() => {
          navigation.navigate('Home');
          createUser();
          console.log(Object.assign({}, user));
        }}
        >
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 20,
            }}
          >
            Sign up
          </Text>
        </TouchableOpacity>
    </View>
  </ScrollView>
);

export default inject('authStore')(observer(Signup));