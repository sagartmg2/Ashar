import { Link, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Login from "./page/Login"
import Signup from "./page/Signup";
import { useEffect } from "react"
import axios from "axios";
import { useDispatch } from "react-redux";
import { login, logout, setUser } from "./redux/reducer/auth";
import Home from "./page/Home";
import Create from "./page/Product/Create";


function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      axios.get(`${process.env.REACT_APP_SERVER_URL}/users/get-user`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")} `
        }
      })
        .then(res => {
          dispatch(login())
          dispatch(setUser(res.data))
        })
        .catch(err => {
          dispatch(logout())
        })
    }
  }, [])


  return (
    <>
      <div className='container'>
        <Navbar />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/sellers" >
          <Route path="products/create" element={<Create />} />
          </Route>

          <Route path="*" element={<h1>page not found</h1>} />
        </Routes>
      </div>

    </>
  );
}

export default App;
