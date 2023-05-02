export function reducer(oldUser, action) {
    if (action.type === "changed") {
      let tempUser = structuredClone(oldUser);
      let newValue = action.value;
      if (action.field === "hobbies") {
        newValue = structuredClone(oldUser.hobbies);
        if (newValue.includes(action.value)) {
          newValue = newValue.filter(function (value) {
            return value !== action.value;
          });
        } else {
          newValue.push(action.value);
        }
      }
      tempUser[action.field] = newValue;
      return tempUser;
    } else {
      throw Error("Unknown action: " + action.type);
    }
  }