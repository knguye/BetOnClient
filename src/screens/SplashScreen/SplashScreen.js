import React, { useState } from 'react';
import {ActivityIndicator, Image, View} from 'react-native';
import styles from './styles';
import { colors } from '../../utilities/commonStyles';

/*  Features to add TODO:
    1. Add animation circular loading to splash screen
*/

export default function SplashScreen({navigation}){
    return (
        <View style={styles.container}>
           <Image 
                style={styles.logo}
                source={require('../../../assets/logo.png')}/> 
            <ActivityIndicator size="large" color={colors['red']}/>
        </View>
    )
}