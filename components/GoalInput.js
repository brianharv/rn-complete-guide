import React, { useState } from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';

function GoalInput(props) {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  }

  return(
    <View style={styles.inputContainer}>
        <TextInput 
        placeholder="Course Goals"
          style={styles.inputField}
          onChangeText={goalInputHandler}
          value={props.enteredGoal}/>
        <Button title="ADD" onPress={() => props.onAddGoal(enteredGoal)}/>
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