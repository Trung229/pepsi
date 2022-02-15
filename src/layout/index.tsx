import React from 'react';
import {
    Text,
    View,
    ImageBackground,
    Image
} from 'react-native';

import { BACKGROUND_MOBILE, NAV_MOBILE } from '../utils/constant'
import styles from './styles'


interface LayoutReceive {
    children:{},
    title: string
}


const Layout = (prop:LayoutReceive) =>{
    return (
        <View style={styles.container}>
             <ImageBackground source={BACKGROUND_MOBILE} style={styles.imgBackground}>
                 <Image source={NAV_MOBILE}/>
                {prop.children}
             </ImageBackground>
        </View>
    )
}

export default Layout;