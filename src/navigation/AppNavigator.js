import React,{useEffect, useState} from 'react'
import { View, Text } from 'react-native'

import AuthStack from './stack/AuthStack'
import DashboardStack from './stack/DashboardStack'

import { NavigationContainer } from '@react-navigation/native';
import {AuthContext} from '../context/context';

import SplashScreen from '../splash/Splash';

 


  
const AppNavigator = () => {

  const [splashScreen, setSplashScreen] = useState(true);
  const [lang, setLang] = useState('en');
  const [login,setLogin]= useState(true);
  const [auth, setAuth] = useState(false);

   




  
  useEffect( () => {
    setSplashScreen(true)
     setTimeout(() => {
      setSplashScreen(false);
    }, 3000);
  },[])

  const context = {
    lang,
    login,
    // email,
    auth,
    getLang : value => {
         setLang(value)
    },
    getLogin : value => {
      setLogin(value)
    },
    getAuth : value => {
      setAuth(value)
    }
    // getEmail : value => {
    //   setEmail(value)
    // }
  }

  if(splashScreen){
    return (
    <SplashScreen />
    )
  }else{
    if(auth){
      return (
        <AuthContext.Provider value={context}>
            <NavigationContainer>
              <DashboardStack />
          </NavigationContainer>
         </AuthContext.Provider>
      );

    }else{
      return (
        <AuthContext.Provider value={context}>
            <NavigationContainer>
              <AuthStack />
          </NavigationContainer>
         </AuthContext.Provider>
      );

    }
     
}
}

export default AppNavigator