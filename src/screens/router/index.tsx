import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../HomeScreen";
import BottomTabNav from "./bottomTabNav";
import { requireNativeComponent } from "react-native";

const Root = createNativeStackNavigator()

const Router = () =>{
    
    
    return(
        <NavigationContainer>
            <Root.Navigator screenOptions={{headerShown:false}}>
                <Root.Screen component={BottomTabNav} name='HomeTabs' />
            </Root.Navigator>
        </NavigationContainer>
    )
    
}



export default Router