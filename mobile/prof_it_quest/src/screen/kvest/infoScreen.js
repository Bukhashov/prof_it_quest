import { useFocusEffect } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, ScrollView, Dimensions, View, Text, TextInput} from 'react-native';
import axios from 'axios';
import config from '../../../config/config';
import LineComponent from '../../components/lineComponent';

const { width, height } = Dimensions.get("window");

const InfoScreen = (props) => {
    const [data, setData] = React.useState([]);
    const [allComment, setAllComment] = React.useState([]);
    const [newComment, setNewComment] = React.useState("");
    
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

    const featComments = async () => {
        try{
            await axios.get(`${config.API_URI}${config.API_VERSION}/`)
        }catch(e){

        }
    } 

    useFocusEffect(React.useCallback(() => {
        featData();

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
                                <Text style={{ padding: 8, color: "#A6ACAF",  }}>Еңгізу</Text>
                            </View>
                        
                            {
                                allComment.map((comment) => (
                                    <View>

                                    </View>
                                ))
                            }
                        </View>
                       
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

export default InfoScreen;