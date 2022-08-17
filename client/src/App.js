import { Link, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Login from "./page/Login"
import Signup from "./page/Signup";

function App() {
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
