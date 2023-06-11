import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';


import ChatSreen from '../screen/chat/chatScreen';
import HomeNavigator from '../navigator/homeNavigator';
import PopularNavigator from './popularNavigator';

const Tab = createBottomTabNavigator();

const TabNavigator = ({navigation}) => {
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                headerShown: true,
                tabBarIcon: ({ focused, color, size }) => {
                if(route.name === "Басты бет") {
                    return <Ionicons 
                    name={ focused 
                        ? 'home' 
                        : 'home-outline' 
                    } 
                    size={size} 
                    color={color} 
                    />
                } 
               
                else if(route.name === "Танымал") {
                    return <Ionicons 
                    name={ focused 
                        ? 'star' 
                        : 'star-outline' 
                    } 
                    size={size} color={color} 
                    />
                }
                else if(route.name === "Чат") {
                    return <Ionicons 
                    name={ focused 
                        ? 'ios-information-circle' 
                        : 'ios-information-circle-outline' 
                    } 
                    size={size} color={color} 
                    />
                }
                },
                tabBarInactiveTintColor: '#fff',
                tabBarActiveTintColor: '#fff',
                tabBarStyle: {
                    backgroundColor:'#A5BDE9',
                    height: 80,
                    // borderRadius: 15,
                    borderTopLeftRadius: 22,
                    borderTopRightRadius: 22,
                },
                tabBarItemStyle: {
                    margin: 15,    
                },
                headerStyle: {
                    backgroundColor:'#fff',
                    // borderBottomColor: "#fff",
                    // borderWidth: 1,
                },
                headerTitleStyle: {
                    color: '#000',

                },
            })}
        >
            <Tab.Screen name="Басты бет" component={HomeNavigator} />
            <Tab.Screen name="Танымал" component={PopularNavigator} options={{ headerShown: false }} />
            <Tab.Screen name="Чат" component={ChatSreen} />
        </Tab.Navigator>
    )
}

export default TabNavigator;
