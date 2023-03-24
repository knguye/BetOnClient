import React, { useState } from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch, useSelector } from 'react-redux';

import { firebase } from '../../firebase/config'

import { REACT_APP_SERVER_API } from '@env'
//require('dotenv').config();

import { changeUser } 
            from '../../features/users/usersSlice';
import { toggleLoading } from '../../features/status/statusSlice';
import { dummyUser } from '../../../__globals__';

import styles from './styles';
import { commonStyles } from '../../utilities/commonStyles';


/*  Features to add TODO:
    1.  Google login
    2.  Apple login
    3.  Facebook Login
    4.  Wake up server on login
*/

export default function LoginScreen({navigation}){
    const serverDomain = REACT_APP_SERVER_API;
    const userToken = useSelector((state) => state.users.id);
    const dispatch = useDispatch();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onFooterLinkPress = () => {
        navigation.navigate('RegistrationScreen');
    }

    function LogUserInWithCredentials(uid, user){
        if (user.id != uid && !dummyUser){
            console.error('User does not exist!');
            return;
        }
        console.log(`Logging in ${uid}`)
        //storeInLocalStorage(['id', 'first_name', 'last_name'], [user.id, user.first_name, user.last_name]);
        dispatch(changeUser(user));        
    }

    // Firestore method
    const onLoginPress = () => {
        console.log("API address: " + serverDomain);
        dispatch(toggleLoading(true));

        if (dummyUser){ 
            LogUserInWithCredentials("test", dummyUser);
            dispatch(toggleLoading(false));
        }
        else {
            firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid; // Get UID from response
                
                fetch(`${serverDomain}/id/${uid}`, {
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
                })
                .then(() => {
                    dispatch(toggleLoading(false));
                })
                .catch ((err) => {
                    alert(err);
                });
            })
            .catch(error => {
                alert(error);
            })
        }
        
    }

    return (
        <View style={commonStyles.container}>
            <KeyboardAwareScrollView
                style={ { flex: 1, width: '100%'} }
                keyboardShouldPersistTaps="always">
                <Image
                    style={styles.logo}
                    source={require('../../../assets/logo.png')} />    
                <TextInput
                    style={commonStyles.input}
                    placeholder='E-mail'
                    placeholderTextColor={"#aaaaaa"}
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    underlineColorAndroid={"transparent"}
                    autoCapitalize='none'/>
                <TextInput
                    style={commonStyles.input}
                    secureTextEntry
                    placeholder='Password'
                    placeholderTextColor={"#aaaaaa"}
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    underlineColorAndroid={"transparent"}
                    autoCapitalize='none'/>
                <TouchableOpacity
                    style={{...commonStyles.button, ...styles.button,}}
                    onPress={() => onLoginPress()}>
                    <Text style={{...commonStyles.buttonText, ...styles.buttonText}}>Log in</Text>
                </TouchableOpacity>
                <View style={commonStyles.footerView}>
                    <Text style={commonStyles.footerText}>
                        Don't have an account? 
                        <Text onPress={() => onFooterLinkPress()} style={commonStyles.footerLink}> Sign up</Text>
                    </Text>
                </View>
            </KeyboardAwareScrollView>
        </View>
    )
}