import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Modal,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CustomModal = ({questionText, actionButtonText, isVisible, action, cancelAction}) => {

  return(

      <Modal
        animationType="fade"
        visible={isVisible}
        transparent={true}>
        <View style={styles.modalView}>
          <View style={styles.nestedModalView}>
        <Text style={styles.modalText} >{questionText}</Text>
        <TouchableOpacity
          onPress={action}
          style={styles.actionButton}>
          <Text>{actionButtonText}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => cancelAction(false)}>
          <Text>Cancel</Text>
        </TouchableOpacity>
          </View>
        </View>
      </Modal>
  )
}

const styles = StyleSheet.create({
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
  actionButton: {
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

export default CustomModal;
