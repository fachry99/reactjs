import PropTypes from "prop-types";

function Person({ person }) {
  return (
    <div>
      <h2 key={person.id}>
        I am {person.name}. {person.age} {person.skill}
      </h2>
    </div>
  );
}

Person.propTypes = {
  person: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    skill: PropTypes.string.isRequired,
  }).isRequired,
};

export default Person;
