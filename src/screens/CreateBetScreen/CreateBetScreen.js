import { React, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { View } from 'react-native';
import styles from './styles';
import { TextField } from 'react-native-ui-lib/src/incubator';
import { OptionButton, OptionButtonArray } from '../../utilities/buttons';

import * as commonStyles from '../../utilities/commonStyles';
import { Icon } from '../../utilities/commonViews';
import { KeyboardAwareScrollView } from 'react-native-ui-lib';
import { TextInput } from 'react-native-gesture-handler';

/*  TODO:
        1. Write server API functions to create bets
        2. Allow user to enter in title and select type of bet

*/

export default function CreateBetScreen() {
    const [title, setTitle] = useState('');
    const [selectedOption, setSelectedOption] = useState();
    const [selectedOptionMenu, setSelectedOptionMenu] = useState();

    const betOptions = ['Moneyline', 'Over/Under', 'Player Props'];

    const user = useSelector((state) => state.users);
    const bet = useSelector((state) => state.bets);

    function handleOptionChange(option){
        setSelectedOption(option);
    }

    useEffect(() => {
        switch(selectedOption){
            case betOptions[0]:
                return setSelectedOptionMenu(<MoneylineBetOptions></MoneylineBetOptions>);
            default:
                setSelectedOptionMenu();
        }

    }, [selectedOption]);

    return (
        <View style={styles.container}>
            <TextField
                placeholder={'Enter bet name here..'}
                placeholderTextColor={"#aaaaaa"}
                value={title}
                onChangeText={(text) => setTitle(text)}
                maxLength={30}
                style={styles.titleField}
                ></TextField>
            <OptionButtonArray options={betOptions} onChange={handleOptionChange} ></OptionButtonArray>
            { selectedOptionMenu }
        </View>
    )
}

//TODO: Fade the options in after choosing the type

function ExpandedBetOptions(props) {
    return (
        <View>
            <KeyboardAwareScrollView
                style={ { flex: 1, width: '100%', paddingTop: 10} }
                keyboardShouldPersistTaps="always">
                {props.children}
            </KeyboardAwareScrollView>
        </View>
    )
}

function MoneylineBetOptions(props){

    const [teams, setTeams] = useState([
        {
            name: undefined,
            odds: undefined,
        },
        {
            name: undefined,
            odds: undefined,
        },
    ]);
    const [odds, setOdds] = useState([])

    const setTeam = (index, prop, val) => {
        const copyOfTeamsState = [...teams];
        const copyOfTeam = copyOfTeamsState[index]; // Get the team at whatever index (0 or 1 for ML bets)

        copyOfTeam[prop] = val;

        copyOfTeamsState[index] = copyOfTeam;
        console.log(copyOfTeamsState);
        setTeams(copyOfTeamsState);
    } 

    return (
        <ExpandedBetOptions>
            <View style ={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}>
                <TextInput
                    style={styles.textField}
                    placeholder='Team 1'
                    placeholderTextColor={"#aaaaaa"}
                    onChangeText={(text) => setTeam(0, 'name', text)}
                    value={teams[0].name}
                    textAlign='center'
                    underlineColorAndroid={"transparent"}
                    autoCapitalize='words'/>
                <TextInput
                    style={styles.textField}
                    placeholder='Team 2'
                    placeholderTextColor={"#aaaaaa"}
                    onChangeText={(text) => setTeam(1, 'name', text)}
                    value={teams[1].name}
                    textAlign='center'
                    underlineColorAndroid={"transparent"}
                    autoCapitalize='words'/>
            </View>

            <View style ={{
                    flexDirection: 'row',
                }}>
                <TextInput
                    style={styles.textField}
                    placeholder='Odds'
                    placeholderTextColor={"#aaaaaa"}
                    onChangeText={(text) => setTeam(0, 'odds', text)}
                    value={teams[0].odds}
                    textAlign='center'
                    underlineColorAndroid={"transparent"}
                    keyboardType={'decimal-pad'}/>
                <TextInput
                    style={styles.textField}
                    placeholder='Odds'
                    placeholderTextColor={"#aaaaaa"}
                    onChangeText={(text) => setTeam(1, 'odds', text)}
                    value={teams[1].odds}
                    textAlign='center'
                    underlineColorAndroid={"transparent"}
                    autoCapitalize='words'
                    keyboardType={'decimal-pad'}/>

            </View>
        </ExpandedBetOptions>
    )
}