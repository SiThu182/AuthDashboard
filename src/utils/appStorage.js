import React from 'react'
import { View, Text } from 'react-native'
import RNSecureKeyStore, {ACCESSIBLE} from "react-native-secure-key-store";


export const appStorage =  {
  setUser : (key,value) => {
    
    RNSecureKeyStore.set(key, value , {accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY})
    .then((res) => {
        console.log(res);
    }, (err) => {
        console.log(err);
    })
  },
  getUser : (key) => {
    let user = RNSecureKeyStore.get(key)
    return user;
  }
}

export default appStorage