import React from 'react';
import {View, Text,} from 'react-native';

import {styles} from "./styles";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>To do List</Text>
    </View>
  );
};

export default Header;
