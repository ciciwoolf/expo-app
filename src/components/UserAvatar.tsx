import { StyleSheet, Text, View, Image } from 'react-native';
import { s } from 'react-native-size-matters';

const UserAvatar = () => {
  return (
    <View>
      <Image
        source={{
          uri: 'https://res.cloudinary.com/dmezw1zxr/image/upload/v1743284540/cici_fangyb.jpg',
        }}
        style={styles.avatar}
      />
    </View>
  );
};

export default UserAvatar;

const styles = StyleSheet.create({
  avatar: {
    height: s(32),
    width: s(32),
    borderRadius: s(16),
  },
});
