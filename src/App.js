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
  TouchableOpacity,
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
            onSubmitEditing={() => this.passwordInput.focus()}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor="rgba(255,255,255,0.6)"
            returnKeyType="go"
            secureTextEntry
            style={styles.input}
            underlineColorAndroid="transparent"
            ref={input => (this.passwordInput = input)}
          />
          <TouchableOpacity onPress={() => {}} style={styles.button}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.buttonLupa}>
            <Text style={styles.buttonText}>Lupa Password</Text>
          </TouchableOpacity>
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
    borderWidth: 2,
    borderColor: '#fff',
    textAlign: 'center',
  },
  button: {
    height: 40,
    justifyContent: 'center',
    backgroundColor: 'rgba(176,21,19,0.8)',
    borderRadius: 10,
    borderColor: 'rgba(176,21,19,1)',
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '700',
  },
  buttonLupa: {
    height: 40,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
});

export default App;
