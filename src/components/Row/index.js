import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomModal from "../Modal";

const windowWidth = Dimensions.get('window').width;

const Row = ({task, deleteTask, editTask}) => {
  const [editMode, setEditMode] = useState(false);
  const [text, setText] = useState('');
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const onChange = textValue => setText(textValue);
  const edit = () => {
    setEditMode(false);
    if (text.trim()) {
      editTask(task.id, text);
    } else {
      Alert.alert('Error', 'Empty Input', 'Ok');
    }
  };
  const editModeIsOn = () => {
    setText(task.title);
    setEditMode(true);
  };
  const deleteItem = () => {
    deleteTask(task.id);
    setModalIsVisible(false);
  };
  const cancelAction = (v) => {
    setModalIsVisible(v)
  }
  return (
    <View>
      {editMode ? (
        <View style={styles.container}>
          <TextInput
            value={text}
            style={styles.input}
            placeholder="Edit Task.."
            onChangeText={onChange}
            autoFocus={true}
            maxLength={40}
          />
          <View style={styles.buttons}>
            <TouchableOpacity style={styles.button} onPress={() => edit()}>
              <Text>
                <Icon name="check" size={20} color={'green'} />
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setEditMode(false)}>
              <Text>
                <Icon name="remove" size={20} color="firebrick" />
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={styles.container}>
          <Text style={styles.text}>{task.title}</Text>
          <View style={styles.buttons}>
            <TouchableOpacity
              onPress={() => editModeIsOn()}
              style={styles.button}>
              <Text>
                <Icon name="edit" size={20} color={'green'} />
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setModalIsVisible(true)}
              style={styles.button}>
              <Text>
                <Icon name="trash" size={20} color="firebrick" />
              </Text>
            </TouchableOpacity>
          </View>
          <CustomModal
           isVisible={modalIsVisible}
           cancelAction={cancelAction}
           action={deleteItem}
           questionText={'Are you sure you want to delete task?'}
           actionButtonText={'Delete'}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderColor: '#eee',
    height: 50,
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    marginLeft: 10,
  },
  text: {
    fontSize: 13,
    paddingLeft: 10,
  },
  input: {
    borderWidth: 0.5,
    borderColor: '#eee',
    borderRadius: 5,
    height: 40,
    width: windowWidth - 90,
    paddingLeft: 10,
  },
});

export default Row;
