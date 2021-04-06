import React, {useState} from 'react';
import { StyleSheet, View, ScrollView, Text, TouchableOpacity } from "react-native";
import Header from '../../components/Header';
import Input from '../../components/Input';
import Row from '../../components/Row';
import {generateID} from '../../functions';
import CustomModal from "../../components/Modal";

const Main = ({navigation}) => {
  const [tasks, setTasks] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

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
  const signOut = () => {
    setModalIsVisible(false)
    navigation.navigate('Login')
  }
  const cancelAction = (v) => {
    setModalIsVisible(v)
  }
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.logoutButton} onPress={() => setModalIsVisible(true)}>
        <Text style={styles.buttonText}> Log Out</Text>
      </TouchableOpacity>
      <Header />
      <Input appendTask={appendTask} />
      <View>{rowItems}</View>
      <CustomModal
        isVisible={modalIsVisible}
        cancelAction={cancelAction}
        action={signOut}
        questionText={'Are you sure you want to Sign out?'}
        actionButtonText={'Sign Out'}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
  },
  logoutButton: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
  }
});

export default Main;
