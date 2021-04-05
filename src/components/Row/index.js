import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
  Dimensions,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

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
          <Modal
            animationType="fade"
            visible={modalIsVisible}
            transparent={true}>
            <View style={styles.modalView}>
              <View style={styles.nestedModalView}>
                <Text style={styles.modalText}>
                  Are you sure you want to delete task?
                </Text>
                <TouchableOpacity
                  onPress={() => deleteItem()}
                  style={styles.deleteButton}>
                  <Text style={styles.deleteButtonText}>Delete</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setModalIsVisible(false)}
                  style={styles.cancelButton}>
                  <Text>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
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
  modalView: {
    alignItems: 'center',
    paddingTop: windowHeight - 200,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  nestedModalView: {
    borderWidth: 1,
    borderRadius: 15,
    paddingTop: 20,
    alignItems: 'center',
    backgroundColor: 'white',
    width: windowWidth,
    height: 400,
  },
  cancelButton: {
    alignItems: 'center',
    borderWidth: 0.5,
    padding: 10,
    width: 200,
    marginTop: 20,
    borderRadius: 5,
  },
  deleteButton: {
    alignItems: 'center',
    borderWidth: 0.1,
    padding: 10,
    width: 200,
    marginTop: 20,
    borderRadius: 5,
    backgroundColor: 'firebrick',
  },
  deleteButtonText: {
    color: 'white',
  },
  modalText: {
    fontSize: 20,
  },
});

export default Row;
