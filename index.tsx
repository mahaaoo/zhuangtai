import React from 'react';
import { View, StyleSheet, Text, useWindowDimensions, TouchableOpacity } from 'react-native';

const Index: React.FC<any> = (props) => {
  const { navigation } = props;
  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {
        navigation.push('dva');
      }} style={{ backgroundColor: 'white', width, padding: 20 }}>
        <Text>dvajs</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        navigation.push('mobx');
      }} style={{ backgroundColor: 'white', width, padding: 20 }}>
        <Text>mobx</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Index;
