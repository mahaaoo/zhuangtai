import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './Home';
import Login from './Login';
const Stack = createNativeStackNavigator();

const Index: React.FC<any> = (props) => {
  const {} = props;

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ header: () => null }}
      />
    </Stack.Navigator>
  );
};

export default Index;
