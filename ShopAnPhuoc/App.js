/**
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
import tab from './tab';
import Thongtinsp from './src/screens/Thongtinsp';
import Canhan from './src/screens/Canhan';
import login from './src/screens/login';

const App = () =>{
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:  false }}
      initialRouteName = {"Trangchu"}
      >
        <Stack.Screen name='Trangchu' component={tab}></Stack.Screen>
        <Stack.Screen name='Thongtin' component={Thongtinsp}></Stack.Screen>
        <Stack.Screen name='Canhan' component={Canhan}></Stack.Screen>
        <Stack.Screen name='login' component={login}></Stack.Screen>
      </Stack.Navigator>

    </NavigationContainer>
  );
  };
export default App;
