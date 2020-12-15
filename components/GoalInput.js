import React, { useState } from 'react';
import { View, Button, TextInput, StyleSheet, Modal } from 'react-native';

function GoalInput(props) {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  }

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  }
  
  return(
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder="Course Goals"
          style={styles.inputField}
          onChangeText={goalInputHandler}
          value={props.enteredGoal}
          />
        <View style={styles.goalButtons}>
          <View style={styles.buttons}>
            <Button title="CANCEL" color="red" onPress={props.onCancelGoal}/>
          </View>
          <View style={styles.buttons}>
            <Button title="ADD" onPress={addGoalHandler}/>
          </View>  
        </View>
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
  },
  goalButtons: {
    flexDirection: "row",
    justifyContent: 'space-between',
    width: '60%'
  },
  buttons: {
    width: '40%'
  }
})

export default GoalInput;