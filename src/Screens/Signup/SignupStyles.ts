import {StyleSheet, Dimensions} from 'react-native'
const {width, height} = Dimensions.get('window')
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignSelf: 'stretch',
    paddingHorizontal: 20,
    paddingVertical: 10,
    paddingTop: height * 0.1,
  },
  input: {
    height: 100,
  },
  image: {
    height: height / 7,
    width: width/2,
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
