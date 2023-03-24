import { StyleSheet } from 'react-native';
import { colors } from '../../utilities/commonStyles';
import { styles } from '../../utilities/commonStyles';

export default StyleSheet.create({

    mainpage: {
        flex: 1,
        backgroundColor: colors['bg'],
        color: colors['white']  
    }, 
    sectionHeader: {
        fontSize: 36,
        color: colors['primary'],
        marginTop: 10
    },
    showcase: {
        marginVertical: 10,
    },
    button: {
        backgroundColor: colors['primary'],
        width: 80,
    },
})