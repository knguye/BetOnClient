import React, { useState } from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './styles';

/*  Features to add TODO:
    1. Add animation circular loading to splash screen
*/

export default function SplashScreen({navigation}){
    return (
        <View style={styles.container}>
           <Image 
                style={styles.logo}
                source={require('../../../assets/logo.png')}/> 
        </View>
    )
}