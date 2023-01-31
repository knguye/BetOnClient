import { StyleSheet } from 'react-native';
import { colors } from '../../utilities/commonStyles'
import { BlurViewPackage } from 'react-native-ui-lib/src/optionalDependencies';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors['black'],
        color: colors['white'],
    },
    profile: {
        width: '100%',
    },  
    profileHeader: {
        marginLeft: 5,
        color: colors['white'],
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 25,
    },
    profileTitle: {
        flex: 1, 
        fontSize: 36,
        textAlign: 'left',
        alignSelf: 'end',
        marginLeft: 50,
        marginBottom: 8,
        color: colors['white'],
    },
    profilePicture: {
        flex: 1,
        width: 100,
        height: 100,
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