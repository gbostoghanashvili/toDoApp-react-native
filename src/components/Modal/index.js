import React from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";

import { styles } from "./styles";

const CustomModal = ({ questionText, actionButtonText, isVisible, action, cancelAction }) => {
  return (
    <Modal
      animationType="fade"
      visible={isVisible}
      transparent={true}>
      <View style={styles.modalView}>
        <View style={styles.nestedModalView}>
          <Text style={styles.modalText}>{questionText}</Text>
          <TouchableOpacity
            onPress={action}
            style={styles.actionButton}>
            <Text>{actionButtonText}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={cancelAction}>
            <Text>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;
