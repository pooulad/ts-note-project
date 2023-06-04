import { Navigate, Route, Routes } from "react-router";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>home</h1>} />
      <Route path="/new" element={<h1>new</h1>} />
      <Route path="/:id">
        <Route index element={<h1>id index</h1>} />
        <Route path="edit" element={<h1>edit</h1>} />
      </Route>
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
}

export default App;
