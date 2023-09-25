function ChildComponent(props) {
  return (
    <div>
      <button onClick={() => props.greetHandler("child")}>Greet Parent</button>
    </div>
  );
}
export default ChildComponent;
// Compare this snippet from hello-world/src/components/EventBind.jsx:
