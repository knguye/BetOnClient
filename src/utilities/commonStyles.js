import { StyleSheet } from 'react-native';

export const colors = {
    'primary': '#BB1C1C',
    'bg': '#282828',
    'yellow': '#EEBF27',
    'lightgrey': '#E8E9EB',
    'darkgrey': '#585858',
    'green': '#31E981', 
    'white': '#FFFFFF',
}

// Buttons


// Views
/*
    input
    button
    buttonText (also sometimes known as buttonTitle)
*/

export const commonStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors['bg'],
        color: colors['white'],
    },
    betContainer:{
        flex: 1,
    },
    horizontalContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    panelText: {
        color: colors['white'],
        paddingBottom: 5,
        textAlign: 'center'
    },
    panel: {
        borderColor: 'white',
        borderWidth: 5,
    },
    subHeader: {
        paddingLeft: 5,
        color: colors['white'],
        fontSize: 24,
    },
    input: {
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: colors['bg'],
        color: colors['white'],
        paddingLeft: 16,
        flex: 1,
        marginBottom: 10,
        width: '90%',
        alignSelf: 'center'
    },
    button: {
        backgroundColor: colors['primary'],
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 5,
        height: 48,
    },
    buttonText: {
        color: colors['white'],
        userSelect: 'none',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
    },  
    optionButton:{
        paddingVertical: 10,
    },
    submitButton: {
        
    },
    team: { 
      alignItems: 'center',
      flexDirection: 'column', 
      justifyContent: 'center', 
    },
    teamIcon: {

    },
    teamName: {
        height: 48,
        fontSize: 36,
        textAlign: 'center',
        color: colors['white'],
        marginVertical: 10,
    },
    odds: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    oddsText: {
        fontSize: 24,
        color: colors['white']
    },
    loading: {
        width: 100,
        height: 'auto',
        borderRadius: '50%',
        borderWidth: 10,
        borderStyle: 'solid',
        borderRightColor: 'transparent',
        borderBottomColor: 'transparent',
    },
    red: {
        borderColor: colors['red'],
    },
    footerView: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },
    footerText: {
        fontSize: 16,
        color: colors['white'],
    },
    footerLink: {
        color: colors['primary'],
        fontWeight: "bold",
        fontSize: 16
    }
})