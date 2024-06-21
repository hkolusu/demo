import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"
import Dashboard from "./components/Dashboard";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Dashboard/>}>
      <Route index element={<Register/> } />
      <Route path="login" element={<Login/> } />
      <Route path="Home" element={<Home /> } />
    </Route>
  )
)

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
