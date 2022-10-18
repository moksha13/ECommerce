import React from "react";
import { Text, View, StyleSheet, FlatList, Pressable
 } from "react-native";
import { useNavigation } from "@react-navigation/native";
import cart from "../../AmazonAssets/data/cart";
import CartProductItem from "../../components/CartProductItem ";
import ButtonEl from "../../components/ButtonEl";


const ShoppingCartScreen = ()=>{

    const totalPrice = cart.reduce((summedPrice, cart)=>(
        summedPrice+cart.item.price*cart.quantity
    ),0)
     
    const navigation = useNavigation()

    const onCheckOut = ()=>{
        navigation.navigate('Address');
    }

    return(
        <View style={styles.page}>
            
            <FlatList 
                data={cart}
                renderItem={({item})=><CartProductItem cartItem={item}/>}           
                showsVerticalScrollIndicator={false}
                keyExtractor={({id})=>id}
                ListHeaderComponent={()=>(
                    <View>
                        <Text style={{fontSize:18}}>
                            Subtotal ({cart.length} items):{' '}
                            <Text style={{color:'#e47911', fontWeight:'bold'}}>
                                ${totalPrice.toFixed(2)}
                            </Text>
                        </Text>

                        <ButtonEl 
                            text="Proceed to check out" 
                            onPress={onCheckOut}
                            containerStyles={{backgroundColor:'#f7e300', borderColor:'#c7b702'}}
                        />
                    </View>
                )}
            />

        </View>
        

    )
}

const styles=StyleSheet.create({
    page:{
        margin:10
    }
})

export default ShoppingCartScreen