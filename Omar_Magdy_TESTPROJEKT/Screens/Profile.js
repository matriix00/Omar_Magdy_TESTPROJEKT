import React from 'react'
import { Text, StyleSheet, View, StatusBar,Switch,Image,ScrollView} from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';
export default class Profile extends React.Component {
  state = {switchValue:false,switchValue2:true}
  toggleSwitch = (value) => {
      this.setState({switchValue: value})
   }
   toggleSwitch2 =(value) => {
     this.setState({switchValue2:value})
   }
  render() {
    return (
      <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={styles.topSide}>
          <Text style={{color:'#fff',fontSize:15,fontWeight:"bold"}}>My Profile</Text>
          <Image style={styles.imageStyle} source={require('../Images/d1.jpg')}/>
        </View>
        <View style={styles.botSide}>
          <Text style={styles.upperText}>Name</Text>
          <Text style={styles.lowerText}>Vickey</Text>
          <View style={styles.bar}></View>
          <Text style={styles.upperText}>Location</Text>
          <Text style={styles.lowerText}>Chennai</Text>
          <View style={styles.bar}></View>
          <Text style={styles.upperText}>E-mail</Text>
          <Text style={styles.lowerText}>Stella.summersgmail.com</Text>
          <View style={styles.bar}></View>

          <View style={{marginVertical:hp('0.5%'),flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={[styles.upperText,styles.botText]}>Contact Details</Text>
            <Switch onValueChange={this.toggleSwitch}  value={this.state.switchValue}/>
          </View>
          <View style={{marginVertical:hp('0.5%'),flexDirection:'row',justifyContent:"space-between"}}>
            <Text style={styles.upperText}>Enable Location</Text>
            <Switch  onValueChange={this.toggleSwitch2}  value={this.state.switchValue2}/>
          </View>
        </View>
      </ScrollView>
    );
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  textStyle: {
    color: '#000',
    fontSize: 18,
    alignSelf: 'center',
  },
  topSide: {
    height:'35%',
    backgroundColor:'#0a98f0',
    alignItems:'center',
    justifyContent:'space-evenly',
  },
  botSide:{
    height:'65%',
    backgroundColor:'#fff',
    margin:wp('5%'),
    padding:wp('3%'),
  },
  bar: {
    backgroundColor:'#ececec',
    height:hp('0.3%'),
    marginVertical:hp('2%')
  },
  upperText:{
    color:'#848687',
    fontSize:wp('4.5%')
  },
  lowerText:{
    color:'#000',
    fontWeight:'bold',
    fontSize:wp('4.5%'),
    marginVertical:hp('0.3%')
  },
  imageStyle:{
    width:wp('30%'),
    height:hp('20%'),
    borderRadius:wp('140%'),
    resizeMode:'stretch',
  },

});