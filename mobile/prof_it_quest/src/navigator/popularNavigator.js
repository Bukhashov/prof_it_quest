import { createDrawerNavigator } from '@react-navigation/drawer';

import ProgrammerScreen from '../screen/popular/programmerScreen';
import UniversityScreen from '../screen/popular/universityScreen';

const Drawer = createDrawerNavigator();

const PopularNavigator = ({navigation}) => {
    return (
        <Drawer.Navigator initialRouteName="programmer">
            <Drawer.Screen 
                name="programmer" 
                component={ProgrammerScreen} 
            />
            <Drawer.Screen 
                name="university" 
                component={UniversityScreen} 
            />
        </Drawer.Navigator>
    )
}


export default PopularNavigator;