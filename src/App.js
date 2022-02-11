import { useState } from "react";
import Generator from "./components/Generator";
import Resume from "./components/Resume";
import "./styles/App.css";

function App() {
  const [editing, setEditing] = useState(true);
  const [data, setData] = useState({
    personal: {
      name: "",
      phone: "",
      email: "",
    },
    schools: [],
  });

  function createResume(data) {
    setData(data);
    setEditing(false);
  }

  function editResume() {
    setEditing(true);
  }

  return (
    <div className="app">
      {editing ? (
        <Generator data={data} createResume={createResume} />
      ) : (
        <Resume data={data} editResume={editResume} />
      )}
    </div>
  );
}
export default App;
