import { Navigate, useParams } from "react-router-dom";
import { Note, NoteData, Tag } from "../../types/Note";
import NoteForm from "../Child/NoteForm";

type EditNoteProps = {
  onSubmit: (id: string, data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[];
  notes: Note[];
};

export default function EditNote({
  onSubmit,
  onAddTag,
  availableTags,
  notes,
}: EditNoteProps) {
  const { id } = useParams();
  const note = notes.find((n) => n.id === id);
  if (note == null) return <Navigate to="/" replace />;
  return (
    <>
      <h1 className="mb-4">Edit Note</h1>
      <NoteForm
        title={note.title}
        markdown={note.markdown}
        tags={note.tags}
        onSubmit={(data) => onSubmit(note.id, data)}
        onAddTag={onAddTag}
        availableTags={availableTags}
      />
    </>
  );
}
