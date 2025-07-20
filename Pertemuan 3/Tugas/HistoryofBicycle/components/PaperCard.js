import { View, Text, StyleSheet } from 'react-native';

const PaperCard = () => {
  return (
    <View style={styles.paperCard}>
        <Text style={styles.paperTitle}>History of Bicycle</Text>
        <Text style={styles.paperContent}>
            A bicycle, also called a pedal cycle, bike, push-bike or cycle, is a
            human-powered or motor-powered assisted, pedal-driven, single-track
            vehicle, having two wheels attached to a frame, one behind the other. A
            bicycle rider is called a cyclist, or bicyclist.
        </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  paperCard: {
    width: '60%',
    borderWidth: 1,
    elevation: 5,
  },
  paperTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    color: '#fff',
    backgroundColor: '#cb1111'
  },
  paperContent: {
    fontSize: 14,
    lineHeight: 20,
    borderWidth: 1,
    padding: 10
  },
});

export default PaperCard;