import React from 'react'
import { Text, StyleSheet, View, StatusBar, } from 'react-native'

export default class Popular extends React.Component {
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.textStyle}>
          hello from Popular screen
        </Text>
      </View>
    );
  }

}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    padding:8,
    backgroundColor: '#ecf0f1',
  },
  textStyle:{
    color:'#000',
    fontSize:18,
    alignSelf:'center',
  }
});