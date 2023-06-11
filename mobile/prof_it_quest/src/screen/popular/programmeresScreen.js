import React, { useEffect, useState } from "react";
import { View, Text, Image, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import ActivityIndicatorComponent from '../../components/activityIndicator';
import axios from 'axios';
import config from '../../../config/config';
import { useFocusEffect } from "@react-navigation/native";



const ProgrammeresScreen = ({navigation}) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    
    const featdata = async () => {
        try {
            await axios.get(`${config.API_URI}${config.API_VERSION}/popular/programmer/get/all`).then(response => {
                setData(response.data);
                console.log(response.data)
                setIsLoading(false);
            }) 
        } catch(e){
            console.log(e);
        }
    }

    useFocusEffect(React.useCallback(() => {
        featdata()
        }, [])
    )
    
    return(
        <View>
            {
                isLoading
                ? ( 
                    <ActivityIndicatorComponent /> 
                ) 
                : (
                    <SafeAreaView>
                        <ScrollView horizontal={false} showsHorizontalScrollIndicator={true}>
                        {
                            data.map((d) => (
                                <TouchableOpacity 
                                    key={d._id}
                                    style={{
                                        marginHorizontal: 15,
                                        marginVertical: 8,
                                        borderRadius: 12,
                                        backgroundColor: "#E5E7E9",
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'flex-start',
                                    }}
                                    onPress={()=> {
                                        navigation.navigate("programmer", {
                                            content: {
                                                id: d._id,
                                                img: d.img,
                                                dateOfBirth: d.dateOfBirth,
                                                descriptions: d.descriptions,
                                                fullname: d.fullname
                                            }
                                        })
                                    }}
                                >
                                    <View>
                                        <Image 
                                            style={{ 
                                                width: 190, height: 200,
                                                borderRadius: 8,
                                                margin: 12,    
                                            }} 
                                            source={{uri: d.img}} 
                                        />
                                    </View>
                                    <View style={{flex: 1, flexWrap: 'wrap', display: 'flex', flexDirection: 'row',  paddingVertical: 25}}>
                                        <Text style={{ color: "#2C3E50", fontSize: 18 }}>{d.fullname}</Text>
                                    </View>
                                </TouchableOpacity>
                            ))
                        }
                        </ScrollView>
                    </SafeAreaView>
                )
            }          
        </View>
    )
}

export default ProgrammeresScreen;