import logo from './logo.svg';
import './App.css';

// class Amimal{
// for => htmlFor
// }


function App() {
  return (
    <div class="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Hello , welcome to react
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
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
