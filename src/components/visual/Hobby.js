import Checkbox from "./Checkbox";
const Hobby = ({ hobby, hobbies, name }) => {
  return (
    <div>
      <span>
        <label htmlFor={hobby}>
          <Checkbox
            type="checkbox"
            name={name}
            id={hobby}
            value={hobby}
            checked={hobbies.includes(hobby)}
          />
          {hobby}
        </label>
      </span>
    </div>
  );
};

export default Hobby;
