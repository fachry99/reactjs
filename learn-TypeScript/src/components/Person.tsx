/* eslint-disable react-refresh/only-export-components */
interface Props {
  name: string;
  age: number;
  hobbies: string[];
  isMarried: boolean;
  friends: string[];
  country: Country;
}

export enum Country {
  Indonesia = "Indonesia",
  Malaysia = "Malaysia",
  Singapore = "Singapore",
}

export const Person = (props: Props) => {
  //make useState in typescript
  // const [name, setName] = useState<string>("");
  return (
    <div>
      <h1>{props.name}</h1>
      <p>Age: {props.age}</p>
      <p>Hobbies: {props.hobbies}</p>
      <p>Married: {props.isMarried ? "Yes" : "No"} Married</p>
      {props.friends.map((friend: string) => {
        return <p>{friend}</p>;
      })}
      <p>From Country {props.country}</p>
    </div>
  );
};
