import React from 'react'
import { StyleSheet, View, Text, TextInput, Dimensions, Button, Image,KeyboardAvoidingView,Keyboard } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
  } from 'react-native-responsive-screen'



class SearchBox extends React.Component {

    constructor(props) {
        super(props);
        
    }
   
    render() {
        return (
            <KeyboardAvoidingView style={styles.container} onPress={() => {Keyboard.dismiss();}}>
                <View style={styles.searchSection}>
                    <Icon name="md-search" size={wp('5.5%')} style={styles.searchIcon} color={"#afafaf"}></Icon>
                    <TextInput
                        style={styles.searchText}
                        placeholder="Type Location"
                        
                        
                    />
                </View>
            </KeyboardAvoidingView>

            
        );
    }
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:"center",
        backgroundColor:'#f7f7f7',
        margin:10
    },
    searchText: {
        width:'90%',
        color: '#4d4c4c',
        fontSize:wp('4.2%'),
        fontWeight:"400"
     
    },
    searchIcon: {
      
    },
    searchSection: {        
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:"center",
        backgroundColor: '#e2e2e2',
        paddingLeft:wp('4%'),
        marginLeft:wp('4%'),
        marginRight:wp('4%'),
        borderRadius:wp('10%'),
        overflow:'hidden'

    },
});

export default SearchBox;