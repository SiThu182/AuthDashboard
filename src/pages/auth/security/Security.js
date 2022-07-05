import React, {useState,useContext} from 'react'
import { View, Text,ToastAndroid } from 'react-native'
import { AuthContext } from '@context/context';
import {useLocal} from '../../../hook'

import Password from '../../../components/login/Password';
import { appStorage } from '../../../utils';


const Register = ({navigation,route}) => {
 
  const [password, setPassword] = useState('');
  const [cpassword, setCPassword] = useState('');
  const local = useLocal();

  

const {login,getAuth} = useContext(AuthContext);
   
const footerHandler = () => {
  if (login) {
    navigation.navigate('Login');
  } else {
    navigation.goBack();
    
    
  }

}

const actionhandler = () => {
  let token = "10293847456";
  let data = {
    userEmail: route.params.name,
    userPwd: password,
  };
  if(cpassword){
    if(password === cpassword){
      appStorage.setUser("key",JSON.stringify(data))
      appStorage.setUser("token",token)

      getAuth(true)
    }else{
      // ToastAndroid.showWithGravityAndOffset(
      //   "wrong password",
      //   ToastAndroid.LONG,
      //   ToastAndroid.BOTTOM,
      //   25,
      //   50
      // );
      alert("wrong password")
    }

  }else{
     
    appStorage.getUser("key").then(res => {
      let res_obj = JSON.parse(res)
      if(data.userEmail == res_obj.userEmail && data.userPwd == res_obj.userPwd){
        getAuth(true)
      }else{
         ToastAndroid.showWithGravityAndOffset(
        "Email and Password is not match",
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50
      );
         // ToastAndroid("Email and Password is not match")
      }
     })

  }  

  
}
  return (
    <Password
      title={"Security"}
      btnText={ login ? local.login : local.register }
      footerText={login ? local.login : local.register}
      footerAction={footerHandler}
      isLogin={login}
      action={actionhandler}
      onChangePass={val => setPassword(val)}
      onChangeCPwd={val => setCPassword(val)}


    />
  )
}

export default Register