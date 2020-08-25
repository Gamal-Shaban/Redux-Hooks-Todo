import {StyleSheet, Dimensions} from 'react-native'
const {width, height} = Dimensions.get('window')
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    height: 100,
  },
  image: {
    height: 50,
    width: width / 2,
    alignSelf: 'center',
  },
  containerInputStyle: {
    marginTop: height * 0.15,
  },
  signupContainer: {
    backgroundColor: 'grey',
    marginTop: 60
  },
  signupTextStyle:{
    color: 'white'
  }
})
