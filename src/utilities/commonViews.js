import { Image } from "react-native";
import React, { Component } from 'react';
import { View, TextField, Text, Button, Card } from 'react-native-ui-lib';
import { colors, styles } from "./commonStyles";

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
    // TODO: Parse bet info so it shows up formatted.

    /*
        Info:
            Owner username (prop controlled, shows up on hot bets, not on profile page latest bets)
            Bet title
            Team icons (user icon or icon chosen in make a bet)
            Bet options/teams
            Odds OR custom wager
            Time Created
            Expiry Date
    */

    /* Bet Types:
        Moneyline - Simple ML wager (money)
        Over/Under - Simple Over/Under
        Player Prop - Choose a winner

        Odds - Odds are chosen on a odds ratio
        Custom Wager - Non monetary wager made, no odds (Loser/Winner has/gets to..)
    */
    
    // If bet type == ML
    return (
        <Panel style={styles.betContainer} height={140} width={280}>
            <Text h1 style={styles.panelText}>Title</Text>
            <View style={[styles.odds, styles.panelText]}>
                <View style={styles.team}>
                    <Icon name={'profile'}></Icon>
                    <Text style={styles.panelText}>{`Team 1\n+100`}</Text>
                </View>
                <View style={styles.team}>
                    <Icon name={'profile'}></Icon>
                    <Text style={styles.panelText}>{`Team 2\n+100`}</Text>
                </View>
            </View>
        </Panel>
    )

    /*
    return (
        <Panel>
            <Text color={colors['white']} body>{info}</Text>
        </Panel>
    )*/

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
