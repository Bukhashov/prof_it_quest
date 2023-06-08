import { View, Text} from "react-native"
import LineComponent from "./lineComponent"

const InfoCompressComponent = ({title, vel}) => {
    return (
        <View>
            <Text style={{ fontSize: 18, color: "#979A9A" }}>{title}</Text>
            <Text style={{ fontSize: 16 }}>{vel}</Text>
            <LineComponent />
        </View>
    )
}

export default InfoCompressComponent