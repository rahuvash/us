import logo from "./logo.svg";
import "./App.css";
import { Route, Routes as Switch } from "react-router-dom";
import Main from "./Components/Main/Main";
function App() {
  return (
    <div className="App">
      {/* hw */}

      {/* <Route path="/" component={Main}> */}
      <Main />
      {/* </Route> */}
    </div>
  );
}

export default App;
