import React from "react";
import User from "../visual/User";

import { UseUserData } from "../../utils/userDataQueries";
const ViewUsers = () => {
  const { isLoading, data, refetch } = UseUserData(); // key, function call

  if (isLoading) {
    return <h2>Loading</h2>;
  } else {
    return (
      <>
        <h2>View Users Page</h2>
        {data.data.length === 0
          ? "No Users"
          : data.data.map((user) => {
              return (
                <User key={user.id} existingUser={user} refetch={refetch} />
              );
            })}
      </>
    );
  }
};

export default ViewUsers;
