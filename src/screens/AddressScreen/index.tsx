import React, { useState } from "react";
import { Alert, Text, TextInput,Platform, View, ScrollView, KeyboardAvoidingView } from "react-native";
import { Picker } from "@react-native-picker/picker";
import countryList from 'country-list';
import ButtonEl from "../../components/ButtonEl";
import styles from "./styles";
import symbolicateStackTrace from "react-native/Libraries/Core/Devtools/symbolicateStackTrace";

const countries  = countryList.getData()

const AddressScreen = () =>{
    const [country , setCountry] = useState(countries[0].code)
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('')
    const [address, setAddress] = useState('')
    const [addressErr, setAddressErr] = useState('')
    const [city, setCity] = useState('')
    console.log(fullName);


    // const {state, setState}= useState({
    //     country : '',
    //     fullName:'',
    //     phoneNumber:'',
    //     address:''
    // })
    // setState(state=>{...state, newCountry})
    

    const onCheckOut =() =>{
        if(!fullName){
            Alert.alert('Please fill in the Full Name field')
        }
        else if(!phoneNumber){
            Alert.alert('Please fill in the Phone Number field')
        }
        else if(!!addressErr){
            Alert.alert('fix all field errors before submitting');
        }
        else{
            Alert.alert('Please fill in the City field')
        }
    }
    

    const validateAddress = () =>{
        if(address.length<5){
            setAddressErr('Address is too short')
        }
        else if(address.length>15){
            setAddressErr('Address is too long')
        }
    }
    
    return(
        <KeyboardAvoidingView
            behavior={Platform.ios==='ios'?'padding':'height'}
            keyboardVerticalOffset={Platform.ios==='ios'?150:0}
        >
            <ScrollView style={styles.root}>
                <View style={styles.row}>
                    <Picker
                        selectedValue={country}
                        onValueChange={setCountry}
                    >
                        {countries.map((country, key)=>(
                            <Picker.Item value={country.code} label={country.name}  key={key}/>
                        ))}
                        
                    </Picker>
                </View>
                {/* fullName */}
                <View style={styles.row}>
                    <Text style={styles.label}>Full name (first and last name)</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder='Full name'
                        value={fullName}
                        onChangeText={setFullName}
                    /> 
                </View>

                {/* phone No */}
                <View style={styles.row}>
                    <Text style={styles.label}>Phone number</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder='Phone Number'
                        value={phoneNumber}
                        onChangeText={setPhoneNumber}
                        keyboardType={"numeric"}
                    /> 
                </View>

                {/* Address */}
                <View style={styles.row}>
                    <Text style={styles.label}>Address</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder='Address'
                        value={address}
                        onEndEditing={validateAddress}
                        onChangeText={(text)=>{setAddress(text),setAddressErr('')}}
                    /> 
                    {!!addressErr&& <Text style={styles.errorlabel}>{addressErr}</Text>}
                </View>
                {/* City */}
                <View style={styles.row}>
                    <Text style={styles.label}>City</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder='City'
                        value={city}
                        onChangeText={setCity}
                    /> 
                </View>
                <ButtonEl
                    text="CheckOut"
                    onPress={onCheckOut}
                />
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default AddressScreen