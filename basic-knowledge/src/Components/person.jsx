/* eslint-disable react/jsx-key */
import PropType from "prop-types";
export const Person = (props) => {
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <h1>Email: {props.email}</h1>
      <h1>Age: {props.age}</h1>
      <h1>This person {props.isMarried ? "is" : "is Not"} Married</h1>
      {props.friends.map((friend) => {
        return <h1>{friend}</h1>;
      })}
    </div>
  );
};

Person.propTypes = {
  name: PropType.string.isRequired,
  email: PropType.string.isRequired,
  age: PropType.number.isRequired,
  isMarried: PropType.bool.isRequired,
  // eslint-disable-next-line no-undef
  friends: PropType.arrayOf(PropType.string).isRequired,
};
