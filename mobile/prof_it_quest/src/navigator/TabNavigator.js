import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFocusEffect } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AccountScreen from '../screen/accountScreen';
import ChatSreen from '../screen/chat/chatScreen';
import HomeNavigator from '../navigator/homeNavigator';

const Tab = createBottomTabNavigator();

const TabNavigator = ({navigation}) => {
    const [token, setToken] = useState(false);
    
    const authControl = async () => {
        let t = await AsyncStorage.getItem("token");
        if(!t) navigation.navigate("singin")
        setToken(t); 
    }

    useFocusEffect(
        React.useCallback(() => {
            authControl();
        }, [])
    )
    
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                headerShown: true,
                tabBarIcon: ({ focused, color, size }) => {
                if(route.name === "Home") {
                    return <Ionicons 
                    name={ focused 
                        ? 'home' 
                        : 'home-outline' 
                    } 
                    size={size} 
                    color={color} 
                    />
                } 
                else if(route.name === "Account") {
                    return <Ionicons 
                    name={ focused 
                        ? 'person' 
                        : 'person-outline' 
                    } 
                    size={size} color={color} 
                    />
                }
                else if(route.name === "Chat") {
                    return <Ionicons 
                    name={ focused 
                        ? 'ios-information-circle' 
                        : 'ios-information-circle-outline' 
                    } 
                    size={size} color={color} 
                    />
                }
                },
                tabBarInactiveTintColor: 'black',
                tabBarActiveTintColor: 'black',
            })}
        >
            <Tab.Screen name="Home" component={HomeNavigator} />
            <Tab.Screen name="Chat" component={ChatSreen} />
            <Tab.Screen name="Account" component={AccountScreen} />
        </Tab.Navigator>
    )
}

export default TabNavigator;
