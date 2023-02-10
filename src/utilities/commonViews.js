import { Image } from "react-native";
import React, { Component } from 'react';
import { View, TextField, Text, Button, Card } from 'react-native-ui-lib';
import { colors, styles } from "./commonStyles";
import { ActivityIndicator } from "react-native-web";

const cardImage = require('../../assets/beton_banner_red.png');

export function LogoTitle() {
    return (
        <Image
            style={{width: 70, height: 20}}
            source={require('../../assets/logo_text_black.png')}/>
    );
}


export function Panel(props){
    return (
        <Card height={props.height} width={props.width} enableShadow={false} containerStyle={
            {
                marginHorizontal: 10,
                borderRadius: 6,
                backgroundColor: colors['darkgrey'],
            }
        } center padding-card marginB-s4>
            {props.children}
        </Card>
    )
}

export function SocialPanel(props){
    return (
        <Panel style={styles.socialContainer} height={480} width={360}>

        </Panel>
    )    
}

export function BetPanel(props){
    const info = props.info;
    console.log(info);
    // TODO: Parse bet info so it shows up formatted.

    /*
    const data = {
        owner_id: 'BMrqIxmPuxTpU0tBjf00cIZ4Tqf1',
        title: 'Test Bet',
        description: 'This is a test',
        bet_info: {
            type: 'Moneyline',
            isCustomWager: false,
        teamsWithOdds: [
                {
                    team: 'Team 1',
                    odds: '1.86'
                },
                {
                    team: 'Team 2',
                    odds: '2.14'
                }
            ],
        },
        created_at: now,
    };*/

    /* Bet Types:
        Moneyline - Simple ML wager (money)
        Over/Under - Simple Over/Under
        Player Prop - Choose a winner

        Odds - Odds are chosen on a odds ratio
        Custom Wager - Non monetary wager made, no odds (Loser/Winner has/gets to..)
    */
    if (info){
        const bet_info = info['bet_info'];
        const team1 = bet_info['teamsWithOdds'][0];
        const team2 = bet_info['teamsWithOdds'][1];

            // If bet type == ML
        return (
            <Panel style={styles.betContainer} height={140} width={280}>
                <Text h1 style={styles.panelText}>{info.title}</Text>
                <View style={[styles.odds, styles.panelText]}>
                    <View style={styles.team}>
                        <Icon name={'profile'}></Icon>
                        <Text style={styles.panelText}>{`${team1['name']}\n${team1['odds']}`}</Text>
                    </View>
                    <View style={styles.team}>
                        <Icon name={'profile'}></Icon>
                        <Text style={styles.panelText}>{`${team2['name']}\n${team2['odds']}`}</Text>
                    </View>
                </View>
            </Panel>
        )
    }

    
    
    // If bet type == ML
    return (
        <Panel style={styles.betContainer} height={140} width={280}>
            <Text h1 style={styles.panelText}>Title</Text>
            <View style={[styles.odds, styles.panelText]}>
                <View style={styles.team}>
                    <Icon name={'profile'}></Icon>
                    <Text style={styles.panelText}>{`Name\n+100`}</Text>
                </View>
                <View style={styles.team}>
                    <Icon name={'profile'}></Icon>
                    <Text style={styles.panelText}>{`Name\n+100`}</Text>
                </View>
            </View>
        </Panel>
    )
}


export function Icon(props){
    const sources = {
        'home': require('../../assets/icons/icons8-home-50.png'),
        'profile': require('../../assets/icons/icons8-profile-50.png'),
        'balances': require('../../assets/icons/icons8-balances-50.png'),
        'mybets': require('../../assets/icons/icons8-mybets-50.png'),
        'create': require('../../assets/icons/icons8-create-50.png'),
    }

    return (
        <Image style={{
                resizeMode: 'contain', 
                width: (props.size) ? props.size : 30, 
                height: props.size ? props.size : 30,
                
            }} source={sources[props.name]}></Image>
    )
}

export function LoadingCircle(props) {
    return (
        <ActivityIndicator size={props.size} color={colors[props.color]}/>
    )
}