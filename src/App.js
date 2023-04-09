import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./pages/Header";
import { Main } from "./pages/Main";
import { NotFound } from "./pages/NotFound.jsx";
import { SignUp } from "./pages/SignUp";
import { SignIn } from "./pages/SignIn";
import { Todo } from "./pages/Todo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/todo" element={<Todo />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
