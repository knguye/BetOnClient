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

import { REACT_APP_SERVER_API } from '@env'
import { toggleLoading } from '../../features/status/statusSlice';

const serverDomain = REACT_APP_SERVER_API;

/*  Features to add TODO:
    1.  Client side validation before firebase auth does (display warnings before submit)
    2.  Parsing information to get appropriate format
    3.  Disable registration on validation fail
*/

export default function RegistrationScreen({navigation}) {
    const userToken = useSelector((state) => state.users.value);
    const dispatch = useDispatch();

    const [fullname, setFullname] = useState('')
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [phoneNumber, setPhoneNumber] = useState(''); // TODO: Parse out dashes and symbols (+) in Phone #

    const onFooterLinkPress = () => {
        navigation.navigate('LoginScreen');
    }

    const registerUserOnFirebaseAndDB = () => {
        dispatch(toggleLoading(true));

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
                "username": username,
                "phone_number": phoneNumber,
            };
            console.log(`Creating user with ID ${id}, \nbody: ${JSON.stringify(data)}`)
        
            fetch(`${serverDomain}/users`, {
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
                //dispatch(toggleLoading(false));
                //navigation.navigate('HomeScreen', data);
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


    const onRegisterPress = () => {
        if (password !== confirmPassword){
            alert (`Passwords don't match.`);
            return;
        }

        // Check if a user already exists with that username.
        fetch(`${serverDomain}/username/${username}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "Accept": "*/*",
            },
        })
        .then ((response) => {
            console.log(`Checking if user ${username} exists..`);
            return response.json();
        })
        .then((value) => {
            if (value.userExists == true){
                alert("This username is already taken!"); // TODO: Change to text on screen instead of alert.
                return true;
            }
            return false;
        })
        .then((userExists) => {
            if (!userExists){
                registerUserOnFirebaseAndDB(); 
            }
        })
        .catch (err => {
            console.log(err);
        }) 
    }

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
                <Image
                    style={styles.logo}
                    source={require('../../../assets/logo.png')}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Username'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setUsername(text)}
                    value={username}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                    autoComplete='username'
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
                    autoComplete='email'
                />
                <TextInput
                    style={styles.input}
                    placeholder='Phone Number'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setPhoneNumber(text)}
                    value={phoneNumber}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                    autoComplete='tel'
                    inputMode='tel'
                    maxLength={10}
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