import styles from "./ProjectForm.module.css"

function ProjectForm() {
  return (
    <form className={styles.form}>
      <div>
        <input
          type="text"
          placeholder="Insira o nome do Projeto"
        />
      </div>
      <div>
        <input
          type="number"
          placeholder="Insira o orçamento total"
        />
      </div>
      <div>
        <select
          name="category_id"
          id="category_id"
        >
          <option disabled>Selecione uma categoria</option>
        </select>
      </div>
      <div>
        <input
          type="submit"
          value="Criar Projeto"
        />
      </div>
    </form>
  );
}

export default ProjectForm;
