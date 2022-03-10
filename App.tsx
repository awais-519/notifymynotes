import React from 'react';
// import GoogleIcon from '@mui/icons-material/Google';
import Button from 'react-native-paper';

import {Alert, StyleSheet, View} from 'react-native';

import LoginScreen from './src/pages/login';

const App = () => {
  const alertMe = () => {
    Alert.alert('BHAK BHSDK');
  };

  return (
    <View style={styles.root}>
      <LoginScreen />
      {/* <TouchableOpacity onPress={alertMe} >
          <Text>Touch me to get an alert.</Text>
        </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {},
});

export default App;
