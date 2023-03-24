import { StyleSheet } from 'react-native';
import { colors } from '../../utilities/commonStyles'
import { styles } from '../../utilities/commonStyles';

export default StyleSheet.create({

    title: {
        
    },
    logo: {
        height: 100,
        width: 130,
        alignSelf: "center",
        margin: 50,
        padding: 50,
        marginTop: 150
    },
    button: {
        backgroundColor: colors['primary'],
        marginHorizontal: 30,
        marginTop: 20,
        borderRadius: 5,
    },
    buttonText: {
        fontWeight: "bold"
    },
})