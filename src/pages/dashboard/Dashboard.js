import React,{useContext, useEffect,useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { appStorage  } from '../../utils';
import {AuthContext} from '@context/context';
import { Card } from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';


 
const Dashboard = () => {

    const {getAuth} = useContext(AuthContext);
    const [data,setData] = useState("")
    

    useEffect(() => {
      getData();
      alert(data)
      }, []);
  
      const  getData = () => {
        appStorage.getUser("key").then((res) => {
          console.log(JSON.parse(res)['userEmail'])
          let res_data = JSON.parse(res);
          setData(res_data['userEmail'])
         
          }, (err) => {
            console.log(err);
        });;
      };
    
  return (
  <View style={{backgroundColor:"#2196F399",height:hp(100)}}>

    <View style={[styles.card, styles.shadowProp]}>
        <View>
          <Text style={styles.title}>
            User Name
          </Text>
        </View>
        <Text style={styles.email}>
          Email :{data}
        </Text>
      </View>
  </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 13,
    textAlign:'center'
  },
  email: {
    fontSize: 13,
    fontWeight: '300',
    marginBottom: 13,
    textAlign:'center'
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 45,
    paddingHorizontal: 25,
    width: '80%',
    marginVertical: hp(20),
    marginHorizontal:wp(10),
    alignContent:'center',
    
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -5, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
});

export default Dashboard