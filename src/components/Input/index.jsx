/* eslint-disable react/prop-types */
import { forwardRef, useState } from "react";
import { EyeIcon, InputStyled, InputWrapper } from "./styles.jsx";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Input = forwardRef(({ type, placeholder, ...rest }, ref) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <InputWrapper>
      <InputStyled
        type={type === "password" && showPassword ? "text" : type}
        placeholder={placeholder}
        ref={ref}
        {...rest}
      />
      {type === "password" && (
        <EyeIcon onClick={togglePasswordVisibility}>
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </EyeIcon>
      )}
    </InputWrapper>
  );
});

Input.displayName = "Input";

export default Input;
