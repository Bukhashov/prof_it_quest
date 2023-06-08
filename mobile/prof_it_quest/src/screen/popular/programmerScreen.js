import { View, Text, ScrollView, SafeAreaView, Image, Dimensions} from "react-native"
import InfoCompressComponent from "../../components/infoCompressComponent";

const width = Dimensions.get('window').width;


const ProgrammerScreen = (props) => {

    return(
        <View>
            <SafeAreaView>
                <ScrollView bounces={false} horizontal={false} showsHorizontalScrollIndicator={false}>
                    
                    <Image style={{width: width, height: 230}} source={{uri: props.route.params.content.img}} />
                    
                    <View style={{ paddingHorizontal: 10, }}>
                    <InfoCompressComponent title={"Аты"} vel={props.route.params.content.fullname} />
                    <InfoCompressComponent title={"Апқарат"} vel={props.route.params.content.descriptions} />
                    </View>
                    
                
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

export default ProgrammerScreen;