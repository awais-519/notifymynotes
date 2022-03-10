import React from 'react';
import {Text, TextInput, View} from 'react-native';
import styles from './style.scss';

const CustomInput = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.inputTxt} placeholder="Input your user email">
        hawais39@gmail.com
      </TextInput>
    </View>
  );
};

export default CustomInput;
