import { StyleSheet } from 'react-native';
import { colors } from '../../utilities/commonStyles';
export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors['black'],
        color: colors['white']
    },
    titleField: {
        marginVertical: 20,
        height: 48,
        fontSize: 36,
        overflow: 'visible',
        textAlign: 'center',
        color: colors['white']
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