import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

interface HomeProps {}

const Home: React.FC<HomeProps> = (props) => {
  const {} = props;

  return (
    <View style={styles.container}>
      <View>
        <Text>Home</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Home;
