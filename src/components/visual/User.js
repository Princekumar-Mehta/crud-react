import React from "react";
import { useState } from "react";
import axios from "axios";
import { useMutation } from "react-query";
import UpdateUser from "../actions/UpdateUser";
import { ExistingUserContext } from "../../utils/userContext";
import Button from "./Button";
const User = ({ existingUser }) => {
  let [updateId, setUpdateId] = useState(-1);
  const deleteUser = useMutation((id) => {
    return axios.delete(`http://localhost:4000/users/${id}`);
  });
  function handleDelete(id) {
    deleteUser.mutate(id);
    window.location.reload();
  }
  return (
    <div key={existingUser.id}>
      {updateId !== existingUser.id && (
        <div class=".user-card">
          <span>ID : {existingUser.id}</span>
          <span>Name : {existingUser.name}</span>
          <span>Gender : {existingUser.gender}</span>
          <span>Phone Number : {existingUser.phoneNumber}</span>
          <span>
            Hobbies:{" "}
            <ul>
              {existingUser.hobbies.map((hobby) => {
                return <li key={hobby}>{hobby}</li>;
              })}
            </ul>
          </span>
          <span>Country: {existingUser.country}</span>
          <span>State: {existingUser.state}</span>
          <span>City: {existingUser.city}</span>
          <span>About Me: {existingUser.aboutMe}</span>

          <Button
            className="button"
            onClick={handleDelete.bind(null, existingUser.id)}
          >
            Delete
          </Button>
          <Button
            className="button"
            onClick={() =>
              existingUser.id !== updateId
                ? setUpdateId(existingUser.id)
                : setUpdateId(-1)
            }
          >
            Update
          </Button>
        </div>
      )}

      {updateId === existingUser.id && (
        <>
          <ExistingUserContext.Provider value={existingUser}>
            <UpdateUser setUpdateId={setUpdateId}></UpdateUser>
          </ExistingUserContext.Provider>
        </>
      )}
      <hr />
    </div>
  );
};

export default User;
