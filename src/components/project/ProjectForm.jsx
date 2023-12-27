import Input from "../form/Input";
import styles from "./ProjectForm.module.css";

function ProjectForm() {
  return (
    <form className={styles.form}>
      <Input placeholder="Insira o nome do Projeto" />
      <Input
        type="number"
        placeholder="Insira o orçamento total"
      />

      <div>
        <select
          name="category_id"
          id="category_id"
        >
          <option disabled>Selecione uma categoria</option>
        </select>
      </div>

      <Input
        type="submit"
        value="Criar Projeto"
      />
    </form>
  );
}

export default ProjectForm;
