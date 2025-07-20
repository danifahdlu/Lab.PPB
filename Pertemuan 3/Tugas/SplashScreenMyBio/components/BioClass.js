import { Component } from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';

const MyBio = {
  identity: {
    npm: 232310011,
    firstname: "Adi",
    lastname: "Saputra",
  },
  educations: [
    { id: 1, school: "SDN Ciheuluet" },
    { id: 2, school: "SMPN 1 Bogor" },
    { id: 3, school: "SMKN Pembangungan Bogor" },
  ],
  mobile_phone: 89616770354,
  email: "232310011@student.ibik.ac.id",
  gender: 'M',
  tall_body: 171,
  weight_body: 55,
};

export default class BioClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bio: MyBio,
    };
  }

  render() {
    const { bio } = this.state;
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Data Diri (Class Component)</Text>

        <Text style={styles.heading}>Identity:</Text>
        <Text>NPM: {bio.identity.npm}</Text>
        <Text>Nama Lengkap: {bio.identity.firstname} {bio.identity.lastname}</Text>

        <Text style={styles.heading}>Education:</Text>
        {bio.educations.map((edu) => (
          <Text key={edu.id}>- {edu.school}</Text>
        ))}

        <Text style={styles.heading}>Contact:</Text>
        <Text>Mobile Phone: {bio.mobile_phone}</Text>
        <Text>Email: {bio.email}</Text>

        <Text style={styles.heading}>Other Info:</Text>
        <Text>Gender: {bio.gender === 'M' ? 'Male' : 'Female'}</Text>
        <Text>Tall Body: {bio.tall_body} cm</Text>
        <Text>Weight Body: {bio.weight_body} kg</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 40,
  },
  title: {
    fontSize: 22,
    marginBottom: 15,
    fontWeight: 'bold',
  },
  heading: {
    marginTop: 15,
    fontSize: 18,
    fontWeight: '600',
  },
});
