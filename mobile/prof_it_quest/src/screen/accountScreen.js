import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, ScrollView} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Avatar } from '@rneui/themed';

import UserInfoComponent from "../components/userInfoComponent";

const AccountScreen = ({navigation}) => {
    const [lastname, setLastname] = useState("");
    const [firstname, setFirstname] = useState("");
    const [email, setEmail] = useState("");
    const [uid, setUid] = useState("");
    const [avatar, setAvatar] = useState("https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.colorhexa.com%2Fcbd5e1&psig=AOvVaw1E5lriPtg2-IcEscmnNWoG&ust=1680853533755000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCODYpsDhlP4CFQAAAAAdAAAAABAI");

    const getUserData = async () => {
        try{
            let cUid = await AsyncStorage.getItem("uid");
            if(cUid) setUid(cUid);
            
            let cLastname = await AsyncStorage.getItem("lastname");
            if(cLastname) setLastname(cLastname);
            
            let cFirstname = await AsyncStorage.getItem("firstname");
            if(cFirstname) setFirstname(cFirstname);
            
            let cEmail = await AsyncStorage.getItem("email");
            if(cEmail) setEmail(cEmail);
        }
        catch(e){
            console.log(e);
        }
    }

    const onPressLogout = async () => {
        AsyncStorage.clear();
        navigation.navigate("main");
    }

    useEffect(()=> {
        getUserData()
    }, []);

    return (
        <SafeAreaView>
            <ScrollView horizontal={false} showsHorizontalScrollIndicator={true}> 
                <View style={{}}>
                    <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', padding: 5}}>
                        <Avatar size={120} rounded source={{uri: avatar}} />
                    </View>

                        <UserInfoComponent title={"Lastname:"} vel={lastname} />
                        <UserInfoComponent title={"Firstname:"} vel={firstname} />
                        <UserInfoComponent title={"Email"} vel={email} />                
                        <UserInfoComponent title={"UID"} vel={uid} /> 

                    <View style={{margin: 5, padding: 5, display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                        <Text style={{borderRadius: 8, borderColor: '#AAAFB0', borderWidth: 1, paddingHorizontal: 15, paddingVertical: 10 }} onPress={()=> {onPressLogout()}}>Log out</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default AccountScreen;