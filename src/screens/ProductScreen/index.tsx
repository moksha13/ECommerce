import React, {useState} from "react";
import {View,Text,ScrollView, FlatList,} from 'react-native'
import { Picker } from "@react-native-picker/picker";
import { useRoute } from "@react-navigation/native";
import styles from "../../components/ProductItem/styles";
import product from "../../AmazonAssets/data/product";
import QuantitySelector from "../../components/QuantitySelector";
import ButtonEl from "../../components/ButtonEl";
import ImageCarousel from "../../components/ImageCarousel";


const ProductScreen = ()=>{

    const [selectedOption,setSelectedOption] = useState(product.options?product.options[0]:null)
    console.log(selectedOption);
    const [quantity, setQuantity] = useState(1)

    const route = useRoute();
    console.log(route.params);
    
    
    return(
        <ScrollView style={{padding:10,backgroundColor:'white'}}>
            <Text style={styles.title}>{product.title}</Text>
            {/* Image corosal */}
            <ImageCarousel images={product.images}/>
            {/* option selector */}
            <Picker
                selectedValue={selectedOption}
                onValueChange={(itemValue) =>
                    setSelectedOption(itemValue)
                }
            >
                {product.options.map((option,key)=>(
                    <Picker.Item label={option} value={option} key={key}/>
                ))}
                
            </Picker>

            {/* price  */}
            <Text style={styles.price}>from ${product.price}
                {product.oldPrice && (
                    <Text style={styles.oldPrice}>${product.oldPrice}</Text>
                )}
            </Text>

            {/* Description  */}
            <Text style={styles.description}>{product.description}</Text>

            {/* Quantity selector */}
            <QuantitySelector quantity={quantity} setQuantity={setQuantity}/>

            {/* Buttons */}
            <ButtonEl 
                text={'Add to Cart'} 
                onPress={()=>{console.warn('Add to Cart')}}
                containerStyles={{backgroundColor:'#e3c905'}}
            />
            <ButtonEl 
                text={'Buy Now'} 
                onPress={()=>{console.warn('Buy Now')}}
            />
            
        </ScrollView>
    )
}

export default ProductScreen