import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  ImageBackground,
  Dimensions,
  StatusBar,
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
});

export default App;
