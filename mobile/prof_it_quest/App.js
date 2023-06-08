import { StatusBar } from 'expo-status-bar';
import TabNavigator from './src/navigator/TabNavigator';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator/>
    </NavigationContainer>
  );
}