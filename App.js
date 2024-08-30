import Slider from '@react-native-community/slider';
import { Picker } from '@react-native-picker/picker';
import React, {Component} from 'react';
import { Button, Text, View, StyleSheet, ScrollView, TextInput, Switch } from 'react-native';

export default class App extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Banco React</Text>
        <View style={styles.cardBox}>
          <Text style={styles.label}>Nome:</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor={'#d9d9d9'}
           placeholder="Digite seu nome..." />
          <Text style={styles.label}>Idade:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholderTextColor={'#d9d9d9'}
            placeholder="Informe a idade..." />
          <Text style={styles.label}>Sexo:</Text>
          <Picker />
          <Text style={styles.label}>Estudante:</Text>
          <Switch />
          <Text style={styles.label}>Limite:</Text>
          <Slider />
          <View style={{ marginTop: 50, paddingLeft: 20, paddingRight: 20 }}>
            <Button title="Abrir conta" />
          </View>
        </View>
        <View style={styles.ResultBox} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
  cardBox: {
    flex: 2,
    padding: 20,
    borderColor: '#d9d9d9',
    borderWidth: 2,
    margin: 10,
    borderRadius: 25,
  },
  ResultBox: {
    flex: 1,
    padding: 5,
    borderColor: '#d9d9d9',
    borderWidth: 2,
    margin: 10,
    borderRadius: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    marginLeft: 15,
    fontWeight: '500',
    fontSize: 22,
  },
  input: {
    height: 60,
    fontSize: 20,
    margin: 10,
    borderWidth: 2,
    padding: 10,
    borderRadius: 15,
    borderColor: '#d9d9d9',
  },
});
