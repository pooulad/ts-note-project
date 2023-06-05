import { memo } from "react";
import NoteForm from "../Child/NoteForm";
import { NoteData } from "../../types/Note";

type CreateNoteProps = {
  onSubmit: (data: NoteData) => void;
};

const CreateNote = memo(function CreateNote({ onSubmit }: CreateNoteProps) {
  return (
    <div className="note_main_div">
      <NoteForm onSubmit={onSubmit} />
    </div>
  );
});

export default CreateNote;
