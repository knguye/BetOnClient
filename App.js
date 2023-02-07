import 'react-native-gesture-handler';
import React, { createContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, HomeScreen, RegistrationScreen, SplashScreen, BetDetailsScreen } from './src/screens/index'

import { decode, encode } from 'base-64';
if (!global.btoa) { global.btoa = encode }
if (!global.atob) { global.atob = decode }
import { firebase } from './src/firebase/config';

import { colors } from './src/utilities/commonStyles';
import { LogoTitle } from './src/utilities/commonViews';

import { useSelector, useDispatch, Provider } from 'react-redux'
import { changeUser, 
          clearUser } from './src/features/users/usersSlice';
import store from './src/store';
import {REACT_APP_SERVER_API} from '@env';

// Utilities
import {LogoutButton} from './src/utilities/buttons';

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
  
  // Redux State
  const userToken = useSelector((state) => state.users.id);
  const user = useSelector((state) => state.users);
  

  const dispatch = useDispatch();

  // Component States
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    
    firebase.auth().onAuthStateChanged(user => {
      setLoading(true);
      if (user) {
        console.log(`USER: \n\n ${JSON.stringify(user)}`)

        const uid = user.uid; // Get user ID from firebase authentication
        
        // Get user information from user id
        fetch(`${serverDomain}/users/${uid}`, {
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
            //console.log(userData);
            setLoading(false);
            navigator.navigate('HomeScreen');
        })
        .catch ((err) => {
            setLoading(false);
            console.log(err);
        });
      }
      else {
          setLoading(false);
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
            <>
              <Stack.Screen name='HomeScreen' options={ {
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

              <Stack.Screen name="Bet Details" component={BetDetailsScreen} options={ {
                headerShown: false
              }}>

              </Stack.Screen>
              </>
          ) : (
            <>
              <Stack.Screen name='LoginScreen' component={LoginScreen} options={ {
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