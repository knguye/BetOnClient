import { StyleSheet } from 'react-native';
import { colors } from '../../utilities/commonStyles';
export default StyleSheet.create({
    container: {
        justifyContent: 'center',
    },
    titleName: {  
        height: 64,
        fontSize: 36,
        textAlign: 'center',
        color: colors['white'],
        marginVertical: 10,
    },  
    teamName: {
        height: 48,
        fontSize: 36,
        textAlign: 'center',
        color: colors['white'],
        marginVertical: 10,
    },
    textField: {
        fontSize: 16,
        width: 180,
        color: colors['white'],
        backgroundColor: colors['darkgrey'],
        margin: 5,
        paddingVertical: 10,
        borderRadius: 2,
    },
    textSmall: {
        color: colors['white'],
        paddingHorizontal: 25,
    },

    longTextField: {
        width: '97.5%',
        marginVertical: 5,
        margin: 5,
    },
    labelText: {
        fontSize: 24,
        color: colors['white'],
        marginLeft: 5,
        marginVertical: 50
    },
    switch: {
        marginVertical: 20
    },
    input: {
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        paddingLeft: 16,
        flex: 1,
        marginRight: 5
    },
    button: {
        height: 47,
        borderRadius: 5,
        backgroundColor: '#788eec',
        width: 80,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 16
    },
})