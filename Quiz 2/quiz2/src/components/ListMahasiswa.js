import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const ListMahasiswa = () => {
  const [students, setStudents] = useState([
    { id: '1', name: 'Adi Saputra', npm: '232310011' },
    { id: '2', name: 'Adi', npm: '87654311' },
    { id: '3', name: 'Saputra', npm: '11223313' },
    { id: '4', name: 'Putra', npm: '44332211' },
    { id: '5', name: 'Saput', npm: '55667788' },
  ]);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.npm}>NPM: {item.npm}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
    <View style={styles.centerWrapper}>
      <FlatList
        data={students}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center'
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  npm: {
    fontSize: 14,
    color: '#666',
  },
});

export default ListMahasiswa;