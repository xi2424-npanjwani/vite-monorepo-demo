import React from "react";

import "./style.scss";

export interface MyFormProps {
  type?: string;
}

const MyForm = ({ type = "text" }: MyFormProps) => {
  return (
    <>
      <input type={type} placeholder="Enter a number" />
    </>
  )
}

export default MyForm;