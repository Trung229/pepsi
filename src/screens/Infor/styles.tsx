import {
    StyleSheet,
} from 'react-native';

const styleContainer = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative",
    },
    imgTitle: {
        width: "100%",
        height: 30,
        resizeMode: "contain",
        marginTop: 30
    },
    containerBody: {
        backgroundColor: '#004F9D',
        flex: 1,
        padding: 10,
        marginTop: 20
    },
    headerText: {
        color: '#84E5FF',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 6
    },
    address: {
        flexDirection: 'row',
        width: "100%",
        marginTop: 10,
        justifyContent: 'space-between',
    },
    inputCity: {
        flex: 0.5,
    },
    inputDistrict: {
        flex: 0.5,
        borderColor: '#00355A',
        borderWidth: 1,
    },
    textLabel: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#ffffff',
        marginTop: 5,
        marginBottom: 5,

    },
    containerItem: {
        padding: 5
    },
    agencyName: {
        color: "#00355A",
        fontSize: 14
    },
    addressName: {
        color: "#5499AB",
    },
    line: {
        height: .5,
        width: "90%",
        backgroundColor: "#429ACE",
        marginTop: 10,
        marginBottom: 10,
        alignSelf: 'center'
    },
    containerInfoCustomer: {

    },
    inputField: {
        backgroundColor: "#fff",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#00355A",
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 5,
        paddingBottom: 5,
    },
    containerInfoCustomer1: {
        display: "flex",
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        marginTop: 6,
        marginBottom: 6,
    },
    iconStyle: {
        position: "absolute",
        right: 10,
        top: 10,
    },
    infoParty: {
        backgroundColor: "#0d5ea7",
        borderWidth: 1,
        borderColor: "#358bc4",
        borderRadius: 6,
        padding: 10,
    },
    imgIcon: {
        position: "absolute",
        left: 10,
        top: 8,
        zIndex:100
    },
    straightLine:{
        width:0.8,
        height:"80%",
        backgroundColor:"#0d5ea7",
        position: "absolute",
        zIndex:10,
        left: 45,
        alignSelf:"center",
    },
    pillarLeft:{
        position: "absolute",
        left:-6,
        resizeMode:"contain",
        top: 70,
        height:540
    },
    pillarRight:{
        position: "absolute",
        right:-6,
        resizeMode:"contain",
        top: 70,
        height:540
    },
    iceLeft:{
        position: "absolute",
        left:-6,
        resizeMode:"contain",
        bottom: -3,
    },
    iceRight:{
        position: "absolute",
        right:-6,
        resizeMode:"contain",
        bottom: -3,
    }
    
})

export default styleContainer;