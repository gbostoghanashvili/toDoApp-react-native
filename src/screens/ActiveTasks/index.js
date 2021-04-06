import React, {useState} from 'react';
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { useSelector } from 'react-redux';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Row from '../../components/Row';
import {generateID} from '../../functions';
import CustomModal from "../../components/Modal";
import {styles} from "./styles";
import {tasksSelector} from "../../redux/selector";

const ActiveTasks = ({navigation}) => {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const tasks = useSelector(tasksSelector);

  const rowItems = tasks.map(task => {
    if(!task.isCompleted) {
      return (
        <Row
          key={generateID()}
          task={task}
        />
      )}
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
      <Header title={'Active Tasks'} />
      <Input />
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

export default ActiveTasks;
