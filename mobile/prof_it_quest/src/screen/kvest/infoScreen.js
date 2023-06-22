import { useFocusEffect } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, ScrollView, Dimensions, View, Text, TextInput} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios';
import config from '../../../config/config';
import { Dialog } from '@rneui/themed';

const { width, height } = Dimensions.get("window");

const InfoScreen = (props) => {
    const [data, setData] = React.useState([]);
    const [allComment, setAllComment] = React.useState([]);
    const [newComment, setNewComment] = React.useState("");
    const [userFullname, setUserFullName] = React.useState("")
    const [visible, setVisible] =  React.useState(false);

    const featData = async () => {
        try{
            await axios.get(`${config.API_URI}${config.API_VERSION}/thame/${props.route.params.content.id}/byid`).then(res => {
                setData(res.data);
                console.log(res.data);
            })
        }
        catch(e){
            console.log(e);
        }
    }

    const controlUserName = () => {
        if(userFullname.length == 0) setVisible(!visible);
    }

    const featComments = async () => {
        try{
            await axios.get(`${config.API_URI}${config.API_VERSION}/comment/get/${props.route.params.content.id}/all`).then(res => {
                setAllComment(res.data);
                console.log(res.data);
            })
        }catch(e){
            console.log(e);
        }
    } 
    const entryFullName = () => {
        AsyncStorage.setItem('fullname', userFullname);
        setVisible(!visible)
    }

    const addNewComment = async () => {
        try{
            controlUserName();
            await axios.post(`${config.API_URI}${config.API_VERSION}/comment/add`, {
                thameId: props.route.params.content.id,
                username: userFullname,
                message: newComment
            }).then(res => {
                setNewComment("")
                featComments();
            })
        }
        catch(e){
            setNewComment("")
        }
        
    }
    const toggleDialog = () => {
        setVisible(!visible);
    }

    useFocusEffect(React.useCallback(() => {
        featData();
        featComments();
    }, []))
    
    return (
        <View>
            <SafeAreaView>
                <ScrollView bounces={false} horizontal={false} showsHorizontalScrollIndicator={false}>
                    <View style={{ paddingHorizontal: 15, paddingVertical: 15, }}>
                        <View style={{ backgroundColor: "#E5E7E9", paddingHorizontal: 15, paddingVertical: 15, borderRadius: 8, }}>
                            <Text style={{ color: "#2C3E50", fontSize: 16, fontWeight: '500' }} >{data.title}</Text>
                        </View>
                        <View style={{ marginVertical: 5, backgroundColor: "#E5E7E9", paddingHorizontal: 15, paddingVertical: 15, borderRadius: 8, }}>
                            <Text style={{ color: "#2C3E50", fontSize: 14, }} >{data.subject}</Text>
                        </View>
                        <View style={{ marginVertical: 5, backgroundColor: "#E5E7E9", paddingHorizontal: 15, paddingVertical: 15, borderRadius: 8, }}>
                            <Text style={{ color: "#2C3E50", fontSize: 14, }} >{data.content}</Text>
                        </View>
                        <View style={{ marginVertical: 5, backgroundColor: "#E5E7E9", paddingHorizontal: 15, paddingVertical: 15, borderRadius: 8, }}>
                            <View
                                style={{
                                    display: 'flex', flexDirection: 'row', alignItems: 'center', 
                                }}
                            >
                                <TextInput 
                                    placeholder="Жаңа коментария"
                                    onChangeText={vel => setNewComment(vel)}
                                    value={newComment}
                                    style={{
                                        width: width-130,
                                        borderColor: "#A6ACAF",
                                        borderWidth: 1,
                                        padding: 8,
                                        borderRadius: 8,
                                    }}
                                />
                                <Text onPress={() => {addNewComment(); }} style={{ padding: 8, color: "#A6ACAF",  }}>Еңгізу</Text>
                            </View>
                        
                            {
                                allComment.map((comment) => (
                                    <View key={comment._id}
                                        style={{ 
                                            paddingVertical: 5,
                                            paddingHorizontal: 7,
                                            backgroundColor: "#EFF1F2",
                                            marginVertical: 5,
                                            borderRadius: 8,
                                        }}>
                                        <Text style={{ fontSize: 12, color: "#A6ACAF" }}>{comment.username}</Text>
                                        <Text>{comment.message}</Text>
                                    </View>
                                ))
                            }
                        </View>
                       
                    </View>
                </ScrollView>
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
                    <Text onPress={() => { }}
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
            </SafeAreaView>
        </View>
    )
}

export default InfoScreen;