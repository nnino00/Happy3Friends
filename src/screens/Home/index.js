import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import {
  View,
  Text,
  Icon,
} from 'native-base';
import MapView, {Marker} from 'react-native-maps';

import Rankings from '../Rankings';
import profileLogo from '../../assets/images/user.png';
import bar from '../../assets/images/bar.png';
import character from '../../assets/images/character.png';
import community from '../../assets/images/community.png';

const styles = StyleSheet.create({
  container: {
    position:'absolute',
    top:0,
    left:0,
    right:0,
    bottom:0,
    alignItems: 'center',
    justifyContent: 'flex-end',
    display: 'flex',
  },
  map: {
    position:'absolute',
    top:0,
    left:0,
    right:0,
    bottom:0,
  },
});

class Home extends Component {
  render() {
    const mapStyle=[{"elementType": "geometry", "stylers": [{"color": "#242f3e"}]},{"elementType": "labels.text.fill","stylers": [{"color": "#746855"}]},{"elementType": "labels.text.stroke","stylers": [{"color": "#242f3e"}]},{"featureType": "administrative.locality","elementType": "labels.text.fill","stylers": [{"color": "#d59563"}]},{"featureType": "poi","elementType": "labels.text.fill","stylers": [{"color": "#d59563"}]},{"featureType": "poi.park","elementType": "geometry","stylers": [{"color": "#263c3f"}]},{"featureType": "poi.park","elementType": "labels.text.fill","stylers": [{"color": "#6b9a76"}]},{"featureType": "road","elementType": "geometry","stylers": [{"color": "#38414e"}]},{"featureType": "road","elementType": "geometry.stroke","stylers": [{"color": "#212a37"}]},{"featureType": "road","elementType": "labels.text.fill","stylers": [{"color": "#9ca5b3"}]},{"featureType": "road.highway","elementType": "geometry","stylers": [{"color": "#746855"}]},{"featureType": "road.highway","elementType": "geometry.stroke","stylers": [{"color": "#1f2835"}]},{"featureType": "road.highway","elementType": "labels.text.fill","stylers": [{"color": "#f3d19c"}]},{"featureType": "transit","elementType": "geometry","stylers": [{"color": "#2f3948"}]},{"featureType": "transit.station","elementType": "labels.text.fill","stylers": [{"color": "#d59563"}]},{"featureType": "water","elementType": "geometry","stylers": [{"color": "#17263c"}]},{"featureType": "water","elementType": "labels.text.fill","stylers": [{"color": "#515c6d"}]},{"featureType": "water","elementType": "labels.text.stroke","stylers": [{"color": "#17263c"}]}];

    const {
      geolocationStore: { latitude, longitude, listQuestions, setQuestion },
      navigation: { navigate },
      quizStore: { setCorrectAnswer },
      uiStore: { rankingVisible, openRankings, closeRankings },
    } = this.props

    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.00001,
            longitudeDelta: 0.0009,
          }}
          region={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.00001,
            longitudeDelta: 0.0009,
          }}
          ref={r => this.map = r}
          provider="google"
          customMapStyle={mapStyle}
          showsBuildings={false}
          showsCompass={true}
          showsTraffic={false}
          showsIndoors={false}
          zoomEnabled={false}
          scrollEnabled={false}
          // showsUserLocation={true}
          followUserLocation={true}
        >
          {listQuestions.map((question, index) => (
            <Marker
              key={index.toString()}
              coordinate={{
                latitude: question.latitude,
                longitude: question.longitude,
              }}
              image={require('../../assets/images/ss.png')}
              title={'Question'}
              description={question.question}
              onPress={() => {
                setQuestion(question, navigate('QuestionPage'))
                setCorrectAnswer(question.answer)
              }}
            />
          ))}
        </MapView>
        <TouchableOpacity
          style={{
            zIndex: 99,
            position: 'absolute',
            top: 10,
            right: 10,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => navigate('Profile')}
        >
          <Image
            resizeMode="contain"
            style={{
              width: 70,
              height: 70,
            }}
            source={profileLogo}
          />
          <Text
            style={{
              fontSize: 15,
              color: 'white',
              fontWeight: 'bold',
            }}
          >
            Immortal
          </Text>
          <Image
            resizeMode="contain"
            style={{
              width: 70,
              height: 10,
            }}
            source={bar}
          />
          <Text
            style={{
              fontSize: 15,
              color: 'white',
              fontWeight: 'bold',
            }}
          >
            Lvl 99
          </Text>
        </TouchableOpacity>
        <View
          style={{
            position: 'absolute',
            top: Dimensions.get('screen').height / 2 - 50,
            width: 40,
            height: 40,
            borderRadius: 20,
          }}
          source={character}
        >
        <Image
            resizeMode="contain"
            style={{
              width: 50,
              height: 50,
            }}
            source={character}
          />
        </View>
        <TouchableOpacity
          style={{
            position: 'absolute',
            left: 5,
            bottom: 5,
          }}
          onPress={openRankings}
        >
          <Icon
            type="Entypo"
            name="trophy"
            style={{
              fontSize: 60,
              color: '#F9A80C',
              zIndex: 99,
            }}
          />
          <View
            style={{
              backgroundColor: '#4CCEEB',
              padding: 10,
              borderRadius: 5,
              height: 20,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                fontSize: 12,
                color: 'white',
                fontWeight: 'bold',
              }}
            >
              Rankings
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            position: 'absolute',
            left: 90,
            bottom: 150,
          }}
        >
          <Image
            resizeMode="contain"
            style={{
              width: 40,
              height: 40,
            }}
            source={community}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            position: 'absolute',
            right: 90,
            bottom: 200,
          }}
        >
          <Image
            resizeMode="contain"
            style={{
              width: 40,
              height: 40,
            }}
            source={community}
          />
        </TouchableOpacity>
        {/* <TouchableOpacity
          style={{
            width: 120,
            height: 40,
            backgroundColor:'#4CCEEB',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            bottom: 10,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: 'white',
              fontWeight: 'bold',
            }}
          >
            Start
          </Text>
        </TouchableOpacity> */}
        {rankingVisible && <Rankings visible closeRankings={closeRankings} />}
      </View>
    );
  }
}

export default inject('geolocationStore', 'quizStore', 'uiStore')(observer(Home))
