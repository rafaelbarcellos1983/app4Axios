import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  StyleSheet
} from 'react-native';
import ListaItens from './src/components/ListaItens';

class app4 extends Component {
  render() {
    return (
      <View style={styles.corpoTela}>
        <ListaItens />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    corpoTela: {
      backgroundColor: '#DDD',
      paddingTop: 17
    }
});

AppRegistry.registerComponent('app4', () => app4);
