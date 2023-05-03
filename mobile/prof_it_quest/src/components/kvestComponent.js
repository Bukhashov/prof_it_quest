import React from "react";
import { View, Text, Image, TouchableOpacity, Dimensions} from "react-native";

const width = Dimensions.get('window').width;

const KvestComponent = (props) => {


    const TouchableOpacityOnPress = () => {
        
    }

    return (
        <TouchableOpacity 
            onPress={() => TouchableOpacityOnPress()}
            style={{ width: width }} >
            <View style={{
                display: 'flex', flexDirection: 'row', justifyContent: 'space-between',
                borderRadius: 15,
                marginBottom: 10, marginTop: 10, marginLeft: 15, marginRight: 15,
                paddingLeft: 15, paddingRight: 15, paddingBottom: 25, paddingTop: 25, 
                backgroundColor: '#fff'
            }}>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center',}}>
                    <Image 
                        style={{ width: 120, height: 120}}
                        source={{uri: props.img }}
                    />
                    <View style={{marginLeft: 15, }}>
                        <Text style={{fontSize: 25,}}>{props.title}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default KvestComponent;