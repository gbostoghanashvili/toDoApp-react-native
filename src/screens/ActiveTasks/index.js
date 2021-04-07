import React, { useEffect, useState } from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import Header from '../../components/Header';
import Input from '../../components/Input';
import Row from '../../components/Row';
import {generateID} from '../../functions';
import CustomModal from "../../components/Modal";
import {styles} from "./styles";
import { tasksSelector, userIdSelector } from "../../redux/selector";
import { setTasks } from "../../redux/action";


const ActiveTasks = ({navigation}) => {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const id = useSelector(userIdSelector)
  const tasks = useSelector(tasksSelector);
  const dispatch = useDispatch()

  useEffect(() => {
    getTasks()
  },[])

  const getTasks = () => {
    axios.get(`http://0.0.0.0:4000/tasks/${id}`)
    .then((res) => {
      dispatch(setTasks(res.data))
    })
    .catch()
  }

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
