import { UserContext, ChannelContext } from "../App";

function ComponentF() {
  return (
    <div>
      <UserContext.Consumer>
        {(user) => {
          return <div> User Context Value {user}</div>;
        }}
      </UserContext.Consumer>
      <ChannelContext.Consumer>
        {(channel) => {
          return <div> Channel Context Value {channel}</div>;
        }}
      </ChannelContext.Consumer>
    </div>
  );
}

export default ComponentF;
