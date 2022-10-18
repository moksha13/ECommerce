import React from "react";
import {View, StyleSheet, FlatList} from 'react-native'
import ProductItem from "../../components/ProductItem";
import products from '../../AmazonAssets/data/products'

const HomeScreen = ({searchValue}:{searchValue:string})=>{
    console.log(searchValue);
    
    return(
        <View style={styles.page}>
            {/* render product component */}
            <FlatList
                data={products}
                renderItem={({item})=><ProductItem item={item}/>}
                keyExtractor={({id})=>id}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    page:{
        padding:10,

    },
})

export default HomeScreen
