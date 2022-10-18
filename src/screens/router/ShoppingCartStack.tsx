import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../HomeScreen";
import ProductScreen from "../ProductScreen";
import ShoppingCartScreen from "../ShoppingCartScreen";
import AddressScreen from "../AddressScreen";


const Stack = createNativeStackNavigator()

const ShoppingCartStack = () =>{
    return(
            <Stack.Navigator>
                <Stack.Screen component={ShoppingCartScreen} name='cart' options={{title:'Shopping Cart'}}/>
                <Stack.Screen component={AddressScreen} name='Address' options={{title:'Address'}}/>
            </Stack.Navigator>
        
    )
    
}

export default ShoppingCartStack