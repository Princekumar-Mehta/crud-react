import React, { useContext } from "react";
import { UserDispatchContext } from "../../utils/userContext";

const Dropdown = ({ value, values, name, onChange = undefined }) => {
  const dispatch = useContext(UserDispatchContext);

  return (
    <>
      <select
        value={value}
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
      >
        <option></option>
        {values.map((v) => {
          return <option key={v}>{v}</option>;
        })}
      </select>
    </>
  );
};

export default Dropdown;
