import styles from "./SubmitButton.module.css";

function SubmitButton({ id, text }) {
  return (
    <div className={styles.form_control}>
      <button
        id={id}
        className={styles.btn}
      >
        {text}
      </button>
    </div>
  );
}

export default SubmitButton;
