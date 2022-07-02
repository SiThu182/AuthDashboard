import React,{useState} from 'react'
import { View, Text, TextInput, TouchableOpacity,Modal,Pressable } from 'react-native'

import styles from './styles'

const Email = props => {
  

const {title,btnText,footerText,isLogin} = props
const [modalVisible, setModalVisible] = useState(false);

 
  return (
    <View style={styles.container}>
        <View  style={styles.language}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TouchableOpacity 
                onPress={() => changeLanguage('en')} 
                style={[styles.button,styles.buttonOpen,{alignItems:'center',marginVertical:10,width:100}]}>
                <Text>Eng</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                onPress={() => changeLanguage('mm')} 
                style={[styles.button,styles.buttonOpen,{width:100,alignItems:'center'}]}>
                <Text>Myanmar</Text>
              </TouchableOpacity>
              <Pressable
                style={[styles.button, styles.buttonClose, {marginVertical:10}]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.textStyle}>Language</Text>
        </Pressable>
      </View>

      <View style={styles.formContainer}>
      
        <Text style={styles.title}>{title}</Text>
        
        <View style={styles.inputContainer}>
        
          <TextInput 
              placeholder={props.emailPlaceHolder}
              style={[styles.input, {marginTop: 20}]}
              onChangeText={props.onChangeEmail}
          />

        </View>
        <TouchableOpacity 
          style={styles.buttonContainer} 
          activeOpacity={0.8} 
          onPress={props.action}>
          <Text style={styles.buttonText}>{props.btnText}</Text>
        </TouchableOpacity>
        <View style={styles.accContainer}>
          {props.isLogin ? (
            <Text>{props.noAccountText}</Text>
          ) : (
            <Text>{props.accountText}</Text>
          )}

          <TouchableOpacity onPress={props.footerAction}>
            <Text style={styles.footerText}> {props.footerText}</Text>
          </TouchableOpacity>
          </View>
      </View>
    </View>
  )
}


export default Email