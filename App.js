/**
 * dvajs
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DvaIndex from './dva/dvaIndex';
import Index from './index';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="stateList"
          component={Index}
          options={{ headerTitle: 'stateList' }}
        />
        <Stack.Screen
          name="dva"
          component={DvaIndex}
          options={{ headerTitle: 'Dva' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
