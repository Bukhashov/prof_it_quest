import { useFocusEffect } from '@react-navigation/native';
import axios from 'axios';
import React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import config from '../../../config/config';

const ThameScreen = (props) => {
    const [data, setData] = React.useState([]);
    const featData = async () => {
        try{
            await axios.get(`${config.API_URI}${config.API_VERSION}/thame/${props.route.params.content.language}/all`).then(res => {
                setData(res.data);
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
                    <View>
                        {
                            data.map((d) => (
                                <View>
                                    <Text>{d.title}</Text>
                                </View>
                            ))
                        }
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

export default ThameScreen;