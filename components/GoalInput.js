import React, { useState } from 'react';
import { View, Button, TextInput, StyleSheet, Modal } from 'react-native';

function GoalInput(props) {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  }

  return(
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder="Course Goals"
          style={styles.inputField}
          onChangeText={goalInputHandler}
          value={props.enteredGoal}/>
        <Button title="ADD" onPress={() => props.onAddGoal(enteredGoal)}/>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputField: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 2,
    padding: 10,
    marginBottom: 10
  }
})

export default GoalInput;