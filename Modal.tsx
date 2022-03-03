import React, {ReactNode} from 'react';
import {
  View,
  Modal,
  TouchableWithoutFeedback,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {background} from './App';

interface Props {
  children?: ReactNode;
  visible: boolean;
  onDismiss: () => void;
  type?: any;
}
const ModalBottom = ({children, type, visible, onDismiss}: Props) => {
  const handleDismiss = () => {
    onDismiss();
  };
  return (
    <Modal
      animated
      animationType={type ? type : 'fade'}
      visible={visible}
      transparent
      onDismiss={handleDismiss}
      onRequestClose={handleDismiss}>
      <TouchableWithoutFeedback onPress={onDismiss}>
        <View style={styles.onClose} />
      </TouchableWithoutFeedback>
      <View style={[styles.overlay]}>
        <View style={styles.container}>{children}</View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  overlay: {
    maxHeight: Dimensions.get('screen').height * 0.9,
    position: 'absolute',
    width: '100%',
    bottom: 0,
    backgroundColor: 'black',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 15,
  },
  container: {
    height: Dimensions.get('screen').height * 0.5,
    // justifyContent: 'center',
    backgroundColor: background,
    borderWidth: 1,
    borderTopColor: 'white',
    borderRadius: 15,
    // bordertop
  },

  onClose: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    opacity: 0.6,
    backgroundColor: 'black',
  },
});

export default ModalBottom;
