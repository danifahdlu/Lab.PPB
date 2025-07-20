import { View, Image, StyleSheet } from 'react-native';

const ProfileBox = () => {
  return (
    <View style={styles.profileContainer}>
        <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/128/3641/3641488.png' }}
            style={styles.profileImage}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    backgroundColor: '#b3e0ff',
    borderRadius: 8,
    padding: 10,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#fff',
  },
  profileContainer: {
    backgroundColor: '#b3e0ff',
    padding: 10,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderWidth: 2,
    borderColor: '#fff',
  },
});

export default ProfileBox;