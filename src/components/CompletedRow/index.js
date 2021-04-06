import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity,} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomModal from "../Modal";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch } from "react-redux";

import { styles } from './styles'
import { editTaskCompletionStatus, removeTask } from "../../redux/action";

const CompletedRow = ({task}) => {
  const dispatch = useDispatch()
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const deleteItem = () => {
    setModalIsVisible(false)
    dispatch(removeTask(task.id))
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
          onPress={(isChecked: task.isCompleted) => {
            dispatch(editTaskCompletionStatus(task.id, !task.isCompleted))
            }}
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
