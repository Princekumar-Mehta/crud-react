import React, { useContext } from "react";
import { UserDispatchContext } from "../../utils/userContext";

const Input = ({
  label,
  type,
  value,
  placeholder,
  name,
  onChange = undefined,
}) => {
  const dispatch = useContext(UserDispatchContext);
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        name={name}
        onChange={
          onChange !== undefined
            ? onChange
            : (e) => {
                dispatch({
                  type: "changed",
                  field: name,
                  value: e.target.value,
                });
              }
        }
      />
    </>
  );
};

export default Input;
