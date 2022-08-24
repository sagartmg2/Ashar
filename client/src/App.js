import { Link, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Login from "./page/Login"
import Signup from "./page/Signup";
import { useEffect, useState } from "react"
import axios from "axios";
import { useDispatch } from "react-redux";
import { login, logout, setUser } from "./redux/reducer/auth";
import Home from "./page/Home";
import Create from "./page/Product/Create";
import ProtectedRoute from "./component/ProtectedRoute";


function App() {

  const [user_fetched, setUserFetched] = useState(false);

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
          setUserFetched(true)
        })
        .catch(err => {
          dispatch(logout())
          setUserFetched(true)
        })
    }
  }, [])

  if (!user_fetched) {
    return (<>
      <h1>Loading....</h1>
    </>)
  }

  return (
    <>
      <div className='container'>
        <Navbar />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/sellers" element={<ProtectedRoute role="seller" />}>
            <Route path="products/create" element={<Create />} />
          </Route>
          {/* <Route path="/buyer" element={<ProtectedRoute role="buyer" />}>
            <Route path="products/create" element={<Create />} />
          </Route> */}

          <Route path="*" element={<h1>page not found</h1>} />
        </Routes>
      </div>

    </>
  );
}

export default App;
