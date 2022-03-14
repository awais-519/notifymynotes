import {View, Text, Image, useWindowDimensions, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../container/molecules/CustomInput';
// @ts-ignore
import NotifyMyShitLogo from '../../../assets/images/NotifyMyShitLogo.png';
import styles from './styles.scss';
import CustomButton from '../../container/molecules/CustomButton';

const LoginScreen = () => {
  //useWindowsDimenstion hook is used to get the height of the current screen our app is working on.
  const {height} = useWindowDimensions();
  const [userName, setUserName] = useState('');
  const [pass, setPass] = useState('');

  return (
    <View style={styles.container}>
      <Image
        source={NotifyMyShitLogo}
        style={[styles.mainLogo, {height: height * 0.5}]}
        resizeMode={'contain'}
      />
      <CustomInput
        placeholder={'Enter your username'}
        value={userName}
        setValue={setUserName}
      />
      <CustomInput
        placeholder={'Enter your password'}
        value={pass}
        setValue={setPass}
        secureEntry={true}
      />
      <CustomButton />
    </View>
  );
};

export default LoginScreen;
