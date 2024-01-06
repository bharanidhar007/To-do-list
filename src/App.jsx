import "./App.css";
import AppName from "./components/AppName";
import AllItems from "./components/AllItems";
import ToDoCreate from "./components/TodoCreate";

function App() {
  let DoItems = [
    {
      nowname: "Buy pen",
      nowdate: "5/12/2023",
    },
    {
      nowname: "Buy milk",
      nowdate: "5/12/2023",
    },
    {
      nowname: "Go to collag",
      nowdate: "5/12/2023",
    },
  ];
  return (
    <div className="to-do-box">
      <center className="to-do-container">
        <AppName />
        <ToDoCreate></ToDoCreate>
        <AllItems doitems={DoItems}></AllItems>
      </center>
    </div>
  );
}

export default App;
