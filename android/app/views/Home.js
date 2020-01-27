import React from 'react';
import {Button, StyleSheet, View, Text} from 'react-native';
// import {Header} from './sections/Header';
// import {Hero} from './sections/Hero';
// import {Menu} from './sections/Menu';
// import {StackNavigator} from 'react-navigation';

export class Home extends React.Component {
  //   static navigationOptions = {
  //     header: null,
  //   };
  _onPressButton() {
    alert('You tapped the button!');
  }

  _onLongPressButton() {
    alert('You long-pressed the button!');
  }

  render() {
    // const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.textStyle}>## SUDOKU ##</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Start new game"
            color="#1E669B"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={this._onPressButton} title="Continue..." />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Settings"
            color="#1E669B"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={this._onPressButton} title="Medals" />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Statistics"
            color="#1E669B"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#dcf0fa',
  },
  buttonContainer: {
    margin: 20,
    paddingLeft: 30,
    paddingRight: 30,
  },
  textContainer: {
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 30,
  },
});
