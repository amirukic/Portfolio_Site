import "./App.css" 
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Shape from "./components/shape/Shape";

function App() {
  return (
    <div className="App">
      <Shape />
      <Header />
      <Main />
      <hr></hr>
    </div>
  );
}

export default App;
