import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  StyleSheet,
  Keyboard,
} from 'react-native';
import { KeyboardAvoiderParamList } from '../types/component.types';

const KeyboardAvoider: React.FC<KeyboardAvoiderParamList> = ({ children }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>{children}</TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default KeyboardAvoider;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});
