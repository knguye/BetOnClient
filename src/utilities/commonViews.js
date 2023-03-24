import { Image } from "react-native";
import React, { Component } from 'react';
import { View, TextField, Text, Button, Card } from 'react-native-ui-lib';
import { colors, commonStyles } from "./commonStyles";
import { ActivityIndicator } from "react-native-web";

import { teamIcons } from "../../__globals__";
import { FontAwesome5 } from "@expo/vector-icons";

const cardImage = require('../../assets/beton_banner_red.png');

export function LogoTitle() {
    return (
        <Image
            style={{width: 70, height: 20}}
            source={require('../../assets/logo_text_black.png')}/>
    );
}


export function Panel(props){

    if (props.bgEnabled){
        return (
            <Card onPress={props.onPress} height={props.height} width={props.width} enableShadow={false} containerStyle={
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

    return (
        <Card onPress={props.onPress} height={props.height} width={props.width} enableShadow={false} containerStyle={
            {
                marginHorizontal: 10,
                borderRadius: 6,
                backgroundColor: colors['bg'],
            }
        } center padding-card marginB-s4>
            {props.children}
        </Card>
    )

}

export function SocialPanel(props){
    return (
        <Panel style={commonStyles.socialContainer} height={480} width={360}>

        </Panel>
    )    
}

export function TeamPanel(props){
    const info = props.info;

    if (info) {
        const icon = info['icon'];
        const name = info['name'];
        const odds = info['odds'];


        return (
            <Panel onPress={props.onPress} style={commonStyles.betContainer}>
                <FontAwesome5 class={commonStyles.teamIcon} name={icon} size="32" color={props.color}/>
                <Text style={commonStyles.teamName}>{name}</Text>
            </Panel>
        )
    }
}

export function BetPanel(props){
    const info = props.info;

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
            <Panel onPress={props.onPress} style={commonStyles.betContainer} height={140} width={280} >
                <Text h1 style={commonStyles.panelText}>{info.title}</Text>
                <View style={[commonStyles.odds, commonStyles.panelText]}>
                    <View style={commonStyles.team}>
                        <FontAwesome5 class={commonStyles.teamIcon} name={`${team1['icon']}`} size="32" color="red"/>
                        <Text style={commonStyles.panelText}>{`${team1['name']}\n${team1['odds']}`}</Text>
                    </View>
                    <View style={commonStyles.team}>
                        <FontAwesome5 class={commonStyles.teamIcon} name={`${team2['icon']}`} size="32" color="blue"/>
                        <Text style={commonStyles.panelText}>{`${team2['name']}\n${team2['odds']}`}</Text>
                    </View>
                </View>
            </Panel>
        )
    }

    
    
    // No Info (default case)
    return (
        <Panel style={commonStyles.betContainer} height={140} width={280}>
            <Text h1 style={commonStyles.panelText}>Title</Text>
            <View style={[commonStyles.odds, commonStyles.panelText]}>
                <View style={commonStyles.team}>
                    <Icon name={'profile'}></Icon>
                    <Text style={commonStyles.panelText}>{`Name\n+100`}</Text>
                </View>
                <View style={commonStyles.team}>
                    <Icon name={'profile'}></Icon>
                    <Text style={commonStyles.panelText}>{`Name\n+100`}</Text>
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