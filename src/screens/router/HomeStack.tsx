import React, {useState} from "react";
import { SafeAreaView, Text, TextInput, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Feather from 'react-native-vector-icons/Feather'
import HomeScreen from "../HomeScreen";
import ProductScreen from "../ProductScreen";


interface HeaderComponentProps{
    searchValue:string;
    setsearchValue:()=>void;
}

const Stack = createNativeStackNavigator()

const HeaderComponent = ({searchValue,setSearchValue}:HeaderComponentProps) =>{
    return(
        <SafeAreaView 
            style={{backgroundColor:'#22e3dd'}}>
            <View 
                style={{
                    margin:10,
                    padding:5, 
                    backgroundColor:'white',
                    flexDirection:'row',
                    alignItems:'center'
                }}>
                <Feather name='search' size={20} />
                <TextInput 
                    style={{height:40, marginLeft:10}} 
                    placeholder="Search..."
                    value={searchValue}
                    onChangeText={setSearchValue}
                />
            </View>
        </SafeAreaView>
    )
}

const HomeStack = () =>{
    const [searchValue, setSearchValue] = useState('');


    return(
        
            <Stack.Navigator
                screenOptions={{
                    header:()=><HeaderComponent searchValue={searchValue} setSearchValue={setSearchValue}/>
                }}
            >
                <Stack.Screen name='HomeScreen' options={{title:'Home'}}>
                   {()=><HomeScreen searchValue={searchValue}/>} 
                </Stack.Screen>
                <Stack.Screen component={ProductScreen} name='ProductDetails'/>
            </Stack.Navigator>
        
    )
    
}

export default HomeStack