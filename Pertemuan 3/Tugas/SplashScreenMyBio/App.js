import { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import BioClass from './components/BioClass';
import BioFunction from './components/BioFunction';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return (
      <View style={styles.container}>
        <Image
          source={require('./assets/logo.png')}
          style={styles.logo}
        />
        <Text style={{
          position: 'absolute',
          bottom: 40,
          color: '#fff',
          fontSize: 16
        }}>
          Loading...
        </Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.mainContainer}>
      <Text style={styles.header}>Contoh dengan Class Component (RCC)</Text>
      <BioClass />

      <View style={styles.divider} />

      <Text style={styles.header}>Contoh dengan Functional Component (RFC)</Text>
      <BioFunction />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#800080',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContainer: {
    padding: 10,
    backgroundColor: 'white'
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  header: {
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 20,
  },
});
