import logo from './logo.svg';
import Home from './Pages/Home/Home';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Navigate,
} from "react-router-dom";import Login from "./Pages/login/Login";
import Register from "./Pages/register/Register";
import EditProfile from "./Pages/editProfile/EditProfile";
import Profile from "./Pages/Profile/Profile";
import PageNotFound from './Pages/404/NotFound404'
import "./component/Sidebar/Style/style.scss";
import { useContext } from "react";
import { DarkModeContext } from "./component/Context/UseContext";
import { AuthContext } from "./component/Context/AuthContext";
function App() {
  const { darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);
  const AuthRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/",
      element: (
        <AuthRoute>
          <Home />
        </AuthRoute>
      ),
    },
    {
      path: "/profile/:username",
      element: (
        <AuthRoute>
          <Profile />
        </AuthRoute>
      ),
    },
    {
      path: "/profile/:username/edit",
      element: (
        <AuthRoute>
          <EditProfile />
        </AuthRoute>
      ),
    },
  ]);
  return (
    <div className={darkMode ? "app dark" : "app"}> 
      <RouterProvider router={router} /> 
    </div>
  ); 
}

export default App;
