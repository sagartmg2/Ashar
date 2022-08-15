import logo from './logo.svg';
import './App.css';
import Button from './component/Button';
import { Fragment,useState } from 'react';
import ButtonClass from './component/ButtonClass';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import ProtectedRoute from './ProtectedRoute';

// class Amimal{
// for => htmlFor
// }

function App() {

  const [state, setstate] = useState("initialState");
  return (
    // <div>
    <Fragment>
      <BrowserRouter>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="teams">teams</Link></li>
          <li><Link to="button">button</Link></li>
          <li><Link to="teams/button">teambutton</Link></li>
          <li><Link to="class-button">classbutton</Link></li>
        </ul>
        <Routes>
          <Route path="/">
            <Route index element={<h1>Home</h1>} />
            <Route path="teams" element={<ProtectedRoute />} >
              <Route index element={<h1>Teams</h1>} />
              {/* <Route path=":<slug>" element={<h1>Team Code</h1>} /> */}
              <Route path=":code" element={<h1>Team Code</h1>} />
              <Route path="button" element={<Button setstate={setstate} title={state} />}>
              </Route>
            </Route>
            <Route path="class-button" element={<ButtonClass />}>
              <Route path="button" element={<Button />}>
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>

      {/* <Button
        type="big"
      /> */}
      {/* <Button
        type="small"
      />
      <ButtonClass
        type="button class"
      /> */}

    </Fragment>
  );
}


export const BigButton = () => {
  return (
    <div>
      Big button
    </div>
  )
}
export const SmallButton = () => {

}
export default App;


// module.exports = App

// module.exporst =  {

// }
