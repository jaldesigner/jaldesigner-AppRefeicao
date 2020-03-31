/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
//import auth from '@react-native-firebase/auth';

//Import do Store
import Store from './store';

//Import das screen
import Home from './screen/home';
import Cardapio from './screen/Cardapio';
import SelectionPrato from './screen/SelectionPrato';
import Login from './screen/Login';
import Cadastro from './screen/Cadastro';

const Stack = createStackNavigator();

export default function App() {
    return (
        <Provider store={Store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Login">
                    <Stack.Screen
                        name="Home"
                        component={Home}
                        options={{ title: false, headerTransparent: true, headerLeft: null }}
                    />
                    <Stack.Screen
                        name="Cardapio"
                        component={Cardapio}
                        options={{ title: false, headerTransparent: true, headerLeft: null }}
                    />
                    <Stack.Screen
                        name="SelectionPrato"
                        component={SelectionPrato}
                        options={{ title: false, headerTransparent: true, headerLeft: null }}
                    />
                    <Stack.Screen
                        name="Login"
                        component={Login}
                        options={{ title: false, headerTransparent: true, headerLeft: null }}
                    />
                    <Stack.Screen
                        name="Cadastro"
                        component={Cadastro}
                        options={{ title: false, headerTransparent: true, headerLeft: null }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
