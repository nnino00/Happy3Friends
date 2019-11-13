import React from 'react';
import { observer, inject } from 'mobx-react';
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import studyGoLogo from '../../assets/images/studygo.png';

const SignIn = ({
  navigation,
  authStore: {
    setUserName,
    setPassword,
    signIn,
  }
}) => (
    <View
      style={{
        marginTop: 10,
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
          width: '98%',
          margin: 20,
        }}
      >
        <TextInput
          style={{ marginTop: 5, borderRadius: 10, height: 40, borderColor: 'gray', borderWidth: 1 }}
          placeholder={'Username'}
          onChangeText={value => setUserName(value)}
        />

        <TextInput
          style={{ marginTop: 5, borderRadius: 10, height: 40, borderColor: 'gray', borderWidth: 1 }}
          placeholder={'password'}
          secureTextEntry
          onChangeText={value => setPassword(value)}
        />
      </View>
      <View>
        <TouchableOpacity
          onPress={async () => {
            const response = await signIn();
            if(response) {
              navigation.navigate('Home');
            }
          }}
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
        >
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 20,
            }}
          >
            {'Login'}
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          style={{
            marginTop: 10,
          }}
          onPress={() => navigation.navigate('Signup')}
        >
          <Text>
            <Text >
              {'No Account yet? Register Here'}
            </Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

export default inject('authStore')(observer(SignIn));
