import React, { useEffect, useState } from 'react'
import { View, ScrollView, SafeAreaView } from 'react-native';
import { Text, Card } from 'react-native-ui-lib';

import styles from './styles'
import { colors } from '../../utilities/commonStyles';
import { Icon, BetPanel, SocialPanel } from '../../utilities/commonViews';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { ProfileScreen, CreateBetScreen, BalancesScreen, MyBetsScreen } from '../';

//require('dotenv').config();

const Tab = createBottomTabNavigator();

export function HomeContents() {
    return (
        
        <KeyboardAwareScrollView automaticallyAdjustContentInsets={false} 
                                    horizontal={false} 
                                        style={{backgroundColor: colors['black']}}
                                            contentContainerStyle={{alignItems: 'center'}}>
            <View style={{flex: 1}}>
            <Text style={styles.sectionHeader}>Hot Bets</Text>
                <ScrollView padding-page
                                    horizontal={true} 
                                        style={styles.showcase}>
                    <BetPanel info={'test12'}></BetPanel>
                    <BetPanel info={'Hi'}></BetPanel>
                    <BetPanel info={'Hi'}></BetPanel>
                    <BetPanel info={'Hi'}></BetPanel>
                </ScrollView>
            </View>
            <SocialPanel></SocialPanel>
            <SocialPanel></SocialPanel>
        </KeyboardAwareScrollView>
        
    )
}

export default function HomeScreen(props) {

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