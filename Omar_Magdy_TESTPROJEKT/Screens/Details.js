import React from 'react'
import { StyleSheet, View, Text,ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
  } from 'react-native-responsive-screen';
export default class Details extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
       // const {price,}
        return (
            <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} style={styles.container}>
                <View style={styles.botSide}>
                    <Text style={{ fontWeight: 'bold', fontSize:  wp('5.3%'),marginVertical:hp('2.7') }}>2BHK 2Baths Residential Apartment for Rent</Text>
                    <Text style={{ fontSize:  wp('4.2%'), color: '#929394' }}>in Arasau Avantika, Palikaranai, Chennai South, Chennai</Text>
                    <View style={{ flexDirection: 'row',marginVertical:hp('3%') }}>
                        <Text style={{ fontWeight: 'bold', fontSize: wp('5.3%') }}>13,500</Text>
                        <Text style={{ fontSize: wp('4.2%'), color: '#929394' }}> @ 14 per Sq.Ft.</Text>
                    </View>
                    <Text style={{ fontSize: wp('4.2%'), color: '#929394' }}>Per Month</Text>
                    <View style={{ flexDirection: 'row',justifyContent:'flex-start', alignItems: 'center', marginVertical:10,paddingVertical:8}}>
                        <Icon name="ios-home" size={wp('8.1%')} color="#b3b3b3"/>
                        <Text style={{marginLeft:wp('4.3%'),color:'#5cb8f0',fontSize:wp('4.5%'),fontWeight:'bold'}}>Configuration</Text>
                    </View>
                    <Text style={{marginLeft:wp('5%'), fontSize: wp('4.2%'), color: '#9f9f9f' }}>2 Bedrooms, 2 Bathrooms, 1 Balcony</Text>
                </View>

                

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    botSide: {
        margin: wp('3%'),
        padding: wp('3%'),

    },

})
