import { Pressable, Text, View } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { clearUser } from '../features/users/usersSlice'
import { firebase } from '../firebase/config';
import {colors, commonStyles} from './commonStyles';
import { useEffect, useState } from "react";
import { clearAllBets } from "../features/bets/betsSlice";


function Button(props){
    const style = {
        backgroundColor: (props.color) ? props.color : colors['bg'],
        borderRadius: 5,
        padding: (props.padding) ? props.padding : 10,
        margin: 5,
        color: colors['white'],
    }

    if (props.color)
    {
        return (
            <Pressable onPress={props.onPress} 
                    style={style}>
                    <Text style={commonStyles.buttonText}>{props.title}</Text>
                    {props.children}
            </Pressable>
        )
    }

    return (
        <Pressable onPress={props.onPress} 
                    style={style}>
                        <Text style={commonStyles.buttonText}>{props.title}</Text>
                        {props.children}
        </Pressable>
    )
}


export function LogoutButton() {
    const dispatch = useDispatch();
    const userToken = useSelector((state) => state.users);

    // TODO: Move this functionality to app.js?
    const onButtonPress = () => {
        console.log(`Clearing user: ${JSON.stringify(userToken)}`);
        dispatch(clearUser());
        dispatch(clearAllBets());
        firebase.auth().signOut();
    }

    return (
        <Button onPress={onButtonPress} title={"Logout"}/>
    )
}

export function OptionButtonArray(props){
    const [selected, setSelected] = useState('');
    const [optionButtons, setOptionButtons] = useState(<></>);

    function handleSelectedChange(item){
        props.onChange(item);
    }

    const onSelectOption = 
        (item) => {
            setSelected(item);
        }

    useEffect(() => {
        setOptionButtons(props.options.map((item, key) => (
            <OptionButton key={key} title={item} 
                            selected={selected == item ? true : false}
                            onPress={()=>{ handleSelectedChange(item); onSelectOption(item);  }}>
            </OptionButton>
        )));
    }, [selected])

    if (props.options){
        return (
            <View style={commonStyles.horizontalContainer}>
                {
                    optionButtons
                }
            </View>
        )
    }
}

export function OptionButton(props){
    return (
        <Button onPress={props.onPress}
                            title={props.title} 
                                color={
                                    (props.selected) ? colors['primary'] 
                                                        : colors['darkgrey']
                                } 
                                padding={20}
                                    style={commonStyles.optionButton}>
                                    {props.children}
                                </Button>
    )
}

export function SubmitButton(props){
    return (
        <Button onPress={props.onPress}
                            title={props.title} 
                                color={
                                    colors['primary']
                                } 
                                padding={20}
                                    style={commonStyles.submitButton}>
                                    {props.children}
                            </Button>
    )
}