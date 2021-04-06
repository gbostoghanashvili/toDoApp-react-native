import React from "react";
import { View, ScrollView} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import Header from '../../components/Header';
import CompletedRow from "../../components/CompletedRow";
import {generateID} from '../../functions';
import {styles} from "./styles";
import {tasksSelector} from "../../redux/selector";

const CompletedTasks = () => {
  const tasks = useSelector(tasksSelector);

  const rowItems = tasks.map(task => {
    if(task.isCompleted) {
      return (
        <CompletedRow
          key={generateID()}
          task={task}
        />
      )}
  });

  return (
    <ScrollView style={styles.container}>
      <Header title={'Completed Tasks'} />
      <View>{rowItems}</View>
    </ScrollView>
  );
};


export default CompletedTasks;
