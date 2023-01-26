import React, { useEffect, useState } from 'react'
import { View, Text, Card } from 'react-native-ui-lib';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from './styles';

import { useSelector } from 'react-redux';

export default function ProfileScreen() {
    const user = useSelector((state) => state.users);

    console.log(user);

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView>
                <View>
                    <Image></Image>
                    <Text></Text>
                </View>
                <View>

                </View>
            </KeyboardAwareScrollView>
        </View>
    )
}