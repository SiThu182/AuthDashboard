import React,{useState} from 'react'
import { View, Text, TextInput, TouchableOpacity, ToastAndroid } from 'react-native'
import CheckBox from '@react-native-community/checkbox';


import styles from './styles'
 
const Password = props => {
  

const {title,btnText,footerText,isLogin} = props
const [toggleCheckBox, setToggleCheckBox] = useState(false)

if(toggleCheckBox){
  ToastAndroid.showWithGravity(
    "Remember Password",
    ToastAndroid.LONG,
    ToastAndroid.BOTTOM,
    25,
    50
  );
}


 
  return (
    <View style={styles.container}>
    <View style={styles.formContainer}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.inputContainer}>
  
        
        <TextInput 
            placeholder='Password.....'
            style={[styles.input, {marginTop: 20}]}
            secureTextEntry
             onChangeText={props.onChangePass}

    
        />
        {!isLogin &&
          <TextInput 
              placeholder='Confirm Password.....'
              style={[styles.input, {marginTop: 20}]}
              secureTextEntry
              onChangeText={props.onChangeCPwd}

      
          />
        }

      </View>
      <TouchableOpacity style={styles.buttonContainer} activeOpacity={0.8} 
                        onPress={props.action}>
        <Text style={styles.buttonText}>{props.btnText}</Text>
      </TouchableOpacity>
      <View style={styles.accContainer}>
        { props.isLogin && 
          (
            
            <Text>
              <CheckBox
                style={{padding:30}}
                value={toggleCheckBox}
                onValueChange={(newValue) => setToggleCheckBox(newValue)}
              />
                Remember Password</Text>
           
          )
        }
       
        </View>
    </View>
    </View>
  )
}

export default Password