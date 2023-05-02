import React, { useContext } from "react";
import { UserDispatchContext } from "../../utils/userContext";
const Checkbox = ({
  label,
  type,
  value,
  name,
  checked,
  onChange = undefined,
}) => {
  const dispatch = useContext(UserDispatchContext);
  return (
    <>
      <label htmlFor={name}>
        <input
          type={type}
          value={value}
          id={name}
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
          checked={checked}
        />
        {label}
      </label>
    </>
  );
};

export default Checkbox;
