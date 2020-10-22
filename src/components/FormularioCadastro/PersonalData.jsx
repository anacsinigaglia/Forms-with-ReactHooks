import React, { useState } from "react";
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";

function PersonalData({onSend: onSend, validateCPF: validateCPF}) {
  const [name, setName] = useState("");
  const [lastName, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [sales, setSales] = useState(true);
  const [news, setNews] = useState(false);
  const [errors, setErrors] = useState({cpf:{valid:true, text:""}})
  return (
    <form onSubmit={(event) => {
        event.preventDefault();
        onSend({name: name, lastName: lastName, cpf, news: news, sales: sales}); }} >

      <TextField
        value={name}
        onChange={(event) => {
          setName(event.target.value); }}
        id="name"
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth />

      <TextField
        value={lastName}
        onChange={(event) => {
          setSobrenome(event.target.value); }}
        id="lastName"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth />

      <TextField
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value); }}
        onBlur={(event)=>{
          const isValid = validateCPF(cpf);
          setErrors({cpf:isValid}) }}
        error={!errors.cpf.valid}
        helperText={errors.cpf.text}
        id="CPF"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth />

      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            checked={sales}
            onChange={(event) => {
              setSales(event.target.checked); }}
            name="sales"
            color="primary" />
        } />

      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            checked={news}
            onChange={(event) => {
              setNews(event.target.checked); }}
            name="news"
            color="primary" />
        } />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default PersonalData;
