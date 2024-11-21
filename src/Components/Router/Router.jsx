import { createBrowserRouter } from "react-router-dom";
import Home from "../Layout/Home";
import AllHome from "../../Components/Layout/AllHome";
import Details from "../Layout/Details";
import Login from "../Layout/Login";
import Register from "../Layout/Register";
import Package from "../Layout/Package";
import Error from "../Pages/Error";
import PrivetRouter from "./PrivetRouter";
import Profile from "../Layout/Profile";
import ProfileDes from "../Pages/ProfileDes";
import ForgetPassword from "../Pages/ForgetPassword";
import VocubularyCard from "./VocubularyCard";
import Video from "./Video";
import About from "../About";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <AllHome />,
      },
    ],
  },
  {
    path: "/details/:id",
    element: (
      <PrivetRouter>
        <Details></Details>
      </PrivetRouter>
    ),
    loader: () => fetch("../data.json"),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/packages",
    element: (
      <PrivetRouter>
        <Package />
      </PrivetRouter>
    ),
  },
  {
    path:'/lesson/:id',
    element: <VocubularyCard></VocubularyCard>

  },
  {
    path:'/tutorials',
    element: <PrivetRouter>
      <Video></Video>
    </PrivetRouter>

  },
  {
    path: "/profile",
    element: (
      <PrivetRouter>
        <Profile />
      </PrivetRouter>
    ),
  },
  {
    path: "/profileEdit",
    element: (
      <PrivetRouter>
        <ProfileDes />
      </PrivetRouter>
    ),
  },
  {
    path: "/forgetPassword",
    element: <ForgetPassword />,
  },
  {
    path: "/about",
    element: <About></About>,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

export default router;
