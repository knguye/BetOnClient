import React, { useEffect, useState } from 'react'
import { View, Text, Card} from 'react-native-ui-lib';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { ScrollView } from 'react-native';
import styles from './styles';
import { Icon, Panel, BetPanel } from '../../utilities/commonViews';

import { useSelector } from 'react-redux';
import { REACT_APP_SERVER_API } from '@env'

/*  Features to add TODO:
    1.  Stats for the user
        - Bets won vs bets made (query for # of bets)
        - Total win/loss $ (implement this in bets table, count # of rows with win matching ID)
    2. Most Reacted/Best bets
    3. Previous bets (like instagram pics)
*/

const serverDomain = REACT_APP_SERVER_API;

export default function ProfileScreen() {
    const user = useSelector((state) => state.users);
    const bets = useSelector((state) => state.bets);
    console.log(user);

    const [recentBets, setRecentBets] = useState(<></>);

    /*
        Get top 4 recent bets with user ID == owner.ID, order by created_at DESC
        Map out BetPanel elements with information
        Don't show username on bets
    */

    useEffect(() => {
        getRecentBets();
        //console.log(recentBets);
    }, [bets]);

    const setBetPanels = (bets) => {
        const panels = bets.map((bet, key) => (
            <BetPanel key={key} info={bet}></BetPanel>
        ));

        setRecentBets(panels);
    }

    const getRecentBets = async () => {
        const userId = user.id;
        const numBets = 4;

        console.log(userId);

        await fetch(`${serverDomain}/users/bets/${userId}/${numBets}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            },
        })
        .then((response) => {
            return response.json();
        })
        .then((bets) => {
            //console.log(JSON.stringify(bets));
            setBetPanels(bets);
        })
        .catch ((err) => {
            console.log(err);
        });
    }



    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView style={styles.profile}>
                <View style={styles.profileHeader}>
                    <Icon size={50} name={'profile'} style= {styles.profilePicture}></Icon>
                    <Text style={styles.profileTitle}>{user.username}</Text>
                </View>
                <Text>Recent Bets</Text>
                <ScrollView horizontal style={styles.recentBets}>
                    {recentBets}
                </ScrollView>
                <View style={styles.userFeed}>

                </View>
            </KeyboardAwareScrollView>
        </View>
    )
}