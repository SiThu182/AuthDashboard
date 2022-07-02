import React from 'react'
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import * as Animatable from 'react-native-animatable';


const Splash = () => {
    return (
        <View style={styles.container}>
            
            <Animatable.Text animation="fadeOut" duration={2000} iterationCount={1} style={styles.title}  >Welcome</Animatable.Text>
            <Animatable.Text animation="bounce" duration={2000} iterationCount={Infinity} style={[styles.welcome,{  fontFamily:'LeagueGothicr.ttf'}]}>To My Testing App </Animatable.Text>
            <Animatable.Text animation="pulse" easing="ease-out" iterationCount="infinite" style={{ textAlign: 'center' }}>❤️</Animatable.Text>

      </View>
    )
  }
  const styles = StyleSheet.create({
    container:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#123000'
    },
    title:{
        fontSize:15,
        color:'white',
        fontFamily:'LeagueGothicr'
    },
    welcome:{
        fontSize:30,
        color:'gray'
      

    },
    btnStart:{
        justifyContent:'center',
        marginTop:10,
        paddingVertical:10,
        paddingHorizontal:40,
        backgroundColor:'#77F0DA',
        borderRadius:10,
        elevation:4
    }
  })

export default Splash;
