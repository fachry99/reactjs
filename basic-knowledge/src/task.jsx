/* eslint-disable react/prop-types */
export const Task = (props) => {
  return (
    <div
      className="task"
      style={{ backgroundColor: props.Completed ? "green" : "white" }}
    >
      <h2>{props.taskName}</h2>
      <button onClick={() => props.CompleteTask(props.id)}> Complete</button>
      <button onClick={() => props.DeleteTask(props.id)}>X</button>
    </div>
  );
};
