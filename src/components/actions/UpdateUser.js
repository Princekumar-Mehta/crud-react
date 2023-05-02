import React from "react";
import { useContext } from "react";
import { ExistingUserContext } from "../../utils/userContext";
import TakeUserDetails from "./TakeUserDetails";
import { UpdateUserData } from "../../utils/userDataQueries";
const UpdateUser = ({ setUpdateId }) => {
  const existingUser = useContext(ExistingUserContext);

  const { mutate } = UpdateUserData({
    onSuccessDo: () => {
      setUpdateId(-1);
    },
  });

  function handleUpdateUser(updatedUser) {
    mutate(updatedUser);
  }
  return (
    <TakeUserDetails
      existingUser={existingUser}
      handleUser={handleUpdateUser}
    />
  );
};
export default UpdateUser;
