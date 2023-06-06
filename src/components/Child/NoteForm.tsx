import { FormEvent, memo, useRef, useState } from "react";
import Select from "react-select/creatable";
import { NoteData, Tag } from "../../types/Note";
import { Link, useNavigate } from "react-router-dom";
import {
  NoteNormalOnChange,
  NoteSelectBoxHandler,
} from "../../utils/OnChangeHandler";
import { v4 as uuidV4 } from "uuid";

type NoteFormProps = {
  onSubmit: (data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[];
} & Partial<NoteData>;

const NoteForm = memo(function NoteForm({
  onSubmit,
  onAddTag,
  availableTags,
  title = "",
  markdown = "",
  tags = [],
}: NoteFormProps) {
  const titleRef = useRef<HTMLInputElement>(null);
  const markdownRef = useRef<HTMLTextAreaElement>(null);
  const [selectedTags, setSelectedTags] = useState<Tag[]>(tags);
  const navigate = useNavigate();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit({
      title: titleRef.current!.value,
      markdown: markdownRef.current!.value,
      tags: selectedTags,
    });
    navigate("..");
  };
  return (
    <form className="note_form">
      <div className="form_field">
        <label htmlFor="title">title</label>
        <input
          defaultValue={title}
          className="form_input"
          type="text"
          id="title"
          name="title"
          ref={titleRef}
        />
      </div>
      <div className="form_field">
        <label htmlFor="tags">tags</label>
        <Select
          onCreateOption={(label) => {
            const newTag = { id: uuidV4(), label };
            onAddTag(newTag);
            setSelectedTags((prev) => [...prev, newTag]);
          }}
          value={selectedTags.map((tag) => {
            return { label: tag.label, value: tag.id };
          })}
          options={availableTags.map((tag) => {
            return { label: tag.label, value: tag.id };
          })}
          onChange={(tags) => {
            setSelectedTags(
              tags.map((tag) => {
                return { label: tag.label, id: tag.value };
              })
            );
          }}
          styles={{
            control: (baseStyles) => ({
              ...baseStyles,
              borderColor: "#007acc",
              padding: "5px",
            }),
          }}
          className="form_input_select"
          inputId="tags"
          isMulti={true}
        />
      </div>
      <div className="form_field">
        <label htmlFor="markdown">markdown</label>
        <textarea
          defaultValue={markdown}
          required
          ref={markdownRef}
          name="markdown"
          className="form_input"
          id="markdown"
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
