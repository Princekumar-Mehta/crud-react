import React, { useContext } from "react";
import { UserDispatchContext } from "../../utils/userContext";

const RadioButton = ({
  label,
  type,
  value,
  name,
  onChange = undefined,
  checked,
}) => {
  const dispatch = useContext(UserDispatchContext);

  return (
    <>
      <label htmlFor={name}>
        <input
          type={type}
          value={value}
          id={name}
          checked={checked}
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
        {label}
      </label>
    </>
  );
};

export default RadioButton;
