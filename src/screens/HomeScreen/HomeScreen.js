import React, { useEffect, useState } from 'react'
import { View, ScrollView, SafeAreaView } from 'react-native';
import { Text, Card } from 'react-native-ui-lib';

import styles from './styles'
import { colors } from '../../utilities/commonStyles';
import { Icon, BetPanel, SocialPanel } from '../../utilities/commonViews';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {ProfileScreen, CreateBetScreen, BalancesScreen, MyBetsScreen, BetDetailsScreen} from '../index';

import { useDispatch, useSelector } from 'react-redux';
import { toggleLoading } from '../../features/status/statusSlice';

//require('dotenv').config();

/*  Features to add TODO:
    1. Community posts/bets (set up table in backend)
    2. Hot local bets
    3. Ongoing bets
*/

const Tab = createBottomTabNavigator();

export function HomeContents() {
    return (
        <KeyboardAwareScrollView automaticallyAdjustContentInsets={false} 
                                    horizontal={false} 
                                        style={{backgroundColor: colors['bg']}}
                                            contentContainerStyle={{alignItems: 'center'}}>
            <View style={{flex: 1}}>
            <Text style={styles.sectionHeader}>Ongoing Bets</Text>
                <ScrollView padding-page
                                    horizontal={true} 
                                        style={styles.showcase}>
                    <BetPanel bgEnabled={true}></BetPanel>
                    <BetPanel bgEnabled={true}></BetPanel>
                    <BetPanel bgEnabled={true}></BetPanel>
                    <BetPanel bgEnabled={true}></BetPanel>
                </ScrollView>
            </View>
            <SocialPanel></SocialPanel>
            <SocialPanel></SocialPanel>
        </KeyboardAwareScrollView>
        
    )
}

export default function HomeScreen({stateChanger, props}) {
    const userToken = useSelector((state) => state.users.id);
    const dispatch = useDispatch();
    
    useEffect(() => {
        console.log("user ID: " + userToken);
    }, []);

    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeContents} 
                options={ {
                    headerShown: false,
                    tabBarIcon: () => <Icon name={'home'}></Icon>
                } }
            ></Tab.Screen>
            <Tab.Screen name="Profile" component={ProfileScreen}
                options={ {
                    headerShown: false,
                    tabBarIcon: () => <Icon name={'profile'}></Icon>
                } }
            ></Tab.Screen>
            <Tab.Screen name="Make a bet" component={CreateBetScreen}
                options={ {
                    headerShown: false,
                    tabBarIcon: () => <Icon name={'create'}></Icon>
                } }
            ></Tab.Screen>
            <Tab.Screen name="Balances" component={BalancesScreen}
                options={ {
                    headerShown: false,
                    tabBarIcon: () => <Icon name={'balances'}></Icon>
                } }
            ></Tab.Screen>
            <Tab.Screen name="My Bets" component={MyBetsScreen}
                options={ {
                    headerShown: false,
                    tabBarIcon: () => <Icon name={'mybets'}></Icon>
                } }
            ></Tab.Screen>
        </Tab.Navigator>
    )
}