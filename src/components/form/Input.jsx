import styles from "./Input.module.css";
import PropTypes from "prop-types";

function Input({ type, placeholder }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
    />
  );
}

Input.prototypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  type: "text",
};

export default Input;
