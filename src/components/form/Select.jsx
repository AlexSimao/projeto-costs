import styles from "./Select.module.css";
import PropTypes from "prop-types";

function Select({ id, text, optionsArray, handleOnChange, value }) {
  return (
    <div className={styles.form_control}>
      <label htmlFor={id}>{text}</label>
      <select
        name={id}
        id={id}
        defaultValue={value}
      >
        {optionsArray.map((item, index) => (
          <option
            disabled={item.disabled}
            value={index}
            key={index}
          >
            {item.text}
          </option>
        ))}
      </select>
    </div>
  );
}

Select.propTypes = {
  id: PropTypes.any.isRequired,
  type: PropTypes.string,
  text: PropTypes.string,
  placeholder: PropTypes.string,
};

Select.defaultProps = {
  type: "text",
};

export default Select;
