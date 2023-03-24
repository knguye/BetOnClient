import { View, Text } from 'react-native';

import styles from './styles'
import { colors, commonStyles } from '../../utilities/commonStyles';
import { teamIcons } from '../../../__globals__';

import { useEffect } from 'react';

import { FontAwesome5 } from '@expo/vector-icons';

export default function BetDetailsScreen({route, navigation}){
    const currentBet = route.params;

    const team1 = currentBet.bet_info.teamsWithOdds[0];
    const team2 = currentBet.bet_info.teamsWithOdds[1];
    
    useEffect(() => {
        console.log(currentBet.title);
    }, [])

    /*
        Get the appropriate bet from Redux state by ID,
        if not found, query for it in db,
        if not found, return a 404
    */

    // TODO: Get current bet ID/info
    // TODO: Set up collapsible participants with info
    // TODO: Set up submitting + wager + option

    /* 
        TODO:
        1. Get icons for players
        2. 
    */

    return (
        <View style={{...commonStyles.container, ...styles.container}}>

                <View style={styles.profileHeader}>
                    <Text style={styles.titleName}>{currentBet.title}</Text>
                </View>

                <View style={commonStyles.horizontalContainer}>
                    <View style={{...commonStyles.container, ...styles.container}}>
                        <FontAwesome5 class={commonStyles.teamIcon} name={`${teamIcons[team1.icon]}`} size="32" color="red"/>
                        <Text style={styles.teamName}>{team1.name}</Text>
                    </View>

                    <Text style={styles.textSmall}>VS</Text>

                    <View style={{...commonStyles.container, ...styles.container}}>
                        <FontAwesome5 class={commonStyles.teamIcon} name={`${teamIcons[team2.icon]}`} size="32" color="blue"/>
                        <Text style={styles.teamName}>{team2.name}</Text>
                    </View>
                </View>
        </View>
    );
}
