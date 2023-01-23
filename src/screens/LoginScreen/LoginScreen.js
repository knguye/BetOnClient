import React, {useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';

import { firebase } from '../../firebase/config'
//require('dotenv').config();

import { changeUser } 
            from '../../features/users/usersSlice';


export default function LoginScreen({navigation}){
    // TODO: Use route.params to get navigation params passed, use JSON.stringify() to get the data displayed
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onFooterLinkPress = () => {
        navigation.navigate('RegistrationScreen');
    }

    // Firestore method
    const onLoginPress = () => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid; // Get UID from response
            
                fetch(`https://bet-on-server.onrender.com/users/${uid}`, {
                    method: "GET",
                    headers: {
                        "Content-type": "application/json"
                    }
                })
                .then((response) => {
                    return response.json();
                })
                .then ((value) => {
                    const user = value;
                    if (user.id != uid){
                        alert('User does not exist!');
                        return;
                    }
                    // TODO: Set redux state usertoken to ID
                    dispatch(changeUser(user));
                    navigation.navigate('HomeScreen', user);
                })
                .catch ((err) => {
                    alert(err);
                });
            })
            .catch(error => {
                alert(error);
            })
    }

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={ { flex: 1, width: '100%'} }
                keyboardShouldPersistTaps="always">
                <Image
                    style={styles.logo}
                    source={require('../../../assets/logo.png')} />    
                <TextInput
                    style={styles.input}
                    placeholder='E-mail'
                    placeholderTextColor={"#aaaaaa"}
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    underlineColorAndroid={"transparent"}
                    autoCapitalize='none'/>
                <TextInput
                    style={styles.input}
                    secureTextEntry
                    placeholder='Password'
                    placeholderTextColor={"#aaaaaa"}
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    underlineColorAndroid={"transparent"}
                    autoCapitalize='none'/>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onLoginPress()}>
                    <Text style={styles.buttonTitle}>Log in</Text>
                </TouchableOpacity>
                <View style={styles.footerView}>
                    <Text style={styles.footerText}>
                        Don't have an account? 
                        <Text onPress={() => onFooterLinkPress()} style={styles.footerLink}> Sign up</Text>
                    </Text>
                </View>
            </KeyboardAwareScrollView>
        </View>
    )
}