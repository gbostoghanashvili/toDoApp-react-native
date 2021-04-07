import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import { createStore } from "redux";

import Login from "./screens/Login";
import Registration from "./screens/Registration";
import reducers from "./redux/reducer";
import Tabs from "./screens/MainTabScreen";

const store = createStore(reducers);
const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            options={{ headerShown: false }}
            name="Login"
            component={Login}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Registration"
            component={Registration}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Tabs"
            component={Tabs}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
