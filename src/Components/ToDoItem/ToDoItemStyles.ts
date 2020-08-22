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
    },
    text:{
        fontSize: 14,
        marginRight: 10
    },

    button: {
        width: '80%',
        height: 40,
        alignSelf: 'center',
        marginVertical: 5,
        marginHorizontal: 20
    },
    swipeContentContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 10,
        borderColor: '#e3e3e3',
        borderWidth: 1,
    }
});