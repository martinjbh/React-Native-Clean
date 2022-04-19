import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Componentes/Home/Home';
import ShowRoom from './Componentes/ShowRoom/ShowRoom'
import { Provider } from 'react-redux';
import { reducer } from './Componentes/Redux/Reducers';
import { createStore } from 'redux';
const store = createStore(reducer)

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer initialRouteName="Index">
        <Stack.Navigator screenOptions={{ contentStyle: { backgroundColor: '#fff' }, headerShown: false }}>

          <Stack.Screen name="Home" component={Home} />

          <Stack.Screen name="ShowRoom" component={ShowRoom} />

        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

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
