import { Navigate, Route, Routes } from "react-router";
import "./styles/App.css";
import Note from "./components/Note/Index";
import IndexNote from "./pages/Note/Index";
import SingleNote from "./components/Note/SingleNote";
import EditNote from "./components/Note/Edit";
import CreateNote from "./components/Note/Create";

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexNote />}>
        <Route index element={<Note />} />
        <Route path="create-note" element={<CreateNote />} />
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
