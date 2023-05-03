import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFocusEffect } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AccSreen from '../screen/accScreen';
import MainScreen from '../screen/mainScreen';

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
                },
                tabBarInactiveTintColor: 'black',
                tabBarActiveTintColor: 'black',
            })}
        >
            <Tab.Screen name="Home" component={MainScreen} />
            <Tab.Screen name="Account" component={AccSreen} />
        </Tab.Navigator>
    )
}

export default TabNavigator;
