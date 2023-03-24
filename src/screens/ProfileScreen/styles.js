import { StyleSheet } from 'react-native';
import { colors } from '../../utilities/commonStyles'
import { BlurViewPackage } from 'react-native-ui-lib/src/optionalDependencies';

export default StyleSheet.create({
    profile: {
        width: '100%',
    },  
    profileHeader: {
        marginLeft: 5,
        color: colors['primary'],
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
        marginTop: 10,
        marginBottom: 10,
        marginHorizontal: 30,
    },
    button: {
        marginHorizontal: 30,
        marginTop: 20,
    },
    buttonText: {
        fontWeight: "bold"
    },
})