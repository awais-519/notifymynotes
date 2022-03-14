import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {mv10} from '../../../constants/styles';
import styles from './style.scss';
// import {TextInput} from 'react-native-paper';

// try to make it generic. MAKE IT GENERIC, ALWAYS.
function CustomInput({placeholder, value, setValue, secureEntry}) {
  return (
    <View style={[styles.inputContainer, mv10]}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChange={txt => setValue(txt)}
        secureTextEntry={secureEntry}></TextInput>
    </View>
  );
}

export default CustomInput;
