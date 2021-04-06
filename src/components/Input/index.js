import React, {useState} from 'react';
import { View, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {styles } from "./styles";

import {generateID} from '../../functions';

const Input = ({appendTask}) => {
  const [text, setText] = useState('');
  const onChange = textValue => setText(textValue);
  const addTask = () => {
    const task = {
      title: text,
      isCompleted: false,
      id: generateID(),
    };
    setText('');
    if (text.trim()) {
      appendTask(task);
    } else {
      Alert.alert('Error', 'Empty Input', 'Ok');
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add task.."
        onChangeText={onChange}
        value={text}
        maxLength={35}
      />
      <TouchableOpacity style={styles.button} onPress={() => addTask()}>
        <Text>
          <Icon name="plus-circle" size={30} color={'green'} />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Input;
