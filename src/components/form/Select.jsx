import styles from "./Select.module.css";

function Select({ id, optionsArray }) {
  return (
    <select
      name={id}
      id={id}
      defaultValue={0}
    >
      {optionsArray.map(
        (item, index) =>
          true && (
            <option
              selected={item.selected}
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
