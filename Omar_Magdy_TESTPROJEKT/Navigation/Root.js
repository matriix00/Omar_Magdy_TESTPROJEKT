import * as React from 'react';
import { Text, View,Image, ImageBackground,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Icon from 'react-native-vector-icons/Ionicons'

import MainScreen from '../Screens/Main'
import SettingsScreen from '../Screens/Settings'
import NotificationScreen from '../Screens/Notification'
import ProfileScreen from '../Screens/Profile'
import DetailsScreen from '../Screens/Details'

import MapScreen from '../Screens/TopScreen/Map'
import PopularScreen from '../Screens/TopScreen/Popular'
import NearScreen from '../Screens/TopScreen/Near'
import ExploreScreen from '../Screens/TopScreen/Explore'
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={MainScreen} options={{headerShown:false}}/>
      <Stack.Screen name="Details" component={DetailsScreen} 
      options={{headerRight:()=>(<Text style={{marginRight:15,fontSize:16,color:'white'}}>1/5</Text>),headerTintColor:'white',headerLeftContainerStyle:{justifyContent:"flex-start",alignItems:'flex-start'},
        title:'',headerStatusBarHeight:100,headerBackground:()=>{ return(<ImageBackground style={{height:'100%',resizeMode:"contain"}} source={require("../Images/flat.jpg")}/>);}}}
        />
      
    </Stack.Navigator>
  );
}


export default function Root() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            
            if (route.name === 'Home') {
              iconName = focused? 'md-home'
                : 'md-home';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'md-person':'md-person';
            }else{
              iconName = focused ? 'md-notifications' : 'md-notifications';
            }
            /*else {
              iconName = focused?(<Image style={{ width: 24, height: 24, }} source={require("../instgram2.png")}/>)              
              : (<Image style={{ width: 24, height: 24,}} source={require("../instgram2.png")}/>)
          }*/

            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'rgb(38,128,235)',
          inactiveTintColor: 'gray',
          showLabel:false,
        
        }}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Notification" component={NotificationScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} /*options={{tabBarIcon: ({ focused, tintColor })=>{ return(<Image style={{ width: 24, height: 24,}} source={require("../instgram2.png")}/>);}}}*//>
      </Tab.Navigator>
    </NavigationContainer>
  );
}