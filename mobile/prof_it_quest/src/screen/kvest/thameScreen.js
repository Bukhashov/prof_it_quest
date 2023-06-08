import { useFocusEffect } from '@react-navigation/native';
import axios from 'axios';
import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import config from '../../../config/config';

const ThameScreen = (props) => {
    const [data, setData] = React.useState([]);
    const featData = async () => {
        try{
            console.log(`${config.API_URI}${config.API_VERSION}/thame/${props.route.params.content.language}/all`)
            await axios.get(`${config.API_URI}${config.API_VERSION}/thame/${props.route.params.content.language}/all`).then(res => {
                setData(res.data);
                console.log(res.data);
            })
        }
        catch(e){
            console.log(e);
        }
    }
    useFocusEffect(React.useCallback(() => {
        featData();

    }, []))
    
    return (
        <View>
            <SafeAreaView>
                <ScrollView bounces={false} horizontal={false} showsHorizontalScrollIndicator={false}>
                    <View style={{
                        paddingHorizontal: 15,
                    }}>
                        {
                            data.map((d) => (
                                <TouchableOpacity key={d._id}
                                    style={{
                                        paddingVertical: 10,
                                    }}
                                    onPress={() => {
                                        props.navigation.navigate('info', {
                                            content: {
                                                id: d._id,
                                            }
                                        })
                                    }}
                                >
                                    <View style={{
                                        paddingVertical: 10,
                                        paddingHorizontal: 10,
                                        backgroundColor: "#E5E7E9",
                                        borderRadius: 8,
                                    }}>
                                        <Text style={{ paddingHorizontal: 15, paddingVertical: 12, color: "#2C3E50" }}>{d.title}</Text>
                                        <Text numberOfLines={4} style={{ paddingHorizontal: 15, paddingVertical: 5, color: "#2C3E50" }}>{d.subject}</Text>
                                    </View>
                                    
                                </TouchableOpacity>
                            ))
                        }
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

export default ThameScreen;