import { View, Text } from 'react-native';

import styles from './styles'
import { colors, commonStyles } from '../../utilities/commonStyles';
import { teamIcons } from '../../../__globals__';
import { TeamPanel } from '../../utilities/commonViews';

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
                    <TeamPanel info={team1} color={'white'}></TeamPanel>

                    <Text style={styles.textSmall}>VS</Text>

                    <TeamPanel info={team2} color={'white'}></TeamPanel>
                </View>
        </View>
    );
}
