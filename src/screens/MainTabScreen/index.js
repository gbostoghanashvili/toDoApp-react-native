import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";

import ActiveTasks from "../ActiveTasks";
import CompletedTasks from "../CompletedTasks";

const Tab = createMaterialBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="ActiveTasks"
      activeColor="green"
      barStyle={{ backgroundColor: "lightgrey" }}
    >
      <Tab.Screen
        name="Feed"
        component={ActiveTasks}
        options={{
          tabBarLabel: "Active",
          tabBarIcon: ({ color }) => (
            <Icon name="circle-thin" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={CompletedTasks}
        options={{
          tabBarLabel: "Completed",
          tabBarIcon: ({ color }) => (
            <Icon name="check-square-o" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Tabs;
