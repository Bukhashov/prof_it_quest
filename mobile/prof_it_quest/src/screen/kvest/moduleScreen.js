import React, {useState, useEffect} from "react";
import { View, Text, Image, ScrollView, SafeAreaView, TouchableOpacity} from "react-native";
import { useFocusEffect } from '@react-navigation/native';

import config from '../../../config/config';
import axios from 'axios';

const ModuleScreen = ({navigation}) => {
    const [kvests, setKvests] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    const featData = async () => {
        try {
            await axios.get(`${config.API_URI}${config.API_VERSION}/kvester/get/all`).then(response => {
                setKvests(response.data);
            }) 
        }catch(e) {
            console.log(e);
        }
    }

    useFocusEffect(
        React.useCallback(() => {
            featData();
        }, [])
    )

    return (
        <SafeAreaView>
            <ScrollView bounces={false} horizontal={false} showsHorizontalScrollIndicator={false}>
                <View style={{
                    display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-around',
                    paddingHorizontal: 15,
                }}>
                {
                    kvests.map((kvest) => (
                        <TouchableOpacity 
                            key={kvest._id}
                            onPress={() => navigation.navigate('thames', {
                                content: kvest._id
                            })}
                            style={{
                                backgroundColor: "#E5E7E9",
                                paddingHorizontal: 15,
                                paddingVertical: 10,
                                marginVertical: 15,
                                borderRadius: 12,
                            }} 
                        >
                            <Image style={{ borderRadius: 8, width: 130, height: 120}} source={{uri: kvest.img }} />
                            <View style={{marginLeft: 15, }}>
                                        <Text style={{fontSize: 25,}}>{kvest.title}</Text>
                                    </View>
                        </TouchableOpacity>
                    ))
                }
                </View>
            </ScrollView>
            
        </SafeAreaView>
    )
}

export default ModuleScreen;