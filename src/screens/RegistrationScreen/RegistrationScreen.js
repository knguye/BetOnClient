import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { firebase } from '../../firebase/config';
//require('dotenv').config();

// Global State
import { useSelector, useDispatch } from 'react-redux'
import { changeUser } 
            from '../../features/users/usersSlice';
import store from '../../store';

export default function RegistrationScreen({navigation}) {
    const userToken = useSelector((state) => state.users.value);
    const dispatch = useDispatch();

    const [fullname, setFullname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const onFooterLinkPress = () => {
        navigation.navigate('LoginScreen');
    }

    const onRegisterPress = () => {
        if (password !== confirmPassword){
            alert (`Passwords don't match.`);
            return;
        }

        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then ((response) => {
                const [ id, email ] = [ response.user.uid, response.user.email ];
                
                // Add more data for users?
                const data = {
                    "id": id,
                    "email": email,
                    "fullname": fullname,
                };
                // TODO: Replace localhost with ${process.env.APP_SERVER} when uploading to render
                
                console.log(`Creating user with ID ${id}, \nbody: ${JSON.stringify(data)}`)
            
                fetch('https://bet-on-server.onrender.com/users', {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json",
                        "Accept": "*/*",
                    },
                    body: JSON.stringify(data),
                    json: true,
                })
                .then((response) => {
                    console.log(`successful creation for ${id}`) 
                    return response.json();
                })
                .then((value) => {
                    dispatch(changeUser(data));
                    navigation.navigate('HomeScreen', data);
                })
                .catch((err) => {
                    alert(err);
                    console.log(err); // TODO: FIX THIS FROM HAPPENING
                })
                
            })
            .catch((err) => {
                alert(err);
            });
    }

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
                <Image
                    style={styles.logo}
                    source={require('../../../assets/icon.png')}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Full Name'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setFullname(text)}
                    value={fullname}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder='E-mail'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='Password'
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='Confirm Password'
                    onChangeText={(text) => setConfirmPassword(text)}
                    value={confirmPassword}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onRegisterPress()}>
                    <Text style={styles.buttonTitle}>Create account</Text>
                </TouchableOpacity>
                <View style={styles.footerView}>
                    <Text style={styles.footerText}>Already got an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Log in</Text></Text>
                </View>
            </KeyboardAwareScrollView>
        </View>
    )
}