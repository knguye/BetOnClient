import { Image } from "react-native";
import React, { Component } from 'react';
import { View, TextField, Text, Button, Card } from 'react-native-ui-lib';


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
        <Card 
            containerStyle={
                {
                    margin: 10
                }
            }
            height={50}
            flex
            width={200}
            activeOpacity={1}
            onPress={() => {console.log("click")}}
            >
                <Card.Section imageSource={cardImage}/>
            </Card>
    )
}