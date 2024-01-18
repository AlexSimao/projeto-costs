import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";
import styles from "./ProjectForm.module.css";

function ProjectForm({ btnText }) {
  return (
    <form className={styles.form}>
      <Input
        id="nome_projeto"
        text="Nome do Projeto"
        placeholder="Insira o nome do Projeto"
      />
      <Input
        id="orcamento_projeto"
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

      <SubmitButton
        id="btn_submit"
        text={btnText}
      />
    </form>
  );
}

export default ProjectForm;
