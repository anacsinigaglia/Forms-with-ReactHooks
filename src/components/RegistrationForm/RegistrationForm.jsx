import React from "react";
import DeliveryData from "../DeliveryData/DeliveryData";
import PersonalData from "../PersonalData/PersonalData";
import UserData from "../UserData/UserData";

function RegistrationForm(onSendForm, validateCPF) {

  return (
    <div>
      <PersonalData onSend={onSendForm} validateCPF={validateCPF} />
      <UserData />
      <DeliveryData />
    </div>
  );
}

export default RegistrationForm;
