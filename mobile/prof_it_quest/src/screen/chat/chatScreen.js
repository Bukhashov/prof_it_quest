import React from "react";
import { View, Text, Dimensions, ScrollView, SafeAreaView, TextInput} from "react-native";
import { Input, Button } from '@rneui/themed';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/native';
import { Dialog } from '@rneui/themed';
import axios from "axios";
import config from '../../../config/config';

const { width, height } = Dimensions.get("window");

const ChatScreen = () => {
    const [messages, setMessage] = React.useState([]);
    const [downloadMassage, setDownloadMassage] = React.useState(false);
    const [newMessage, setNewMessage] = React.useState("");
    const [visible, setVisible] =  React.useState(false);
    const [userFullname, setUserFullName] = React.useState("")

    const sendMessage = async () => {
        console.log("sendMessage")
        try{
            await axios.post(`${config.API_URI}${config.API_VERSION}/chat/add`, {
                username: userFullname,
                message: newMessage,
            })
            setNewMessage("");
        }
        catch(e){
            console.log(e)
        }
    }

    const controlName = () => {
        AsyncStorage.getItem('fullname')
        .then(name => setUserFullName(name))
        .catch(() => setVisible(true))
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
            controlName();
        }, [])
    )

    const toggleDialog = () => {
        setVisible(!visible);
    }

    const entryFullName = () => {
        AsyncStorage.setItem('fullname', userFullname);
        setVisible(!visible)
    }

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
            <Dialog
                isVisible={visible}
                onBackdropPress={toggleDialog}
            >
                <Dialog.Title title="Есіміңіз"/>
                <Text>Чатта хабарламалар алмасу үшін толық АТЫ ЖӨНІҢІЗДІ енгізініз</Text>
                <TextInput 
                    placeholder="Аты Жөні"
                    onChangeText={(vel) => setUserFullName(vel)}
                    value={userFullname}
                    style={{
                        borderColor: "#000",
                        borderWidth: 1,
                        borderRadius: 8,
                        padding: 3,
                        marginVertical: 8,
                    }}
                /> 
                <View
                    style={{
                        
                    }}
                >
                    <Text 
                        style={{
                            fontSize: 18,
                            fontWeight: '600',
                            textAlign: 'center',
                            padding: 5,
                            color: "#B7C0D3" 
                        }}
                        onPress={() => entryFullName()}
                        >Енгізу</Text>
                </View>
                
            </Dialog>

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
                        <Text onPress={() => { sendMessage() }} style={{ paddingHorizontal: 12, paddingVertical: 8, backgroundColor: "#B7C0D3", textAlign: 'center', borderRadius: 8, }}>Жіберу</Text>
                    </View>
            </View>
            
        </View>
    )
}

export default ChatScreen;