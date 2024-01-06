import AppName from "./components/AppName";
import ToDoCreate from "./components/TodoCreate";
import ToDo from "./components/ToDo";
import "./App.css";

function App() {
  return (
    <div className="to-do-box">
      <center className="to-do-container">
        <AppName />
        <ToDoCreate></ToDoCreate>
        <ToDo todonames={"Buy pen"} tododates={"5/12/2023"}></ToDo>
        <ToDo todonames={"Buy Milk"} tododates={"5/12/2023"}></ToDo>
        <ToDo todonames={"Go to collage"} tododates={"5/12/2023"}></ToDo>
      </center>
    </div>
  );
}

export default App;
