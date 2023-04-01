import { Link, Routes, Route } from "react-router-dom"
import LoginPage from "./Components/LoginPage";
import UserInfo from "./Components/UserInfo";
import "./App.css";



function App() {
  return (
    <>
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/UserInfo">UserInfo</Link></li>
      </ul>
    </nav>
     <Routes>
        <Route path="/" element={ <LoginPage/> } />
        <Route path="/UserInfo" element={<UserInfo />} />
      </Routes>
    </>
  );
}

export default App;
