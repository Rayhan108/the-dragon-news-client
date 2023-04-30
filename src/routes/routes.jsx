import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Catagogy from "../pages/Home/Catagory/Catagogy";
import NewsLayout from "../layout/NewsLayout/NewsLayout";
import News from "../pages/News/News/News";
import LoginLayout from "../layout/LoginLayout/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import PrivetRoutes from "./PrivetRoutes/PrivetRoutes";
import Terms from "../pages/Home/Home/shared/terms/Terms";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    children:[
      {
        path:"/",
        element:<Navigate to="/catagory/0"></Navigate>
      },
      {
        path:"login",
        element:<Login></Login>
      },
      {
        path:"register",
        element:<Register></Register>
      },
      {
        path:"terms",
        element:<Terms></Terms>
      }
    ]
  },
  {
    path: "/catagory",
    element: <Main></Main>,
    children: [
      {
        path: ":id",
        element: <Catagogy></Catagogy>,
        loader: ({ params }) =>
          fetch(`https://the-dragon-news-server-rayhan108.vercel.app/catagories/${params.id}`),
      },
    ],
  },
  {
    path: "/news",
    element: <NewsLayout></NewsLayout>,
    children: [
      {
        path: ":id",
        element:<PrivetRoutes> <News></News></PrivetRoutes>,
        loader: ({ params }) =>
          fetch(`https://the-dragon-news-server-rayhan108.vercel.app/news/${params.id}`),
      },
    ],
  },
]);
export default router;
