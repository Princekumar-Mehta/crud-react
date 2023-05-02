import React from "react";
import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import TakeUserDetails from "./TakeUserDetails";
import { useNavigate } from "react-router-dom";
const AddUser = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate } = useMutation(
    (user) => {
      axios.post("http://localhost:4000/users", user);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("users");
        navigate("/view-users");
      },
    }
  );

  function handleAddUser(newUser) {
    mutate(newUser);
  }
  return <TakeUserDetails handleUser={handleAddUser} />;
};

export default AddUser;
