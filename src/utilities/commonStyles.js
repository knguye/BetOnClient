import { $CombinedState } from '@reduxjs/toolkit';
import { StyleSheet } from 'react-native';

export const colors = {
    'red': '#BB1C1C',
    'black': '#282828',
    'yellow': '#EEBF27',
    'lightgrey': '#E8E9EB',
    'darkgrey': '#585858',
    'green': '#31E981', 
    'white': '#FFFFFF',
}

// Buttons


// Views

export const styles = StyleSheet.create({
    betContainer:{
        flex: 1,
    },
    horizontalContainer: {
        flexDirection: 'row'
    },
    panelText: {
        color: colors['white'],
        paddingBottom: 5,
        textAlign: 'center'
    },
    buttonText: {
        color: colors['white'],
        userSelect: 'none',
    },  
    optionButton:{
        paddingVertical: 10,
    },
    team: { 
      alignItems: 'center',
      flexDirection: 'column', 
      justifyContent: 'center', 
    },
    odds: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
})