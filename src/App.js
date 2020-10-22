import React, { Component } from "react";
import {Container, Typography } from "@material-ui/core"
import 'fontsource-roboto';
import "./App.css";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center" >Formulário de cadastro</Typography>
        <RegistrationForm onSend={onSendForm} validateCPF={validateCPF} />
      </Container>
    );
  }
}

function onSendForm(data){
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
