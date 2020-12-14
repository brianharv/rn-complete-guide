import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  }

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...currentGoals,
      { key: Math.random().toString(), value: enteredGoal }
    ])
  }

  return(
    <View style={styles.screen}>
      <GoalInput  onButtonPress={addGoalHandler} onEnteredText={goalInputHandler} />
      <FlatList
        data={courseGoals} 
        renderItem={itemData => (
          <GoalItem title={itemData.item.value}/>
        )}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
})