import React from 'react'
import { Text, StyleSheet, View, StatusBar, ScrollView,Button,TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import SearchBox from '../Components/SearchBox'
import Card from '../Components/Card'
import CardList from '../Components/CardList'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';
export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} style={styles.container}>
        <SearchBox />
        <Text style={styles.textStyle}>1 BHK Flats, Apartments near you</Text>
        <CardList />
        <Text style={styles.textStyle}>2 BHK Flats, Apartments near you</Text>
        <CardList />
        <Text style={styles.textStyle}>3 BHK Flats, Apartments near you</Text>
        <CardList />
        {/*i have got an error when using useNavigation()  invalid hook */}
        <TouchableOpacity style={{marginHorizontal:wp('3%'),marginBottom:wp('1.7%'),borderRadius:wp('3%'),backgroundColor:'#2dd7f8',height:wp('8.1%'),justifyContent:"center",alignItems:"center"}} onPress={()=>this.props.navigation.navigate('Details')}>
          <Text>go to detail screen</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }

}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f7f7f7',
  },
  textStyle:{
    fontSize:wp('4%'),
    color:'#848687',
    marginLeft:7,
    fontWeight:'bold'
  },
  
});