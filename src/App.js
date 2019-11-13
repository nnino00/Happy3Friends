/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { observable } from 'mobx';
import { Provider, observer } from 'mobx-react';
import { View, Text, Image, Dimensions, ImageBackground } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Modal from 'react-native-modal';
import backgroundImage from './assets/images/bg.png';
import appImage from './assets/images/studygo.png';

// PAGES
import Home from './screens/Home';
import SignIn from './screens/SignIn';
import QuestionPage from './screens/QuestionPage'
import Signup from './screens/Signup';
import Profile from './screens/Profile'

// STORES
import stores from './stores';

const RootStack = createStackNavigator(
  {
    Home,
    SignIn,
    QuestionPage,
    Signup,
    Profile,
  },
  {
    initialRouteName: 'SignIn',
    headerMode: 'none',
  },
);

const AppContainer = createAppContainer(RootStack);

class App extends Component {
  @observable hasOpened = true;
  componentDidMount = () => {
    console.disableYellowBox = true;
    setTimeout(() => {
      this.hasOpened = false;
      console.log('has changed');
    }, 3000);
  }

  render() {
    return (
      <Provider {...stores}>
        <AppContainer />
        <Modal
          isVisible={this.hasOpened}
          backdropTransitionInTiming={1}
          backdropColor="white"
          animationIn="fadeIn"
          animationInTiming={1}
          animationOut="fadeOut"
          animationOutTiming={500}
        >
          <View
            style={{
              position: 'absolute',
              left: -18,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <ImageBackground
              source={backgroundImage}
              style={{
                width: Dimensions.get('window').width,
                height: Dimensions.get('window').height,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                resizeMode="contain"
                style={{
                  width: '75%',
                  height: '25%',
                }}
                source={appImage}
              />
              <Text
                style={{
                  fontSize: 64,
                  color: '#00c5c8',
                }}
              >
                {'Study Go'}
              </Text>
            </ImageBackground>
          </View>
        </Modal>
      </Provider>
    );
  }
}

export default observer(App);
