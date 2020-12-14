import React from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';

function GoalInput(props) {
  return(
    <View style={styles.inputContainer}>
        <TextInput 
        placeholder="Course Goals"
          style={styles.inputField}
          onChangeText={props.onEnteredText}
          value={props.enteredGoal}/>
        <Button title="ADD" onPress={props.onButtonPress}/>
      </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  inputField: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 2,
    padding: 10
  }
})

export default GoalInput;