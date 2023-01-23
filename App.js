import 'react-native-gesture-handler';
import React, { createContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, HomeScreen, RegistrationScreen } from './src/screens';
import { decode, encode } from 'base-64';
if (!global.btoa) { global.btoa = encode }
if (!global.atob) { global.atob = decode }
import { firebase } from './src/firebase/config';

import * as SecureStore from 'expo-secure-store';
import { useSelector, useDispatch, Provider } from 'react-redux'
import { changeUser, 
          clearUser, 
          selectUserToken,
          selectCount } from './src/features/users/usersSlice';
import store from './src/store';
//require('dotenv').config();

// Utilities
import {LogoutButton} from './src/utilities/buttons';

const Stack = createStackNavigator();

export default function AppWrapper() {
  return (
    <Provider store={store}>
      <App/>
    </Provider>
  )
}



export function App() {
  
  // Redux State
  const userToken = useSelector((state) => state.users.id);
  const user = useSelector((state) => state.users);

  const dispatch = useDispatch();

  // Component States
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log(`USER: \n\n ${JSON.stringify(user)}`)

        const uid = user.uid; // Get user ID from firebase authentication
        
        // Get user information from user id
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
            const userData = value;
            if (userData.id != uid){
                setLoading(false);
                dispatch(clearUser());
                return;
            }
            dispatch(changeUser(userData));
            setLoading(false);
        })
        .catch ((err) => {
            setLoading(false);
            //alert(err); // TODO: Fix JSON parse error.. shows up even if it works.. peerplexing
        });
      }
      else {
          setLoading(false)
      }
    });
  }, []);

  if (loading) {
    return (
      <></>
    )
  }
  return (
      <NavigationContainer>
        <Stack.Navigator>
          { userToken ? (
            <Stack.Screen name='HomeScreen' options={ {
              headerRight: () => <LogoutButton></LogoutButton>
            }}>
              { props => <HomeScreen {...props} extraData={user} /> }
            </Stack.Screen>
          ) : (
            <>
              <Stack.Screen name='LoginScreen' component={LoginScreen} options={ {
              headerRight: () => <LogoutButton></LogoutButton>
              }}/>
              <Stack.Screen name='RegistrationScreen' component={RegistrationScreen} headerBackVisible={true}/>
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>

  )
}