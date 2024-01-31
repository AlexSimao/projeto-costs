import { useEffect, useState } from "react";

import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";
import styles from "./ProjectForm.module.css";

function ProjectForm({ btnText, handleSubmit, projectData }) {
  const [categories, setCategories] = useState([]);

  const [project, setProject] = useState(projectData || {});

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

  const submit = (e) => {
    e.preventDefault();
    handleSubmit(project);
  };

  function handleChange(e) {
    setProject({ ...project, [e.target.name]: e.target.value });
    console.log(project);
  }

  function handleCategory(e) {
    setProject({
      ...project,
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    });
    console.log(project);
  }

  return (
    <form
      onSubmit={submit}
      className={styles.form}
    >
      <Input
        id="nome_projeto"
        text="Nome do Projeto"
        placeholder="Insira o nome do Projeto"
        handleOnChange={handleChange}
      />
      <Input
        id="orcamento_projeto"
        text="Orçamento do Projeto"
        type="number"
        placeholder="Insira o orçamento total"
        handleOnChange={handleChange}
      />

      <Select
        value={0}
        id="category_id"
        options={categories}
        handleOnChange={handleCategory}
      />

      <SubmitButton
        id="btn_submit"
        text={btnText}
      />
    </form>
  );
}

export default ProjectForm;
