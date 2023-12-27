import styles from "./Input.module.css";
import PropTypes from "prop-types";

function Input({ type, text, name, placeholder, handleOnChange, value }) {
  return (
    <div>
      <label htmlFor={name}>{text}</label>
      <input
        value={value}
        name={name}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  type: "text",
};

export default Input;
