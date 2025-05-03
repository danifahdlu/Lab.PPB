import React from 'react';
import { StyleSheet, View } from 'react-native';
import ProfileFunctionComponent from './ProfileFunctionComponent';
import ProfileClassComponent from './ProfileClassComponent';

const App = () => {
  return (
    <View style={styles.appContainer}>
      <ProfileFunctionComponent />
      <ProfileClassComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
});

export default App;
