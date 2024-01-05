import styles from "./Select.module.css";

function Select({ id, optionsArray, value }) {
  return (
    <select
      name={id}
      id={id}
      defaultValue={value}
    >
      {optionsArray.map(
        (item, index) =>
          true && (
            <option
              disabled={item.disabled}
              value={index}
              key={index}
            >
              {item.text}
            </option>
          )
      )}
    </select>
  );
}

export default Select;
