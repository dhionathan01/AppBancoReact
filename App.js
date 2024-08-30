import Slider from '@react-native-community/slider';
import { Picker } from '@react-native-picker/picker';
import React, {Component} from 'react';
import { Button, Text, View, StyleSheet, ScrollView, TextInput, Switch } from 'react-native';

export default class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      idade: 0,
      sexo: 'M',
      estudante: false,
      limite: 0.0,
      msg: '',
    };
    this.AbrirConta = this.AbrirConta.bind(this);
    this.handleTextInputChange = this.handleTextInputChange.bind(this);
    this.handleIdadeInputChange = this.handleIdadeInputChange.bind(this);
  }
  AbrirConta() {
    if (this.state.nome.length > 0 && this.state.idade > 0) {
      this.setState({msg: true});
    } else {
      alert('Nome e idade tem que está preenchidos!');
    }
  }
  handleTextInputChange(value) {
    this.setState({nome: value});
  }
  handleIdadeInputChange(value) {
    this.setState({idade: value});
  }
  render() {
    let sexos = [
      { label: 'Masculino', value: 'M' },
      { label: 'Feminino', value: 'F' },
    ];
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Banco React</Text>
        <View style={styles.cardBox}>
          <Text style={styles.label}>Nome:</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor={'#d9d9d9'}
            placeholder="Digite seu nome..."
            value={this.state.nome}
            onChangeText={this.handleTextInputChange}
          />
          <Text style={styles.label}>Idade:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholderTextColor={'#d9d9d9'}
            placeholder="Informe a idade..."
            value={this.state.idade}
            onChangeText={this.handleIdadeInputChange}/>
          <Text style={styles.label}>Sexo:</Text>
          <Picker
            selectedValue={this.state.sexo}
            onValueChange={(itemValue, itemIndex) => {
              this.setState({ sexo: itemValue });
            }}
          >
            {sexos.map((item, index) => (
              <Picker.Item key={index} label={item.label} value={item.value} />
            ))}
          </Picker>
          <Text style={styles.label}>Estudante:</Text>
          <Switch value={this.state.estudante} onValueChange={(valorSwitch) => this.setState({estudante: valorSwitch})} />
          <Text style={styles.label}>Limite:</Text>
          <Slider
            minimumValue={0}
            maximumValue={1500}
          onValueChange={(valorLimite)=> this.setState({limite: valorLimite})}/>
          <Text style={styles.limite}>{this.state.limite.toFixed(2) }</Text>
          <View style={{ marginTop: 50, paddingLeft: 20, paddingRight: 20 }}>
            <Button title="Abrir conta" onPress={this.AbrirConta} />
          </View>
        </View>
        <ScrollView style={styles.ResultBox}>
          <Text>{this.state.msg}</Text>
          {this.state.msg ? (
            <View style={{padding: 10}}>
              <Text style={styles.result}>{this.state.msg}</Text>
              <Text>Nome: {this.state.nome}</Text>
              <Text>Idade: {this.state.idade}</Text>
              <Text>Sexo: {this.state.sexo}</Text>
              <Text>Limite: {this.state.limite.toFixed(2)}</Text>
              <Text>Estudante: {this.state.estudante ? 'Sim' : 'Não'} </Text>
            </View>   ) : (
              <Text style={styles.result}>Nenhum registro adicionado!</Text>
          )
          }
        </ScrollView>
      </ScrollView>
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
  limite: {
    fontSize: 20,
    marginLeft: 10,
  },
  result:{
    paddingBottom: 10,
    paddingLeft: 5,
  },
});
