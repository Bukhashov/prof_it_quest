import { View, Text, ScrollView, SafeAreaView, Image, Dimensions } from "react-native"
import LineComponent from '../../components/lineComponent';
import InfoCompressComponent from "../../components/infoCompressComponent";
const width = Dimensions.get('window').width;

const CollegeScreen = () => {
    return(
        <View>
            <SafeAreaView>
                <ScrollView bounces={false} horizontal={false} showsHorizontalScrollIndicator={false}>
                    <Image style={{width: width, height: 230}} source={{uri: `https://lh3.googleusercontent.com/p/AF1QipPzIB1rre1tuaGeO1qXDUbP_Q3IVTDhJwjNV7SX=s680-w680-h510`}} />
                    <View style={{ paddingHorizontal: 10, }}>
                        <InfoCompressComponent title={"Колледж жайлы"} vel={"Теміртау кәсіптік-техникалық колледжі КМҚК 1969 жылы Қазметаллургстрой тресті негізінде № 176 қалалық кәсіптік-техникалық училище ретінде құрылды. 1984 жылы училище СПТУ-31, 1996 жылы - ПТШ-31, 2002 жылы – ПШ-31, 2009 жылы – ПЛ-31, 2013 жылы - ТПТК КММ әзірлеуде болып өзгертілді. Сабақтар 1969 жылы 11 қарашада сылақшы-сылақшы, ағаш ұстасы-ұста, слесарь, экскаватор, бульдозер машинисі мамандықтары бойынша басталды."}  />
                        <InfoCompressComponent title={"Адрес"} vel={"Республика Казахстан, г. Темиртау, республика 26"} />
                        <InfoCompressComponent title={"Телефон нөмері"} vel={"+7 (7213) 41-18-18"} />
                        <InfoCompressComponent title={"Факс"} vel={"+7 (7213) 41-18-18"} />
                        <InfoCompressComponent title={"Почта"} vel={"tem-prof-teh@krg.edu.kz"} />                      
                    </View> 
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

export default CollegeScreen;