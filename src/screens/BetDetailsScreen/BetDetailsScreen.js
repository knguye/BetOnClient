import { useState } from 'react';
import { useSelector } from 'react-redux';
import { OptionButtonArray } from '../../utilities/buttons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { View, Text } from 'react-native';

import * as styles from './styles'

export default function BetDetailsScreen({route, navigation}){
    const currentBet = route.params;
    
    /*
        Get the appropriate bet from Redux state by ID,
        if not found, query for it in db,
        if not found, return a 404
    */

    // TODO: Get current bet ID/info
    // TODO: Set up collapsible participants with info
    // TODO: Set up submitting + wager + option
    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView style={styles.profile}>
                <View>
                    <Text style={styles.titleField}>{currentBet.title}</Text>
                </View>
                <View>
                    
                </View>
                <View>

                </View>
                <View>

                </View>
            </KeyboardAwareScrollView>
        </View>
    );
}
