import React from 'react'
import { inject, observer } from 'mobx-react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  selected: {
    backgroundColor: '#4dad4a',
    padding: 20,
    borderRadius: 12,
    width: 150,
    margin: 10,
  },
  notSelected: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    width: 150,
    margin: 10,
  },
  textSelected: {
    color: 'white',
    fontWeight: 'bold',
  },
  textNotSelected: {
    color: 'black',
  }
})

class Choice extends React.Component {
  state = {
    selected: false
  }

  render() {
    const { 
      choice,
      quizStore: { setAnswer },
    } = this.props

    return(
      <TouchableOpacity 
        style={this.state.selected ? styles.selected: styles.notSelected} 
        onPress={() => {
          this.setState({ selected: !this.state.selected }, () => setAnswer(choice)) 
        }}
      >
        <Text style={this.state.selected ? styles.textSelected : styles.textNotSelected}>{choice}</Text>
      </TouchableOpacity>
    )
  }
}

export default inject('quizStore')(observer(Choice))