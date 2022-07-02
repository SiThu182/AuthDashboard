import React, {useContext, useState} from 'react'
import { Alert, View, Text, TouchableOpacity, StyleSheet,Modal,Pressable } from 'react-native'

import Email from '@components/login/Email';
import { AuthContext } from '@context/context';
import {useLocal} from '../../../hook'

const Login = ({navigation}) => {



const {getLang,login,getLogin,getEmail} = useContext(AuthContext);
const local = useLocal();

const [email, setEmail] = useState('');
 
  
const showRegister = () => {
   getLogin(false)
}

const showLogin = () => {
   getLogin(true)
}

const changeLanguage = (value) => {
  getLang(value)
  setModalVisible(false)

  
}

const nextPage = () => {
  navigation.navigate("Security",{name:email})
}

 
  return (
    <View>
      
      { login &&

        <Email
          title={local.login}
          btnText={local.next}
          footerText={local.login}
          isLogin={login}
          footerAction={showRegister}
          action={nextPage}
          noAccountText={local.noAccount}
          accountText={local.already}
          emailPlaceHolder={local.emailPlaceholder}
          onChangeEmail={val =>{ setEmail(val)}}


    
        />
    }
    { !login &&

        <Email
          title={local.register}
          btnText={local.next}
          footerText={"Login"}
          footerAction={showLogin}
          action={nextPage}
          onChangeEmail={val => setEmail(val)}
          noAccountText={local.noAccount}
          accountText={local.already}
          emailPlaceHolder={local.emailPlaceholder}


        />
    }
    </View>
  )
}

 
 

export default Login