import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native';
import { View, Text, Card } from 'react-native-ui-lib';

import styles from './styles'
import { colors } from '../../utilities/commonStyles';
import { Icon } from '../../utilities/commonViews';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { ProfileScreen } from '../';

//require('dotenv').config();

const Tab = createBottomTabNavigator();

export function HomeContents() {
    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView>
            <ScrollView padding-page horizontal style={
                {
                    marginVertical: 10
                }
            }>
                <Card height={150} width={300} enableShadow={false} containerStyle={
                    {
                        marginHorizontal: 10,
                        borderRadius: 6,
                        backgroundColor: colors['darkgrey'],
                    }
                } center padding-card marginB-s4>
                    <Text color={colors['white']} body>Test</Text>
                </Card>
                <Card height={150} width={300} enableShadow={false} containerStyle={
                    {
                        marginHorizontal: 10,
                        borderRadius: 6,
                        backgroundColor: colors['darkgrey'],
                    }
                } center padding-card marginB-s4>
                    <Text color={colors['white']} body>Test</Text>
                </Card>
            </ScrollView>

            </KeyboardAwareScrollView>
        </View>
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

        </Tab.Navigator>
    )
}