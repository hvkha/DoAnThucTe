/**
 * @format
 */
/*import 'react-native-gesture-handler';*/
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Trangchu from './src/screens/Trangchu';
import Canhan from './src/screens/Canhan';
import Diachi from './src/screens/Diachi';

const Tab = createBottomTabNavigator();
const tab = () =>{
  return(
      <Tab.Navigator screenOptions={{headerShown:  false }}>
        <Tab.Screen name ="Trang chủ"component={Trangchu} options={{
            tabBarLabel: 'Trang chủ',
            tabBarIcon: ({color}) => (
              <MaterialIcons name="home" size={26} color={color} />
            ),
          }}></Tab.Screen>

          <Tab.Screen name="Địa chỉ" component={Diachi} options={{
            tabBarLabel: 'Địa chỉ',
            tabBarIcon: ({color}) => (
              <MaterialIcons name="map" size={26} color={color} />
            ),
          }}></Tab.Screen>

        <Tab.Screen name="Cá nhân" component={Canhan} options={{
            tabBarLabel: 'Cá nhân',
            tabBarIcon: ({color}) => (
              <MaterialIcons name="person" size={26} color={color} />
            ),
          }}></Tab.Screen>
      </Tab.Navigator>
  );
  };
export default tab;