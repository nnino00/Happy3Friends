import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { Dimensions, TouchableOpacity, StyleSheet } from 'react-native'
import { View, Text, Icon } from 'native-base'

import Choice from './choice'
import Alert from '../../components/Alert'

const styles = StyleSheet.create({
  option: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
  },
  choice: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    width: 150,
    margin: 10,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
  }
})

class QuestionPage extends Component {
  state = {
    tackle: false,
  }

  render() {
    const {
      geolocationStore: { currentQuestion },
      navigation: { goBack },
      quizStore: { alertVisible, evaluateAnswer },
    } = this.props
    return (
      <View style={{ height: Dimensions.get('screen').height, width: '100%', backgroundColor: "#4CCEEB", display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {alertVisible && <Alert />}
        <View style={{ backgroundColor: 'white', width: '80%', height: 300, borderRadius: 5, marginTop: 60, padding: 25 }}>
          <View style={{ backgroundColor: '#F9A80C', borderRadius: 12, width: 100, padding: 10, alignSelf: 'center', marginBottom: 20 }}>
            <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>Study</Text>
          </View>

          <Text style={{ fontWeight: 'bold', fontSize: 28, textAlign: 'center' }}>{currentQuestion.question}</Text>

          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', marginRight: 10, marginTop: 10 }}>
            <Text style={{ fontWeight: 'bold' }}>{`1pt `}</Text>
            <Icon type="Entypo" name="star" style={{ color: '#F9A80C', fontSize: 36 }} />
          </View>
        </View>

        {!this.state.tackle ? <View style={{ marginTop: 70 }}>
          <TouchableOpacity style={styles.option} onPress={() => this.setState({ tackle: true })}>
            <Text style={styles.text}>
              Tackle
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.option} onPress={() => goBack()}>
            <Text style={styles.text}>
              Skip
            </Text>
          </TouchableOpacity>
        </View> : <View>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', marginTop: 50 }}>
            {currentQuestion.choices.map((choice) => (
              <Choice choice={choice} />
            ))}
          </View>

          <View style={{ marginTop: 50, display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <TouchableOpacity style={{ backgroundColor: 'white', borderRadius: 12, width: 200, padding: 10 }} onPress={evaluateAnswer}>
              <Text style={styles.text}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>}
        
      </View>
    )
  }
}

export default inject('geolocationStore', 'quizStore')(observer(QuestionPage))
