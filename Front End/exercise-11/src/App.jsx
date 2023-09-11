import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar";
import UsersPage from "./pages/users";
import RegistersPage from "./pages/registers";
import TwitterPage from "./pages/twitter";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<h1>Home</h1>} />
        <Route path='/users' element={<UsersPage />} />
        <Route path='/register' element={<RegistersPage />} />
        <Route path='/twitter' element={<TwitterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
