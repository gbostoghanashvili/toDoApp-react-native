import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Alert,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const windowWidth = Dimensions.get('window').width;

import {generateID} from '../../functions';

const Input = ({appendTask}) => {
  const [text, setText] = useState('');
  const onChange = textValue => setText(textValue);
  const addTask = () => {
    const task = {
      title: text,
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
        maxLength={40}
      />
      <TouchableOpacity style={styles.button} onPress={() => addTask()}>
        <Text>
          <Icon name="plus-circle" size={30} color={'green'} />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    height: 50,
    width: windowWidth - 80,
    fontSize: 22,
    paddingLeft: 10,
    marginLeft: 20,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 5,
  },
  button: {
    paddingRight: 20,
    marginTop: 10,
  },
});

export default Input;
