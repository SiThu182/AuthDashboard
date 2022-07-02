import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../../pages/auth/login/Login';
import SecurityScreen from '../../pages/auth/security/Security';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Security" component={SecurityScreen} />
    </Stack.Navigator>
  )
}

export default AuthStack