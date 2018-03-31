import React from 'react';
import {View, TextInput, Text, TouchableHighlight, Image} from 'react-native';
import AGRButton from '../Components/AGRButton';
import ValidationComponent from 'react-native-form-validator';

const logo = require('../../assets/img/logo.png');


const styles = {
  container:{
    flex: 1,
    flexDirection: 'column',
    padding: 15,
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
  },
  input:{
    height: 36,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    marginBottom: 10,
    alignSelf: 'center',
    width: '80%',
    marginTop: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'lightgray',
    padding: 10,
    width: 140,
    height:40,
    marginTop: 15,
    marginRight: 5,
    marginLeft: 10,
  },
  alinhar:{
    flexDirection:'row',
    alignContent:'space-around',
  }
};

export default class EditScreen extends ValidationComponent {
  constructor(props){
    super(props);
    this.state = {
      editable:false
      nome: '',
      matricula: '',
      hospital: '',
      setor: '',
      senha: '',
    };
  }

  _onPressButton(){
   if(this.validate({
       nome: {required: true},
       matricula: {numbers: true, required: true},
       hospital: {required: true},
       setor: {required: true},
       senha: {minlength:4, maxlength:8, required: true},
  ))}
}

  tornarVisivel(){
    this.setState({
      editable: !this.state.editable
    });
  }

  salvar(){
    this.setState({
      editable:false
    });
  }

  mostraDados(){
    return{textValue: ''};
  }

  atualizaDados(){
    this.setState({
      textValue: this.state.Textvalue
    });
  }



  render() {
    return (
      <View style={styles.container}>
        <Image source = {logo}/>


        <TextInput style={styles.input } Textvalue = {this.state.Textvalue}
          placeholder='Nome'
          editable = {this.state.editable}
          onChangeText={(text) => this.setState({
            nome: text})}
        />
        {this.isFieldInError('nome') && this.getErrorsInField('nome').map(errorMessage => <Text style={styles.error}>{errorMessage}</Text>) }
        <TextInput style={styles.input}
          placeholder='Matricula'
          editable = {false}
        />
        <TextInput style={styles.input}
          placeholder='Hospital'
          editable = {this.state.editable}
          onChangeText={(text) => this.setState({
            hospital: text})}
        />
        {this.isFieldInError('hospital') && this.getErrorsInField('hospital').map(errorMessage => <Text style={styles.error}>{errorMessage}</Text>) }
        <TextInput style={styles.input}
          placeholder='Setor'
          editable = {this.state.editable}
          onChangeText={(text) => this.setState({
            setor: text})}
        />
        {this.isFieldInError('setor') && this.getErrorsInField('setor').map(errorMessage => <Text style={styles.error}>{errorMessage}</Text>) }
        <TextInput style={styles.input}
          placeholder='Editar senha'
          editable = {this.state.editable}
          secureTextEntry
          onChangeText={(text) => this.setState({
           senha: text})}
        />
        {this.isFieldInError('senha') && this.getErrorsInField('senha').map(errorMessage => <Text style={styles.error}>{errorMessage}</Text>) }
        <View style={styles.alinhar}>
          <TouchableHighlight
          style= {styles.button}
          onPress={()=>{this.tornarVisivel()}}>
            <Text>Editar perfil</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style= {styles.button}
            onPress={()=>{this.salvar()}

          >
            <Text>Salvar</Text>
          </TouchableHighlight>
        </View>
        <AGRButton
          style={styles.button}
          text= 'Criar'
          onPress={() => this._onPressButton()}
        />
      </View>
    );
  }
}


export default EditScreen;
