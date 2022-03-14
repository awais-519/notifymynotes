import {View, Text, Alert, Button, Pressable} from 'react-native';
import React from 'react';
import styles from './styles.scss';
import {style} from '@mui/system';

const CustomButton = () => {
  const test = () => {
    Alert.alert('HEY');
  };
  return (
    <Pressable onPress={test} style={styles.container}>
      <Text style={styles.text}>sign in</Text>
    </Pressable>
  );
};

export default CustomButton;
