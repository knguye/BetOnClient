import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, HomeScreen, RegistrationScreen, SplashScreen } from './src/screens';

import { decode, encode } from 'base-64';
if (!global.btoa) { global.btoa = encode }
if (!global.atob) { global.atob = decode }

import { firebase } from './src/firebase/config';

import { useSelector, useDispatch, Provider } from 'react-redux'
import { changeUser, 
          clearUser } from './src/features/users/usersSlice';
import store from './src/store';

import {REACT_APP_SERVER_API} from '@env';

// Utilities
import { colors } from './src/utilities/commonStyles';
import { LogoTitle } from './src/utilities/commonViews';
import {LogoutButton} from './src/utilities/buttons';
import { toggleLoading } from './src/features/status/statusSlice';

const Stack = createStackNavigator();
const serverDomain = REACT_APP_SERVER_API;

export default function AppWrapper() {
  return (
    <Provider store={store}>
      <App/>
    </Provider>
  )
}

export function App() {
  const userToken = useSelector((state) => state.users.id);
  const user = useSelector((state) => state.users);
  const loading = useSelector((state) => state.status.loading);


  const dispatch = useDispatch();

  // Component States
  //const [loading, setLoading] = useState(true);

 
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      dispatch(toggleLoading(true));
      console.log("User changed");
      if (user) {
        const uid = user.uid; // Get user ID from firebase authentication
        
        // Get user information from user id
        fetch(`${serverDomain}/id/${uid}`, {
          method: "GET",
          headers: {
              "Content-type": "application/json",
              "Accept": 'application/json'
          }
        })
        .then((response) => {
            return response.json();
        })
        .then ((value) => {
            const userData = value;
            if (userData.id != uid){
                dispatch(toggleLoading(false));
                dispatch(clearUser());
                return;
            }
            dispatch(changeUser(userData));
        })
        .catch ((err) => {
            dispatch(toggleLoading(false));
            //console.log(err);
        });
      }
      else {
          dispatch(toggleLoading(false));
      }
    });
  }, []);


  if (loading) {
    return (
      <SplashScreen></SplashScreen>
    )
  }

  return (
      <NavigationContainer>
        <Stack.Navigator>
          { userToken ? (
              <Stack.Screen name='Home'
                options={ {
                  headerRight: () => <LogoutButton></LogoutButton>,
                  headerStyle: {
                    backgroundColor: colors['red'],
                    borderBottomWidth: 0,
                    height: 100
                  },
                  headerTintColor: colors['lightgrey'],
                  headerTitle: (props) => <LogoTitle {...props}/>,
                  headerTitleAlign: 'center',
                }}>
                { props => <HomeScreen {...props} /> }
              </Stack.Screen>
          ) : (
            <>
              <Stack.Screen name='LoginScreen' component={LoginScreen} 
                options={ {
                  headerShown: false
                }} />
              <Stack.Screen name='RegistrationScreen' component={RegistrationScreen} headerBackVisible={true} options={ {
                headerShown: false
              }}/>
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
  )
}