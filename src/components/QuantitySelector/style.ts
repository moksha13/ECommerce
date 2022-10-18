import { StyleSheet } from "react-native";
 
const styles = StyleSheet.create({
    root:{
        flexDirection:'row',
        alignItems:'center',
        borderWidth:1,
        borderColor:'#e3e3e3',
        justifyContent:'space-between',
        width:90,

    },
    button:{
        width:25,
        height:25,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#d1d1d1'
    },
    buttonText:{
        fontSize:17
    },
    quantity:{
        color:'#007eb9',

    }
})

export default styles