import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  baseText: {
    alignSelf: 'center',
    fontSize: 14,
    width: 300,
    marginBottom: 5,
  },
  button: {
    height: 40,
    fontSize: 20,
    color: 'white',
  },
  buttonContainer: {
    backgroundColor: '#00d46a',
    borderRadius: 4,
    height: 45,
    marginTop: 15,
    overflow: 'hidden',
    padding: 10,
    width: 300,
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flex: 1,
    justifyContent: 'center',
  },
  heading: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
    width: 300,
  },
});

export default styles;