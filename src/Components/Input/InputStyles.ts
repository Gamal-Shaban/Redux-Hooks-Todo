import { StyleSheet } from 'react-native'
export default StyleSheet.create({
    container: {
        height: 45,
        alignSelf: 'stretch',
        borderRadius: 10,
        padding: 5,
        paddingVertical: 10,
        flexDirection: 'row',
        borderColor: 'grey',
        borderWidth: 0.5,
        alignItems: 'center'
        
    },
    input:{
       flex: 1,
       alignSelf: 'stretch',
       fontSize: 16
    },
    text:{
        fontSize: 14,
        marginRight: 10
    },
    error:{
        // flex: 1,
        textAlign: 'right',
        color: 'red',
        marginTop: 3,
        marginHorizontal: 5
    }
});