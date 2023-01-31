import { StyleSheet } from 'react-native';
import { colors } from '../../utilities/commonStyles'

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors['black'],
        color: colors['white'],
    },
    title: {
        
    },
    logo: {
        height: 100,
        width: 130,
        alignSelf: "center",
        margin: 50,
        padding: 50,
        marginTop: 200
    },
    input: {
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        marginHorizontal: 30,
        paddingLeft: 16,
    },
    button: {
        backgroundColor: colors['red'],
        marginHorizontal: 30,
        marginTop: 20,
        height: 48,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
    footerView: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },
    footerText: {
        fontSize: 16,
        color: colors['white']
    },
    footerLink: {
        color: colors['red'],
        fontWeight: "bold",
        fontSize: 16
    }
})