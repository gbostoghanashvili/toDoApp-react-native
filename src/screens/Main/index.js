import React, {useState} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Row from '../../components/Row';
import {generateID} from '../../functions';

const Main = () => {
  const [tasks, setTasks] = useState([]);
  const deleteTask = id => {
    const filteredTasks = tasks.filter(task => task.id !== id);
    setTasks(filteredTasks);
  };
  const appendTask = task => {
    setTasks([task, ...tasks]);
  };
  const editTask = (id, newTitle) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? {...task, title: newTitle} : task,
    );
    setTasks(updatedTasks);
  };
  const rowItems = tasks.map(task => {
    return (
      <Row
        key={generateID()}
        task={task}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    );
  });
  return (
    <ScrollView style={styles.container}>
      <Header />
      <Input appendTask={appendTask} />
      <View>{rowItems}</View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
  },
});

export default Main;
