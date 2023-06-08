import { useFocusEffect } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';

const InfoScreen = (props) => {
    const [data, setData] = React.useState([]);
    const featData = async () => {
        try{
            console.log(`${config.API_URI}${config.API_VERSION}/thame/${props.route.params.content.id}/all`)
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
        
    }, []))
    
    return (
        <View>
            
        </View>
    )
}

export default InfoScreen;