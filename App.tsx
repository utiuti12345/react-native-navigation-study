import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Home from "./src/component/pages/Home";
import Detail from "./src/component/pages/Detail";
import Settings from "./src/component/pages/Settings";
import Info from "./src/component/pages/Info";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createDrawerNavigator} from "@react-navigation/drawer";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function StackNavigator() {
    return (
        <Stack.Navigator mode="modal">
            <Stack.Screen
                name="Home"
                component={TabRoutes}
                options={{title: "ホーム"}}
            />
            <Stack.Screen
                name="Detail"
                component={Detail}
                options={{title: "詳細"}}
            />
        </Stack.Navigator>
    );
}

function TabRoutes() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={DrawerRoutes}
                options={{title: "ホーム"}}/>
            <Tab.Screen
                name="Settings"
                component={Settings}
                options={{title: "設定"}}/>
        </Tab.Navigator>
    )
}

function DrawerRoutes() {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Home}/>
            <Drawer.Screen name="Info" component={Info}/>
        </Drawer.Navigator>
    )
}

export default function App() {
    return (
        <NavigationContainer>
            <StackNavigator/>
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
