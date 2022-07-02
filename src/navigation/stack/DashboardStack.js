import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DashboardScreen from '../../pages/dashboard/Dashboard';
const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
     </Stack.Navigator>
  )
}

export default AuthStack