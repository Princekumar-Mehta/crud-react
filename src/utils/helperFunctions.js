export function isValidate(newUser) {
  if (
    newUser.name === "" ||
    newUser.phoneNumber === "" ||
    newUser.gender === "" ||
    newUser.country === "" ||
    newUser.state === "" ||
    newUser.city === "" ||
    newUser.aboutMe === ""
  ) {
    alert("Please Fill All The Fields");
    return false;
  }
  if (newUser.phoneNumber.length < 10) {
    alert("Phonenumber length must be at least 10");
    return false;
  }
  return true;
}
