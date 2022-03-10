import {View, Text, Image, useWindowDimensions, StyleSheet} from 'react-native';
import React from 'react';
import CustomInput from '../../container/molecules/CustomInput';
// @ts-ignore
import NotifyMyShitLogo from '../../../assets/images/NotifyMyShitLogo.png';
import styles from './styles.scss';

const LoginScreen = () => {
  //useWindowsDimenstion hook is used to get the height of the current screen our app is working on.
  const {height} = useWindowDimensions();

  return (
    <View style={styles.container}>
      <Image
        source={NotifyMyShitLogo}
        style={[styles.mainLogo, {height: height * 0.5}]}
        resizeMode={'contain'}
      />
      <CustomInput />
    </View>
  );
};

export default LoginScreen;
