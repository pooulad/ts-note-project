import { Navigate, Route, Routes } from "react-router";
import Note from "./components/Note/Index";
import IndexNote from "./pages/Note/Index";
import SingleNote from "./components/Note/SingleNote";
import EditNote from "./components/Note/Edit";
import CreateNote from "./components/Note/Create";
import "./styles/App.css";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { RawNote, Tag } from "./types/Note";
import { useMemo } from "react";
import { OnCreateNote } from "./utils/Function";

function App() {
  const [notes, setNotes] = useLocalStorage<RawNote[]>("NOTES", []);
  const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", []);
  const notesWithTags = useMemo(() => {
    return notes.map((note) => {
      return {
        ...note,
        tags: tags.filter((tag) => note.tagIds.includes(tag.id)),
      };
    });
  }, [notes, tags]);
  return (
    <Routes>
      <Route path="/" element={<IndexNote />}>
        <Route index element={<Note />} />
        <Route
          path="create-note"
          element={<CreateNote onSubmit={OnCreateNote(_, setNotes)} />}
        />
        <Route path=":id">
          <Route index element={<SingleNote />} />
          <Route path="edit" element={<EditNote />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
}

export default App;
