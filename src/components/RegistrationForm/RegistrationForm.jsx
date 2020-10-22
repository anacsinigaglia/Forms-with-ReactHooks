import React from "react";
import PersonalData from "../PersonalData/PersonalData";
import UserData from "../UserData/UserData";

function RegistrationForm(onSendForm, validateCPF) {

  return (
    <>
      <PersonalData onSend={onSendForm} validateCPF={validateCPF} />
      <UserData />
    </>
  );
}

export default RegistrationForm;
