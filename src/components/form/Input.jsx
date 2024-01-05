import styles from "./Input.module.css";
import PropTypes from "prop-types";

function Input({ type, text, id, placeholder, handleOnChange, value }) {
  return (
    <div className={styles.form_control}>
      <label htmlFor={id}>{text}</label>
      <input
        type={type}
        name={id}
        id={id}
        placeholder={placeholder}
        onChange={handleOnChange}
        value={value}
      />
    </div>
  );
}

Input.propTypes = {
  id: PropTypes.any.isRequired,
  type: PropTypes.string,
  text: PropTypes.string,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  type: "text",
};

export default Input;
