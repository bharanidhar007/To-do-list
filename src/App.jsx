import AppName from "./assets/components/AppName";
import ToDoCreate from "./assets/components/TodoCreate";
import ToDo1 from "./assets/components/ToDo1";
import ToDo2 from "./assets/components/ToDo2";
import "./App.css";

function App() {
  return (
    <div className="to-do-box">
      <center class="to-do-container">
        <AppName />
        <ToDoCreate></ToDoCreate>
        <ToDo1></ToDo1>
        <ToDo2></ToDo2>
      </center>
    </div>
  );
}

export default App;
