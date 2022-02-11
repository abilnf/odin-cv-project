import "../styles/Input.css";

function Input(props) {
  return (
    <div>
      <label>{props.label}</label>
      <input
        type={props.type}
        onChange={(e) => props.onChange(e.target.value)}
        value={props.value}
      />
    </div>
  );
}

Input.defaultProps = {
  type: "text",
  value: "",
};

export default Input;
