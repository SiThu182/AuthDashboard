import {StyleSheet, Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';


const styles = StyleSheet.create({
    productListContainer:{
        flex:1
    },
    infoContainer:{
      flexDirection:'row',
      justifyContent:'space-between',
      padding:hp(1),
      backgroundColor:'#ddd111'
    },
    info:{
      flexDirection:'row',
      margin:10
  
    },
    title: {
      fontSize: 18,
      fontWeight: '600',
      marginBottom: 13,
      textAlign:'center'
    },
    logoutContainer:{
      padding:hp(1)
    },
    logoutbtn:{
      backgroundColor:'#10101066',
      padding:5,
      borderRadius:5,
  
    },
    email: {
      fontSize: 13,
      fontWeight: '300',
      marginBottom: 13,
      textAlign:'center'
    },
    card: {
      backgroundColor: '#fff',
      width: wp(45),
      height: hp(18),
      marginHorizontal: wp(2.5),
      marginVertical: hp(1),
      shadowOffset: {width: 0, height: 5},
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: hp(0.5),
      elevation: 3,
    },
    imageContainer:{
      width: wp(45),
      height: hp(10),
    },
    image:{
      width: "100%",
      height: "100%",
      resizeMode: 'contain',
    },
   
    footerContainer:{
      flexDirection:'row',
      marginHorizontal:10,
      justifyContent:'space-between',
      paddingVertical:hp(3)

    },
    textCart:{
        fontSize:13
    },
    btnCart:{
        backgroundColor: '#ff4451',
        paddingHorizontal: hp(0.8),
        paddingVertical: hp(0.2),
        borderRadius: hp(5),
        flexDirection: 'row',
        alignItems: 'center',
        shadowOffset: {width: 0, height: 5},
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: hp(1),
        elevation: 3,
    }
  });

  export default styles
  