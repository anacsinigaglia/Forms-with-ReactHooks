import { Button, TextField } from "@material-ui/core";
import React from "react";

function UserData() {
    return (
        <form>
            <TextField
                type="email"
                id="email"
                label="E-mail"
                variant="outlined"
                margin="normal"
                fullWidth />

            <TextField
                type="password"
                id="password"
                label="Senha"
                variant="outlined"
                margin="normal"
                fullWidth />

            <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
        </form>
    );
};

export default UserData;