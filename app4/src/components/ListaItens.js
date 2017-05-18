import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet
} from 'react-native';
import axios from 'axios';
import Itens from './Itens';

export default class ListaItens extends Component {

  constructor(props) {
    super(props);
    this.state = { listaItens: [] };
  }

  componentWillMount() {
    axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
      .then(response => { this.setState({ listaItens: response.data }); })
      .catch(() => { console.log('Erro ao recuperar os dados'); });
  }

  componentDidMount() {
    console.log('Registro de DEPOIS de renderizar');
  }

  render() {
    console.log('Objeto é renderizado RENDER');
    return (
      <ScrollView style={styles.lista}>
        { this.state.listaItens.map((item, i) => (<Itens Text key={i} item={item} />)) }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    lista: {
      backgroundColor: '#DDD'
    }
});
