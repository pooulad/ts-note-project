import { Navigate, Route, Routes } from "react-router";
import Note from "./components/Note/Index";
import IndexNote from "./pages/Note/Index";
import "./styles/App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>home</h1>} />
      <Route path="/new" element={<h1>new</h1>} />
      <Route path="/note/:id" element={<IndexNote />}>
        <Route index element={<Note />} />
        <Route path="edit" element={<h1>edit</h1>} />
      </Route>
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
}

export default App;
