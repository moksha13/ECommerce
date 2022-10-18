import React from "react";
import {Text, View, StyleSheet, Image, Pressable} from 'react-native'
import { useNavigation } from "@react-navigation/native";
import Star from 'react-native-vector-icons/FontAwesome';
import styles from "./styles";



interface ProductItemProps{
    item:{
        id:string;
        title:string;
        image:string;
        avgRating:number;
        ratings:number;
        price:number
        oldPrice?:number
    };
    
    
}
const ProductItem = ({item}:ProductItemProps)=>{
    const navigation = useNavigation()
    const onPress =()=>{
        navigation.navigate('ProductDetails',{id:item.id})
    }

    return(
        
        /* render product component */
        <Pressable style={styles.root} onPress={onPress}>
            <Image source={{uri:item.image}} style={styles.image}/>
            <View style={styles.rightContainer}>
                <Text style={styles.title} numberOfLines={3}>{item.title}</Text>
                <View style={styles.ratingContainer}>
                    {[0,0,0,0,0].map((el, i)=>
                        <Star 
                            key = {`${item.id}-${i}`}
                            style={styles.star} 
                            name={ i < Math.floor(item.avgRating)?'star':'star-o'}
                            size={18} 
                            color='#e47911'
                        />)
                    }
                    
                    <Text>{item.ratings}</Text>
                </View>
                <Text style={styles.price}>from ${item.price}
                    {item.oldPrice && (
                        <Text style={styles.oldPrice}>${item.oldPrice}</Text>
                    )}
                </Text>
            </View>
        </Pressable>
            
        
    )
}

export default ProductItem