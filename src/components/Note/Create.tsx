import { memo } from "react";
import NoteForm from "../Child/NoteForm";
import { NoteData, Tag } from "../../types/Note";

type CreateNoteProps = {
  onSubmit: (data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[];
};

const CreateNote = memo(function CreateNote({ onSubmit,onAddTag,availableTags }: CreateNoteProps) {
  return (
    <div className="note_main_div">
      <NoteForm
        onSubmit={onSubmit}
        onAddTag={onAddTag}
        availableTags={availableTags}
      />
    </div>
  );
});

export default CreateNote;
