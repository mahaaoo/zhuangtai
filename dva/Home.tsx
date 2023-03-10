import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

const Home: React.FC<any> = (props) => {
  const {navigation} = props;
  const { account, password } = useSelector((state: any) => state.login);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View>
        <Text>账号:{account}</Text>
        <Text>密码:{password}</Text>
      </View>
      <TouchableOpacity onPress={() => {
        dispatch({
          type: 'login/logout',
        });
        navigation.pop();
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
