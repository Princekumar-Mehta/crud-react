import React, { useContext } from "react";
import { UserDispatchContext } from "../../utils/userContext";

const Textarea = ({ name, value, rows, cols, onChange = undefined }) => {
  const dispatch = useContext(UserDispatchContext);

  return (
    <textarea
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
      rows={rows}
      cols={cols}
    />
  );
};

export default Textarea;
