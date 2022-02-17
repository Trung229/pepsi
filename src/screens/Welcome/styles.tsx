import {
    StyleSheet,
} from 'react-native';

const styleContainer = StyleSheet.create({
    container:{
        flex: 1,
        position:"relative",
        alignItems: "center"
    },
    imgTitle:{
        width: "100%",
        height:90,
        resizeMode: "contain",
        marginTop:30
    },
    buttonSignIn:{
        width: "100%",
        height:50,
        marginTop:60,
        resizeMode: "contain"

    }
})

export default styleContainer;