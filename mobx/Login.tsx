import React from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';
import { observer } from "mobx-react";
import { useStores } from './store';

const Login: React.FC<any> = (props) => {
  const { navigation } = props;
  const { loginStore } = useStores();

  return (
    <View style={styles.container}>
      <TextInput
        value={loginStore.account}
        placeholder='账号'
        style={{ width: 300, borderWidth: 1, borderColor: 'red', marginHorizontal: 20, fontSize: 20, padding: 15 }}
        onChangeText={(value) => {
          loginStore.setAccount(value)
        }}
      />
      <TextInput
        value={loginStore.password}
        placeholder='密码'
        style={{ width: 300, borderWidth: 1, borderColor: 'red', marginTop: 10, marginHorizontal: 20, fontSize: 20, padding: 15 }}
        onChangeText={(value) => {
          loginStore.setPassword(value)
        }}
      />
      <TouchableOpacity onPress={() => {
        navigation.push('Home')
      }} style={{ width: 200, height: 50, marginTop: 10, justifyContent: 'center', alignItems: 'center' }}>
        <Text>登录</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default observer(Login);
