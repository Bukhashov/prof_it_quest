import React from "react";
import { View, Text, Dimensions, ScrollView, SafeAreaView} from "react-native";
import { Input, Button } from '@rneui/themed';
import { useFocusEffect } from '@react-navigation/native';
import axios from "axios";

import config from '../../../config/config';

const { width, height } = Dimensions.get("window");

const ChatScreen = () => {
    const [messages, setMessage] = React.useState([]);
    const [newMessage, setNewMessage] = React.useState("");

    const sendMessage = () => {

    }

    const getMessages = async () => {
        try{
            await axios.get(`${config.API_URI}${config.API_VERSION}/chat/get/all`).then((response) => {
                console.log(response.data);
                setMessage(response.data);
            })
        }catch(e){
            console.log(e);
        }
    }

    const onChangeNewMessage = (vel) => {
        setNewMessage(vel)
    }

    useFocusEffect(
        React.useCallback(()=> {
            getMessages();
        }, [])
    )

    return(
        <View>
            <SafeAreaView>
                <ScrollView bounces={false} horizontal={false} showsHorizontalScrollIndicator={false}>
                    
                </ScrollView>
            </SafeAreaView>
            <View style={{ 
                position: 'absolute',
                width: width, 
                bottom: -(height-90),
                paddingLeft: 5, paddingHorizontal: 5, 
                display: 'flex', flexDirection: 'row' 
            }}>
                <View style={{ width: width-130}}>
                    <Input 
                        placeholder="New Massage"
                        value={newMessage}
                        onChangeText={(pass) => onChangeNewMessage(pass)} 
                    />
                </View>
                <View style={{width: 120, borderRadius: 16}}>
                    <Button onPress={() => { auth()}} title="Zhyberu" color="black" />
                </View>
            </View>
        </View>
    )
}

export default ChatScreen;