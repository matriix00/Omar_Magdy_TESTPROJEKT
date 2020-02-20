/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Root from './Navigation/Root'
  export default class App extends React.Component {

    render(){
      return(
        <View style={styles.page}>
          
          <Root />
        </View>

        
         
      );
    }
  }
  

const styles = StyleSheet.create({
  page:{
    flex:1,
    justifyContent:"flex-start",
    backgroundColor:'white'
  },
  
});

