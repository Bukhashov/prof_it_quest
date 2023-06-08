import { createDrawerNavigator } from '@react-navigation/drawer';

import ProgrammerNavigator from './programmerNavigator';
import CollegeScreen from '../screen/popular/collegeScreen';

const Drawer = createDrawerNavigator();

const PopularNavigator = ({navigation}) => {
    return (
        <Drawer.Navigator 
            initialRouteName="Бағдарламалаушылар"
            screenOptions={{
                drawerStyle:{
                    backgroundColor: '#fff',
                }
            }}
        >
            <Drawer.Screen 
                name="Бағдарламалаушылар" 
                component={ProgrammerNavigator} 
            />
            <Drawer.Screen 
                name="Колледж" 
                component={CollegeScreen} 
            />
        </Drawer.Navigator>
    )
}


export default PopularNavigator;