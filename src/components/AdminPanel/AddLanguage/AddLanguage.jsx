import AddNewForm from "./AddNewForm/AddNewForm";

const AddLanguage = ({ addLanguage = () => {} }) => {
  return (
    <div>
      <AddNewForm addLanguage={addLanguage} />
    </div>
  );
};

export default AddLanguage;
