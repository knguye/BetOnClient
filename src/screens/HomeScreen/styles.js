import { StyleSheet } from 'react-native';
import { colors } from '../../utilities/commonStyles';
export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors['black'],
        color: colors['white']
    },
    mainpage: {
        flex: 1,
        backgroundColor: colors['black'],
        color: colors['white']  
    }, 
    sectionHeader: {
        fontSize: 36,
        color: colors['white'],
        marginTop: 10
    },
    showcase: {
        marginVertical: 10,

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