import React, {useState} from 'react';
import { View, ScrollView, Text, TouchableOpacity } from "react-native";

import Header from '../../components/Header';
import Input from '../../components/Input';
import Row from '../../components/Row';
import {generateID} from '../../functions';
import CustomModal from "../../components/Modal";
import {styles} from "./styles";

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
        cancelAction={() => setModalIsVisible(false)}
        action={signOut}
        questionText={'Are you sure you want to Sign out?'}
        actionButtonText={'Sign Out'}
      />
    </ScrollView>
  );
};


export default Main;
