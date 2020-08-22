import { StyleSheet } from 'react-native'
export default StyleSheet.create({
    container: {
        height: 45,
        alignSelf: 'stretch',
        borderRadius: 10,
        padding: 5,
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        backgroundColor: '#47AD4A'
    },
    input:{
       flex: 1,
       alignSelf: 'stretch',
    },
    title:{
        fontSize: 18
    }
});