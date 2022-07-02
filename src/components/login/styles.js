import {StyleSheet, Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container : {
     
    height:hp(100),
    backgroundColor:'#2196F399'
    },
    formContainer : {
        alignItems:'center',
        justifyContent:'center',
        marginTop:hp(20),
    },
    title:{
        fontSize:40,
        fontFamily:'LeagueGothicr'
    },
    button:{
        backgroundColor:'#ff8899',
        paddingHorizontal:wp('10%'),
        paddingVertical:hp('10%'),
        borderRadius:5,
        marginTop:hp(10)
    },
    inputContainer:{
        width:wp(1000),
        alignItems:'center',
        marginTop:hp(5)
    },
    input:{
        backgroundColor:'#ddd',
        width:wp(70),
        paddingHorizontal:hp(2),
        paddingVertical:hp(1),
        borderRadius:hp(1),
        margin:0
    },
    buttonContainer:{
        marginTop:hp(3),
        backgroundColor:'#000',
        width:wp(70),
        paddingVertical:hp(1.8),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: hp(0.5),
    },
    buttonText: {
        color: '#fff',
      },
      accContainer: {
        flexDirection: 'row',
        marginTop: hp(2),
      },
      footerText: {
        color: 'red',
      },

  language : {
      alignItems:'flex-end',
      justifyContent:'center',
      // margin:20
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 3,
    margin:20
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F399",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }


})

export default styles