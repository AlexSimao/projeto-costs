import { useEffect, useState } from "react";

import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";
import styles from "./ProjectForm.module.css";

function ProjectForm({ btnText }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories", {
      method: "GET",
      headers: {
        "Content-Types": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => console.log(err));
  }, []);

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
        options={categories}
      />

      <SubmitButton
        id="btn_submit"
        text={btnText}
      />
    </form>
  );
}

export default ProjectForm;
