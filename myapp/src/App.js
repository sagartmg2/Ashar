import logo from './logo.svg';
import './App.css';
import Button from './component/Button';
import { Fragment } from 'react';

// class Amimal{
// for => htmlFor
// }

function App() {
  return (
    // <div>
    <Fragment>
      <Button
        type="big"
      />
      <Button
        type="small"
      />

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
