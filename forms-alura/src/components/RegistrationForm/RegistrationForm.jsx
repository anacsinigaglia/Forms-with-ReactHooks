import { Typography } from "@material-ui/core";
import React, { useState } from "react";
import DeliveryData from "../DeliveryData/DeliveryData";
import PersonalData from "../PersonalData/PersonalData";
import UserData from "../UserData/UserData";

function RegistrationForm(onSendForm, validateCPF) {
  const [currentStage, setCurrentStage] = useState(0);

  function currentForm(stage) {
    switch (stage) {
      case 0:
        return <UserData />;
      case 1:
        return <PersonalData onSend={onSendForm} validateCPF={validateCPF} />
      case 2:
        return <DeliveryData />;
      default:
        return <Typography>Erro ao selecionar formulário.</Typography>
    }
  }

  return (
    <div>
      { currentForm(currentStage) }
    </div>
  );
}

export default RegistrationForm;
