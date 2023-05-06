import React from "react";
import { View, Text, Dimensions, ScrollView, SafeAreaView} from "react-native";
import { Input, Button } from '@rneui/themed';
import { useFocusEffect } from '@react-navigation/native';
import axios from "axios";

import config from '../../../config/config';

const { width, height } = Dimensions.get("window");

const ChatScreen = () => {
    const [messages, setMessage] = React.useState([]);
    const [downloadMassage, setDownloadMassage] = React.useState(false);
    const [newMessage, setNewMessage] = React.useState("");

    const sendMessage = () => {

    }

    const getMessages = async () => {
        try{
            await axios.get(`${config.API_URI}${config.API_VERSION}/chat/get/all`).then((response) => {
                if (response.data.length > 0) {
                    setDownloadMassage(true);
                };
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
        <View >
            <SafeAreaView style={{position: 'relative'}}>
                <ScrollView bounces={false} horizontal={false} showsHorizontalScrollIndicator={false}>
                    {
                        downloadMassage ? (
                            <View><Text>yes mgs</Text>
                                <Text>yes mgs</Text>
                            </View>
                        )
                        :(
                           <View>
                                <Text>no mgs</Text>
                           </View>
                        )
                    }
                </ScrollView>
                <View style={{ 
                    position: 'absolute',
                    width: width,
                    height: 80, 
                    bottom: -(height-110),
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
            </SafeAreaView>
            
        </View>
    )
}

export default ChatScreen;