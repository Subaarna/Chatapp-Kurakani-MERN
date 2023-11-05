import { Routes, Route, Navigate } from "react-router-dom";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Register from "./pages/Register";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Chat />} />
        <Route path="/" element={<Login />} />
        <Route path="/" element={<Register />} />
        <Route path = "*" element = {<Navigate />} />
      </Routes>
    </>
  );
}

export default App;
