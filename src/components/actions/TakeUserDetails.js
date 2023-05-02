import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { CITIES, COUNTRIES, HOBBIES, STATES } from "../../utils/constants";
import { isValidate } from "../../utils/helperFunctions";
import Button from "../visual/Button";
import Hobby from "../visual/Hobby";
import Dropdown from "../visual/Dropdown";
import Input from "../visual/Input";
import RadioButton from "../visual/RadioButton";
import Textarea from "../visual/Textarea";
import { useReducer } from "react";
import { reducer } from "../../utils/reducer";
import { UserContext, UserDispatchContext } from "../../utils/userContext";
const TakeUserDetails = ({ existingUser, handleUser }) => {
  function fetchUser() {
    return axios.get("http://localhost:4000/users");
  }
  const { isLoading, data } = useQuery("users", fetchUser);
  console.log(existingUser);
  const [user, userDispatch] = useReducer(
    reducer,
    existingUser !== undefined
      ? existingUser
      : {
          name: "",
          phoneNumber: "",
          gender: "",
          country: "",
          state: "",
          city: "",
          hobbies: [],
          aboutMe: "",
        }
  );

  function makeUser() {
    if (!isValidate(user)) return;
    if (!isLoading) {
      let nextId = 1;
      data.data.forEach((u) => {
        if (nextId < u.id) nextId = u.id;
      });

      user["id"] = existingUser === undefined ? nextId + 1 : existingUser.id;
      handleUser(user);
    }
  }
  return (
    <UserContext.Provider value={user}>
      <UserDispatchContext.Provider value={userDispatch}>
        <div className="container">
          <span>
            <Input
              x={10}
              label="Name:"
              type="text"
              name="name"
              value={user.name}
              placeholder="Enter Your Name"
            />
          </span>

          <span>
            <Input
              label="Phone Number:"
              type="text"
              value={user.phoneNumber}
              placeholder="Enter Phone Number"
              name="phoneNumber"
            />
          </span>

          <span>
            <label htmlFor="">Gender</label>

            <RadioButton
              label="male"
              type="radio"
              name="gender"
              id="male"
              value="male"
              checked={user.gender === "male"}
            />
            <RadioButton
              label="female"
              type="radio"
              name="gender"
              id="female"
              value="female"
              checked={user.gender === "female"}
            />
          </span>
          <span>
            <label htmlFor="">Country:</label>
            <Dropdown name="country" value={user.country} values={COUNTRIES} />
          </span>
          <span>
            <label htmlFor="">State:</label>
            <Dropdown name="state" value={user.state} values={STATES} />
          </span>

          <span>
            <label htmlFor="">City:</label>
            <Dropdown name="city" value={user.city} values={CITIES} />
          </span>

          <span>
            Hobbies:
            {HOBBIES.map((hobby) => {
              return (
                <Hobby
                  key={hobby}
                  name="hobbies"
                  hobby={hobby}
                  hobbies={user.hobbies}
                />
              );
            })}
          </span>

          <span>
            <label htmlFor="">
              About Me:
              <br />
              <Textarea
                name="aboutMe"
                value={user.aboutMe}
                rows="5"
                cols="40"
              />
            </label>
          </span>
          <Button className="button" onClick={makeUser}>
            {existingUser === undefined ? "Add User" : "Update User"}
          </Button>
        </div>
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
};

export default TakeUserDetails;
