import React from 'react';
import {
    Text,
    View,
    ImageBackground,
    Image,
    ActivityIndicator,
    BackHandler,
    ScrollView
} from 'react-native';
import { SIGN_IN_SUCCESS, CONTENT_SUCCESS, BACKGROUND_SUCCESS } from '../../utils/constant'
import { useSelector, useDispatch } from 'react-redux'


const SuccessScreen = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Image source={BACKGROUND_SUCCESS} style={{ resizeMode: 'cover', width: "100%", height: "100%" }} />
                <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={SIGN_IN_SUCCESS} style={{ resizeMode: 'contain' }} />
                    <Image source={CONTENT_SUCCESS} style={{ width: '90%', height: '90%', resizeMode: 'contain' }} />
                </View>
        </View>
    )
}

export default SuccessScreen;