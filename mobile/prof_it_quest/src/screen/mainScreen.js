import React, {useState, useEffect} from "react";
import { View, Text, ScrollView, SafeAreaView} from "react-native";
import { useFocusEffect } from '@react-navigation/native';
import KvestComponent from "../components/kvestComponent";
import config from '../../config/config';
import axios from 'axios';


const MainScreen = () => {
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
                {
                    kvests.map((kvest) => (
                        <KvestComponent 
                            title={kvest.title}
                            img={kvest.img}
                            ball={kvest.ball}
                        />
                    ))
                }
            </ScrollView>
            
        </SafeAreaView>
    )
}

export default MainScreen;