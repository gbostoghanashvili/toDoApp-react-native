import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>To do List</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: 'lightgrey',
  },
  text: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
  },
});

export default Header;
