import React, { useEffect, useState } from 'react'
import { View, Text, Card} from 'react-native-ui-lib';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { ScrollView } from 'react-native';
import styles from './styles';
import { Icon, Panel, BetPanel } from '../../utilities/commonViews';
import { colors } from '../../utilities/commonStyles';

import { useSelector } from 'react-redux';

export default function ProfileScreen() {
    const user = useSelector((state) => state.users);

    console.log(user);

    // TODO: Get bet info for 4 latest bets (order by timestamp)

    /*
        Get top 4 recent bets with user ID == owner.ID, order by created_at DESC
        Map out BetPanel elements with information
        Don't show username on bets
    */

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView style={styles.profile}>
                <View style={styles.profileHeader}>
                    <Icon size={50} name={'profile'} style= {styles.profilePicture}></Icon>
                    <Text style={styles.profileTitle}>{user.username}</Text>
                </View>
                <ScrollView horizontal style={styles.recentBets}>
                    <BetPanel info={'Hi'}></BetPanel>

                    
                </ScrollView>
                <View style={styles.userFeed}>

                </View>
            </KeyboardAwareScrollView>
        </View>
    )
}