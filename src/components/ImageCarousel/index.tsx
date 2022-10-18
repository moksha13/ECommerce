import React, { useState , useCallback} from "react";
import {Text, View, FlatList, Image, StyleSheet, Dimensions, useWindowDimensions} from 'react-native';


const ImageCarousel = ({images}:{images:string[]}) =>{
    const windowWidth = useWindowDimensions().width
    const[activeIndex, setActiveIndex] = useState(0);

    const onFlatlistUpdate = useCallback(({viewableItems})=>{
        if(viewableItems>0){
            setActiveIndex(viewableItems[0].index || 0)
        }
        console.log(viewableItems);
        
    },[])

    return(
        <View>
            <FlatList 
                data = {images}
                renderItem={({item})=>(
                    <Image style={[styles.image,{width:windowWidth-40}]} source={{uri:item}}/>
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToInterval={windowWidth-20}
                snapToAlignment={'center'}
                decelerationRate={"fast"}
                viewabilityConfig={{
                    itemVisiblePercentThreshold:50,
                }}
                onViewableItemsChanged={onFlatlistUpdate}
            />
            <View style={styles.container}> 
                {images.map((image,index)=>(
                    <View key={index.toString()} style={[styles.dot,{backgroundColor:index===activeIndex?'#c9c9c9':'#ededed'}]}/>
                ))}
            </View>
        </View>
    )
}

export default ImageCarousel
const styles = StyleSheet.create({
    root:{

    },
    image:{
        height:250,
        resizeMode:'contain',
        margin:10,
        backgroundColor:'white'
    },
    dot:{
        width:10,
        height:10,
        borderRadius:10,
        borderWidth:1,
        borderColor:'#c9c9c9',
        backgroundColor:'#e0e0e0',
        margin:5
    },
    container:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    }
})