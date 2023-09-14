import { ChangeProfile } from "../Components/ChangeProfile";
import { useContext } from "react";
import { AppContext } from "../App";

export const Profile = () => {
  const { userName } = useContext(AppContext);
  return (
    <div>
      THIS IS THE Profile page {userName}
      <ChangeProfile />
    </div>
  );
};
