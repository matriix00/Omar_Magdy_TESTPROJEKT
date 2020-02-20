import React, { Component } from 'react';
import { ScrollView, Image, Text,View } from 'react-native';
import Card from '../Components/Card'

export default class CardList extends Component {
  state = {
    cardData: [
      {'Price': 13500,'Detail':'Apartment for Rent', 'id': 1},
      {'Price': 14000,'Detail':'Apartment for Rent', 'id': 2},
      {'Price': 3500,'Detail':'Apartment for Sale', 'id': 3},
      {'Price': 2000,'Detail':'Apartment for Sale', 'id': 4},
      {'Price': 1000,'Detail':'Apartment for Rent', 'id': 5},
      {'Price': 7500,'Detail':'Apartment for Rent', 'id': 6},
      {'Price': 100000,'Detail':'Apartment for Sale', 'id': 7},
      {'Price': 2000,'Detail':'Apartment for Rent', 'id': 8},
      {'Price': 600000,'Detail':'Apartment for Sale', 'id': 9},
      {'Price': 1000,'Detail':'Apartment for Rent', 'id': 10},
      {'Price': 1000,'Detail':'Apartment for Rent', 'id': 11},
      {'Price': 800000,'Detail':'Apartment for Sale', 'id': 12},
      {'Price': 1000,'Detail':'Apartment for Rent', 'id': 13},
      {'Price': 1000,'Detail':'Apartment for Rent', 'id': 14},
      {'Price': 1000,'Detail':'Apartment for Rent', 'id': 15},
    ]
  }
  render() {
    const navigation =this.props;
      return (
        <ScrollView horizontal showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} style={{overflow:"hidden"}} >
          {
                  this.state.cardData.map((item, index) => (
                     <View key = {item.id}>
                        <Card  price={item.Price} detail={item.Detail}  />
                     </View>
                  ))
               }
          <Card />
        </ScrollView>
    );
  }
}