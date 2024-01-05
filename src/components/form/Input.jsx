import styles from "./Input.module.css";
import PropTypes from "prop-types";

function Input({ type, text, name, placeholder, handleOnChange, value }) {
  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{text}</label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={handleOnChange}
        value={value}
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
