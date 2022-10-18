import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    page:{
        padding:10,

    },
    root:{
        flexDirection:'row',
        //margin:10,
        borderWidth:1,
        borderColor:'#d1d1d1',
        borderRadius:10,
        backgroundColor:'#ffffff',
        marginVertical:5

    },
    image:{
        height:150,
        flex:2,
        resizeMode:'contain',
    },
    rightContainer:{
        padding:10,
        flex:3
    },
    title:{
        fontSize:18,
    },
    ratingContainer:{
        flexDirection:'row',
        alignItems:'center',
        marginVertical:5,
    },
    star:{
        margin:2,
    },
    price:{
        fontSize:18,
        fontWeight:'bold'
    },
    oldPrice:{
        fontSize:12,
        fontWeight:'normal',
        textDecorationLine:'line-through'
    }
})

export default styles