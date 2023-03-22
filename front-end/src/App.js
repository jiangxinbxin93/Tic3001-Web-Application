
import "./App.css";
import 'bulma/css/bulma.min.css';

import Displaycontact from "./components/Displaycontact";
import Phonebook from "./components/Phonebook";
function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-half">
            <h1 className="title">My Phone Book</h1>
            <Phonebook/>
            <hr/>
            <Displaycontact/>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
