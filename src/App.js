import Header from "./components/Header";
import {Todos} from "./components/Todos";

function App() {
  return (
    <>
      <Header title = "My Todos List" searchBar={true}/>
      <Todos />
      <Todos />
    </>
  );
}

export default App;
