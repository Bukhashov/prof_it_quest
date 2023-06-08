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

    const sendMessage = async () => {
        try{
            await axios.post(`${config.API_URI}/chat/add`, {
                uid: "22",
                massage: newMassage,
            })
            setNewMassage("");
            getAllMassages();
        }
        catch(e){
            console.log(e)
        }
    }

    const getMessages = async () => {
        try{
            await axios.get(`${config.API_URI}${config.API_VERSION}/chat/get/all`).then((response) => {
                setMessage(response.data);
                console.log(response.data);
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
            <SafeAreaView style={{position: 'relative', height: ((height/100)*84)}}>
                <ScrollView style={{position: 'relative'}} bounces={false} horizontal={false} showsHorizontalScrollIndicator={false}>
                    {
                      <View
                        style={{
                            paddingHorizontal: 15,
                        }}
                      >
                        {
                            messages.map(( message) => (
                                <View key={message._id}
                                    style={{
                                        display: 'flex',
                                        paddingVertical: 8,
                                        paddingHorizontal: 10,
                                        marginVertical: 10,
                                        borderRadius: 12,
                                        backgroundColor: "#E5E7E9",
                                    }}
                                    >
                                    <View style={{paddingHorizontal: 5, paddingVertical: 3, }}><Text style={{  color: "#99A3A4" }}>{message.username}</Text></View>
                                    <View><Text style={{ color: "#2C3E50" }}>{message.message}</Text></View>
                                </View>
                            ))
                        }
                        <View style={{width: width, height: 100}} />

                      </View>
                    }
                </ScrollView>
            </SafeAreaView>
            <View style={{ 
                position: 'absolute',
                width: width,
                height: 80, 
                bottom: 0,
                paddingLeft: 5, paddingHorizontal: 5, 
                backgroundColor: "#fff",
                display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}
            >
                    <View style={{ width: width-130}}>
                        <Input 
                            placeholder="New Massage"
                            value={newMessage}
                            style={{color: "#B7C0D3"}}
                            onChangeText={(pass) => onChangeNewMessage(pass)} 
                        />
                    </View>
                    <View style={{width: 120, borderRadius: 16}}>
                        <Text onPress={() => { auth()}} style={{ paddingHorizontal: 12, paddingVertical: 8, backgroundColor: "#B7C0D3", textAlign: 'center', borderRadius: 8, }}>Жіберу</Text>
                    </View>
            </View>
            
        </View>
    )
}

export default ChatScreen;