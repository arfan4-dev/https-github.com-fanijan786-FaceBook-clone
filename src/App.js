import logo from './logo.svg';
import Home from './Pages/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/login/Login";
import Register from "./Pages/register/Register";
import EditProfile from "./Pages/editProfile/EditProfile";
import Profile from "./Pages/Profile/Profile";
import PageNotFound from './Pages/404/NotFound404'
import "./component/Sidebar/Style/style.scss";
import { useContext } from "react";
import { DarkModeContext } from "./component/Context/UseContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dark" : "app"}> 
     
     <BrowserRouter>

        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route index element={<Home />} />
            <Route path="profile">
              <Route path=":userId" element={<Profile />} />
              <Route path=":userId/edit" element={<EditProfile />} />
            </Route>
            <Route path='*' element={<PageNotFound/>}/>
          </Route>
        </Routes>
      </BrowserRouter>

      
    </div>
  ); 
}

export default App;
