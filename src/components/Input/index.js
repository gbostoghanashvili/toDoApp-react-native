import React, {useState} from 'react';
import { View, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";

import {addTask} from "../../redux/action";
import {styles } from "./styles";
import {generateID} from '../../functions';
import { userIdSelector } from "../../redux/selector";

const Input = () => {
  const [text, setText] = useState('');
  const onChange = textValue => setText(textValue);
  const dispatch = useDispatch()
  const userId = useSelector(userIdSelector)
  const appendTask = () => {
    const task = {
      title: text,
      isCompleted: false,
      id: generateID(),
    };
    setText('');
    if (text.trim()) {
      addToDataBase(task)
    } else {
      Alert.alert('Error', 'Empty Input', 'Ok');
    }
  };
  const addToDataBase = (task) => {
    const {title, isCompleted} = task
    axios.post(`http://0.0.0.0:4000/tasks/${userId}`,{title, isCompleted, userId})
      .then((res) => {
        task._id = res.data._id
        dispatch(addTask(task))})
      .catch(err =>  Alert.alert('Error', `${err.message}`, 'Ok'))
  }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add task.."
        onChangeText={onChange}
        value={text}
        maxLength={35}
      />
      <TouchableOpacity style={styles.button} onPress={() => appendTask()}>
        <Text>
          <Icon name="plus-circle" size={30} color={'green'} />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Input;
