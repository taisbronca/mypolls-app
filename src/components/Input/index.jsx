/* eslint-disable react/prop-types */
import { forwardRef } from "react";
import { InputStyled } from "./styles.jsx";

const Input = forwardRef(({ type, placeholder, ...rest }, ref) => {
  return (
    <InputStyled
      type={type}
      placeholder={placeholder}
      ref={ref}
      {...rest}
    />
  );
});

Input.displayName = "Input";

export default Input;
