import { useState } from "react";
import styles from "./Select.module.css";
import PropTypes from "prop-types";

function Select({ id, text, options, handleOnChange, value }) {
  const [valor, setValor] = useState(value);

  return (
    <div className={styles.form_control}>
      <label htmlFor={id}>{text}</label>
      <select
        name={id}
        id={id}
        onChange={(e) => setValor(e.target.value)}
        value={valor}
      >
        {options.map((option, index) => (
          <option
            disabled={option.disabled}
            value={option.id}
            key={option.id}
          >
            {option.name}
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
  options: PropTypes.array,
};

Select.defaultProps = {
  type: "text",
};

export default Select;
