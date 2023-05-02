import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";

export const UseUserData = () => {
  return useQuery("users", fetchUser);
};
function fetchUser() {
  return axios.get("http://localhost:4000/users");
}

export const UpdateUserData = ({ onSuccessDo }) => {
  const queryClient = useQueryClient();
  return useMutation(
    (user) => {
      axios.put(`http://localhost:4000/users/${user.id}`, user);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("users");

        onSuccessDo();
      },
    }
  );
};
