import React from 'react';
import {
    Text,
    View,
    ImageBackground,
    Image,
    TouchableOpacity
} from 'react-native';

import Layout from '../../layout/index'
import { DRINK, WELCOME_TITLE, BUTTON_SIGN_IN } from '../../utils/constant'
import styles from './styles'

interface subNavigation {
    navigate: (where:string, params?:string) => void;
}

interface typeProps {
    navigation: subNavigation;
}


const handleNavigation = (myEvent:subNavigation) =>{
    myEvent.navigate("Info");
}


const WelcomeScreen = (prop:typeProps) => {
    const {navigation} = prop
    
    return (
        <Layout title="Welcome">
            <View style={styles.container}>
                <Image source={WELCOME_TITLE} style={styles.imgTitle} />
                <Image source={DRINK} />
                <TouchableOpacity onPress={() => handleNavigation(navigation)}>
                    <Image style={styles.buttonSignIn} source={BUTTON_SIGN_IN} />
                </TouchableOpacity>
            </View>
        </Layout>
    )
}

export default WelcomeScreen;