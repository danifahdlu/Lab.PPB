import { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';

import PaperCard from './components/PaperCard';
import ProfileBox from './components/ProfileBox';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.mainContentWrapper}>
          <PaperCard />
          <ProfileBox />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
  mainContentWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});

export default App;