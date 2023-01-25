import React, { useEffect, useState } from 'react'
//import { FlatList, Keyboard, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native'
import { FlatList, Keyboard, TouchableOpacity, ScrollView } from 'react-native';
import { View, TextField, Text, Button, Carousel, Card } from 'react-native-ui-lib';

import styles from './styles'
import { Panel } from '../../utilities/commonViews';
import { colors } from '../../utilities/commonStyles';

import { firebase } from '../../firebase/config';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
//require('dotenv').config();

export default function HomeScreen(props) {
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