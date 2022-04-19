import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Componentes/Home/Home';
import ShowRoom from './Componentes/ShowRoom/ShowRoom'
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer initialRouteName="Index">
      <Stack.Navigator screenOptions={{ contentStyle: { backgroundColor: '#fff' }, headerShown: false }}>

        <Stack.Screen name="Home" component={Home} />

        <Stack.Screen name="ShowRoom" component={ShowRoom} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
