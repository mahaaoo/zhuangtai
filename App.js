/**
 * dvajs
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Index from './index';
import DvaIndex from './dva/dvaIndex';
import MobxIndex from './mobx/mobxIndex';

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
          options={{ headerTitle: 'dva' }}
        />
        <Stack.Screen
          name="mobx"
          component={MobxIndex}
          options={{ headerTitle: 'mobx' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
