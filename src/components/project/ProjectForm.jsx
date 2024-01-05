import Input from "../form/Input";
import Select from "../form/Select";
import styles from "./ProjectForm.module.css";

function ProjectForm() {
  return (
    <form className={styles.form}>
      <Input
        text="Nome do Projeto"
        placeholder="Insira o nome do Projeto"
      />
      <Input
        text="Orçamento do Projeto"
        type="number"
        placeholder="Insira o orçamento total"
      />

      <Select
        value={0}
        id="category_id"
        optionsArray={[
          {
            text: "Selecione uma categoria",
            disabled: true,
          },
        ]}
      />

      <Input
        type="submit"
        value="Criar Projeto"
      />
    </form>
  );
}

export default ProjectForm;
