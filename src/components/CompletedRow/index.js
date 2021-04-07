import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomModal from "../Modal";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch } from "react-redux";

import { styles } from './styles'
import { editTaskCompletionStatus, removeTask } from "../../redux/action";
import axios from "axios";

const CompletedRow = ({task}) => {
  const dispatch = useDispatch()
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const deleteItem = () => {
    axios.post(`http://0.0.0.0:4000/tasks/remove/${task._id}`)
    .then(() => {
      dispatch(removeTask(task._id))
      setModalIsVisible(false);
    })
    .catch((err) => Alert.alert('Error', `${err.message}`, 'Ok'))
  };
  const changeCompletionStatus = () => {
    axios.post(`http://0.0.0.0:4000/tasks/check/${task._id}`, {isCompleted: !task.isCompleted})
    .then(() => dispatch(editTaskCompletionStatus(task._id, !task.isCompleted))
    )
    .catch(err => Alert.alert('Error', `${err.message}`, 'Ok'))
  }
  return (
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
        <TouchableOpacity
          onPress={() => setModalIsVisible(true)}
          style={styles.button}>
          <Text>
            <Icon name="trash" size={20} color="firebrick" />
          </Text>
        </TouchableOpacity>
           <CustomModal
             isVisible={modalIsVisible}
             cancelAction={() => setModalIsVisible(false)}
             action={deleteItem}
             questionText={'Are you sure you want to delete task?'}
             actionButtonText={'Delete'}
            />
    </View>
  );
};

export default CompletedRow;
