import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useStores } from './store';

const Home: React.FC<any> = (props) => {
  const {navigation} = props;
  const { loginStore } = useStores();

  return (
    <View style={styles.container}>
      <View>
        <Text>账号:{loginStore.account}</Text>
        <Text>密码:{loginStore.password}</Text>
      </View>
      <TouchableOpacity onPress={() => {
        navigation.pop();
        loginStore.deleteAccount();
      }} style={{ width: 200, height: 50, marginTop: 10, justifyContent: 'center', alignItems: 'center' }}>
        <Text>退出</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Home;
