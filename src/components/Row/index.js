import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, Alert } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch } from "react-redux";

import { styles } from "./styles";
import { editTaskTitle, editTaskCompletionStatus, removeTask } from "../../redux/action";
import axios from "axios";
import CustomModal from "../Modal";

const Row = ({ task }) => {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [text, setText] = useState("");
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const onChange = textValue => setText(textValue);
  const edit = () => {
    setEditMode(false);
    if (text.trim()) {
      updateTaskTitle();
    } else {
      Alert.alert("Error", "Empty Input", "Ok");
    }
  };
  const editModeIsOn = () => {
    setText(task.title);
    setEditMode(true);
  };
  const deleteItem = () => {
    axios.post(`http://0.0.0.0:4000/tasks/remove/${task._id}`).then(() => {
      dispatch(removeTask(task._id));
      setModalIsVisible(false);
    }).catch((err) => Alert.alert("Error", `${err.message}`, "Ok"));
  };
  const updateTaskTitle = () => {
    axios.post(`http://0.0.0.0:4000/tasks/edit/${task._id}`, { title: text }).then(() => {
      dispatch(editTaskTitle(task._id, text));
    }).catch(err => Alert.alert("Error", `${err.message}`, "Ok"));
  };
  const changeCompletionStatus = () => {
    axios.post(`http://0.0.0.0:4000/tasks/check/${task._id}`, { isCompleted: !task.isCompleted }).then(() => dispatch(editTaskCompletionStatus(task._id, !task.isCompleted)),
    ).catch(err => Alert.alert("Error", `${err.message}`, "Ok"));
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
            maxLength={35}
          />
          <View style={styles.nestedView}>
            <TouchableOpacity style={styles.button} onPress={() => edit()}>
              <Text>
                <Icon name="check" size={20} color={"green"} />
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
          <View style={styles.nestedView}>
            <BouncyCheckbox
              size={20}
              fillColor="green"
              unfillColor="white"
              iconStyle={styles.checkbox}
              isChecked={task.isCompleted}
              onPress={() => changeCompletionStatus()}
            />
            <Text style={styles.text}>{task.title}</Text>
          </View>
          <View style={styles.nestedView}>
            <TouchableOpacity
              onPress={() => editModeIsOn()}
              style={styles.button}>
              <Text>
                <Icon name="edit" size={20} color={"green"} />
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
            cancelAction={() => setModalIsVisible(false)}
            action={deleteItem}
            questionText={"Are you sure you want to delete task?"}
            actionButtonText={"Delete"}
          />
        </View>
      )}
    </View>
  );
};

export default Row;
