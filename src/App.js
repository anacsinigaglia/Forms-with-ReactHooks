import React, { Component } from "react";
import "./App.css";
import PersonalData from "./components/FormularioCadastro/PersonalData";
import 'fontsource-roboto';

import {Container, Typography } from "@material-ui/core"
class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center" >Formulário de cadastro</Typography>
        <PersonalData onSent={onSentForm} validateCPF={validateCPF} />
      </Container>
    );
  }
}

function onSentForm(data){
  console.log(data);
}

function validateCPF(cpf){
  if(cpf.length !== 11){
    return {valid:false, text:"CPF deve ter 11 digitos."}
  } else{
    return {valid:true, text:""}
  }
}

export default App;
