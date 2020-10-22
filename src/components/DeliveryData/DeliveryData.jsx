import React from 'react';
import { Button, TextField } from '@material-ui/core';

function DeliveryData() {
    return (
        <form>
            <TextField
                type="number"
                id="cep"
                label="CEP"
                variant="outlined"
                margin="normal" />

            <TextField
                type="text"
                id="address"
                label="Endereço"
                variant="outlined"
                margin="normal"
                fullWidth />

            <TextField
                type="number"
                id="number"
                label="Número"
                variant="outlined"
                margin="normal" />

            <TextField
                type="text"
                id="state"
                label="Estado"
                variant="outlined"
                margin="normal" />

            <TextField
                type="text"
                id="city"
                label="Cidade"
                variant="outlined"
                margin="normal" />

            <Button type="submit" variant="contained" color="primary">Finalizar cadastro</Button>
        </form>
    );
};

export default DeliveryData;