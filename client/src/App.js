import { Link, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Login from "./page/Login"
import Signup from "./page/Signup";
import {useEffect} from "react"
import axios from "axios";


function App() {

  // useEffect(() => {

  //   if(localStorage.getItem("access_token"))
  //   {
  //     axios.get(`${process.env.REACT_APP_SERVER_URL}/users/get-user`) 
  //   }

  // },[])
  

  return ( 
    <>
      <div className='container'>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>

    </>
  );
}

export default App;
