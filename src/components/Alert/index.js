import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { Modal, Text, View } from 'react-native'
import { Button } from 'native-base'
import { withNavigation } from 'react-navigation'
import Colors from '../../utils/colors'

const styles = {
  modal: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    backgroundColor: Colors.modalShadow,
  },
  modalBody: {
    width: '80%',
    borderRadius: 10,
    backgroundColor: Colors.light,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    alignSelf: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
    fontFamily: 'NunitoSans-Medium',
  },
  body: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  button: {
    width: '100%',
    justifyContent: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    color: Colors.light,
    fontFamily: 'NunitoSans-Medium',
  },
}

class Alert extends Component {
  render() {
    const {
      title, body,
      quizStore: { closeAlert, alertTitle, alertMessage },
      navigation: { goBack },
    } = this.props

    return (
      <Modal
        animationType="fade"
        transparent
        visible
      >
        <View style={styles.modal}>

          <View style={styles.modalBody}>

            <View style={{ marginBottom: 10 }}>
              <Text style={styles.title}>{title || alertTitle}</Text>
            </View>

            <View style={styles.body} justifyContent="center" alignContent="center">
              <Text style={{ fontFamily: 'NunitoSans-Medium', alignSelf: 'center', textAlign: 'center' }}>{body || alertMessage}</Text>
            </View>

            <View style={{ marginTop: 10 }}>
              <Button style={styles.button} onPress={() => {closeAlert(); goBack()}}>
                <Text style={styles.buttonText}>Okay</Text>
              </Button>
            </View>

          </View>

        </View>
      </Modal>
    )
  }
}

export default inject('quizStore')(withNavigation(observer(Alert)))
