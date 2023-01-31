import { Pressable, Text, View } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { clearUser } from '../features/users/usersSlice'
import { firebase } from '../firebase/config';
import * as commonStyles from './commonStyles';
import { PageControlPosition } from "react-native-ui-lib";
import { useCallback, useEffect, useState } from "react";
import styles from "../screens/CreateBetScreen/styles";

export function GoogleLoginButton(){
    return (
        <>
            <script src="https://accounts.google.com/gsi/client" async defer></script>
            <div id="g_id_onload"
                data-client_id="YOUR_GOOGLE_CLIENT_ID"
                data-login_uri="https://your.domain/your_login_endpoint"
                data-auto_prompt="false">
            </div>
            <div class="g_id_signin"
                data-type="standard"
                data-size="large"
                data-theme="outline"
                data-text="sign_in_with"
                data-shape="rectangular"
                data-logo_alignment="left">
            </div>
        </>
    )
}

function Button(props){
    const style = {
        backgroundColor: (props.color) ? props.color : commonStyles.colors['black'],
        borderRadius: 5,
        padding: (props.padding) ? props.padding : 10,
        margin: 5,
        color: commonStyles.colors['white'],
    }

    if (props.color)
    {
        return (
            <Pressable onPress={props.onPress} 
                    style={style}>
                    <Text style={commonStyles.styles.buttonText}>{props.title}</Text>
                    {props.children}
            </Pressable>
        )
    }

    return (
        <Pressable onPress={props.onPress} 
                    style={style}>
                        <Text style={commonStyles.styles.buttonText}>{props.title}</Text>
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
        firebase.auth().signOut();
    }

    return (
        <Button onPress={onButtonPress} title={"Logout"}/>
    )
}

export function SidebarButton({navigation}){
    const dispatch = useDispatch();
    
    const onButtonPress = () => {

    }

    return (
        <Button onPress={onButtonPress}/>
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
            <View style={commonStyles.styles.horizontalContainer}>
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
                                    (props.selected) ? commonStyles.colors['red'] : commonStyles.colors['darkgrey']
                                } 
                                padding={20}
                                    style={commonStyles.styles.optionButton}>
                                    {props.children}
                                </Button>
    )
}