import React from 'react'
import { StyleSheet, View, Image, TouchableOpacity, Text,ImageBackground} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
  } from 'react-native-responsive-screen'
//const navigation=useNavigation();
//getting ivalid hook wwhen using useNavigation
export default class Card extends React.Component{
    constructor(props){
        super(props);
    }
    

    render(){
        const {price,detail } = this.props;
        return(
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>{} /*()=> {this.props.navigation.navigate('Details')}*/}>
                    <ImageBackground style={styles.imageStyle} source={require('../Images/flat.jpg')}>
                        <Text style={[styles.textStyle,styles.num]}>{price}</Text>
                        <Text style={styles.textStyle}>ZPHK 2Baths Residential</Text>
                        <Text style={styles.textStyle}>{detail}</Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        width:wp('47%'),
        height:hp('37.2%'),
        backgroundColor:'#f7f7f7',
        justifyContent:'center',
        alignItems:'center'
    },
    imageStyle:{
        width:wp('42.2%'),
        height:hp('35%'),
        resizeMode:"stretch",
        justifyContent:'flex-end',
        paddingLeft:wp('3.8%'),
        paddingBottom:hp('1.4%'),
        borderRadius:wp('2%'),
        overflow:"hidden"


    },
    num:{
        fontSize:wp('5.1%'),
        fontWeight:"bold"
    },
    detailStyle:{
    },
    textStyle:{
        color:'#fff'
    }
})