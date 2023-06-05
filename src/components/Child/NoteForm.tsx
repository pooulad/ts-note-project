import { FormEvent, memo, useState } from "react";
import Select from "react-select/creatable";
import { NoteData } from "../../types/Note";
import { Link } from "react-router-dom";
import {
  NoteNormalOnChange,
  NoteSelectBoxHandler,
} from "../../utils/OnChangeHandler";

type NoteFormProps = {
  onSubmit: (data: NoteData) => void;
  setState : 
};
const NoteForm = memo(function NoteForm({ onSubmit,setState }: NoteFormProps) {
  const [formData, setFormData] = useState<NoteData>({
    title: "",
    body: "",
    tags: [],
  });
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit({
      title: "title",
      body: "body",
      tags: [{ id: "1", label: "label", value: "value" }],
    },setState);
  };
  console.log(formData);
  return (
    <form className="note_form">
      <div className="form_field">
        <label htmlFor="title">title</label>
        <input
          value={formData.title}
          onChange={(e) => {
            NoteNormalOnChange(e, setFormData);
          }}
          className="form_input"
          type="text"
          id="title"
          name="title"
        />
      </div>
      <div className="form_field">
        <label htmlFor="tags">tags</label>
        <Select
          styles={{
            control: (baseStyles) => ({
              ...baseStyles,
              borderColor: "#007acc",
              padding: "5px",
            }),
          }}
          value={formData.tags}
          onChange={(e) => {
            NoteSelectBoxHandler(e, setFormData, "tags");
          }}
          className="form_input_select"
          inputId="tags"
          isMulti={true}
        />
      </div>
      <div className="form_field">
        <label htmlFor="body">body</label>
        <textarea
          value={formData.body}
          onChange={(e) => {
            NoteNormalOnChange(e, setFormData);
          }}
          name="body"
          className="form_input"
          id="body"
        />
      </div>
      <div className="form_action">
        <button type="submit" onClick={handleSubmit} className="save_btn">
          save
        </button>
        <Link className="cancle_btn" to={"/"}>
          cancle
        </Link>
      </div>
    </form>
  );
});

export default NoteForm;
