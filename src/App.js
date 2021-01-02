import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  ImageBackground,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';

const {width, height} = Dimensions.get('window');

class App extends Component {
  render() {
    return (
      <View style={styles.topContainer}>
        <StatusBar barStyle="light-content" backgroundColor="#000" />
        <ImageBackground
          style={styles.imageBckStyle}
          source={require('./assets/images/piccarousel1.jpg')}>
          <View style={styles.overlayColor}>
            <Text style={styles.titleText}>Aplikasi Baru</Text>
            <Text style={styles.subtitleText}>
              Aplikasi yang digunakan untuk belajar React Native
            </Text>
          </View>
        </ImageBackground>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : null}
          style={styles.keyboardContainer}>
          <TextInput
            placeholder="Username"
            placeholderTextColor="rgba(255,255,255,0.6)"
            returnKeyType="next"
            keyboardType="email-address"
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            underlineColorAndroid="transparent"
          />
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageBckStyle: {
    width: width,
    height: height,
  },
  overlayColor: {
    width: width,
    height: height,
    paddingTop: Platform.OS === 'ios' ? 50 : 0,
    paddingHorizontal: 15,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  titleText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  subtitleText: {
    color: '#fff',
    fontSize: 20,
    marginTop: 20,
  },
  keyboardContainer: {
    padding: 20,
    position: 'absolute',
    left: 30,
    right: 30,
    bottom: 30,
  },
  input: {
    height: 50,
    marginBottom: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 10,
    color: '#fff',
    borderRadius: 10,
    fontSize: 16,
    borderWidth: 3,
    borderColor: '#fff',
    textAlign: 'center',
  },
});

export default App;
