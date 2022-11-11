import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import LayoutLogin from './pages/LayoutLogin';
import LayoutLogout from './pages/LayoutLogout';
import Welcome from './pages/Welcome';
import LoginEmail from './pages/LoginEmail';
import RegisterEmail from './pages/RegisterEmail';
import Profile from './pages/Profile';
import Description from './pages/Description';
import WishList from './pages/WishList';
import Shop from './pages/Shop';



const router = createBrowserRouter([
  {
    path: "/",
    element:<LayoutLogin />,
    children: [
      {
        index: true,
        element: <Welcome />,
      },
      {
        path: "/loginEmail",
        element: <LoginEmail />,
      },
      {
        path: "/registerEmail",
        element: <RegisterEmail />,
      },
      {
        path: "/profile",
        element:<Profile />
      },
      {
        path: "/WishList",
        element: <WishList />,
      },
      {
        path: "/description",
        element:<Description />
      },
      {
        path: "/shop",
        element:<Shop />
      }
    ]
  },
  
  


 

]);

function App() {
 
  return (
    <div className="App bg-[#EFF2F6] h-screen overflow-y-scroll  relative">     
        <RouterProvider router={router} />
    </div>
  )
}

export default App
