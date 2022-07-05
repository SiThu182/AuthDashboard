import React,{useContext, useEffect,useState} from 'react'
import { View, Text, StyleSheet,Image, TouchableOpacity } from 'react-native'
import { appStorage  } from '../../utils';
import {AuthContext} from '@context/context';

import Productlist from '../../components/product/Productlist';
 import Product from '../../data/Product';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';


 
const Dashboard = ({navigation}) => {

    const {getAuth} = useContext(AuthContext);
    const [data,setData] = useState("")
    console.log(Product)
    
    

    useEffect(() => {
      getData();
      }, []);
  
      const  getData = () => {
        appStorage.getUser("key").then((res) => {
          console.log(JSON.parse(res)['userEmail'])
          let res_data = JSON.parse(res);
          setData(res_data['userEmail'])
         
          }, (err) => {
            console.log(err);
        });
      };

      const detailAction = value => {
        navigation.navigate('ProductDetail',{data: value})
      }
    
  return (
  
  <View style={{backgroundColor:"#2196F399",flex:1,
      width: wp(100)}}>

    <View style={styles.infoContainer}>
      <View style={styles.info}>
        <Image
          style={{
            width: hp(5),
            height: hp(5),
            resizeMode: 'contain',
            marginRight:10
          }}
          source={{
            uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='
          }}
        />
        <View>
          <Text>Username</Text>
          <Text>{data}</Text>
        </View>
       
      </View>
      <View style={styles.logoutContainer}>
        <TouchableOpacity onPress={() => alert("logout")} style={styles.logoutbtn}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>

    <Productlist 
      data={Product}
      productDetail={detailAction}
      />

  </View>
  )
}

const styles = StyleSheet.create({
  infoContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    padding:hp(0.3),
    backgroundColor:'#ff4451'
  },
  info:{
    flexDirection:'row',
    margin:10

  },
 
  logoutContainer:{
    padding:hp(1.5)
  },
  logoutbtn:{
    backgroundColor:'#4499ff',
    padding:5,
    borderRadius:5,

  },
  email: {
    fontSize: 13,
    fontWeight: '300',
    marginBottom: 13,
    textAlign:'center'
  },
 
  tinyLogo: {
    width: 50,
    height: 50,
  },

});

export default Dashboard