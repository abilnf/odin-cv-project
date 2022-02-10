import { Component } from "react";
import Generator from "./components/Generator";
import Resume from "./components/Resume";
import "./styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.createResume = this.createResume.bind(this);
    this.editResume = this.editResume.bind(this);
  }
  state = {
    editing: true,
    data: {
      name: "",
      phone: "",
      email: "",
      schools: [],
    },
  };

  createResume(data) {
    this.setState({
      editing: false,
      data,
    });
  }

  editResume() {
    this.setState({
      editing: true,
    });
  }

  render() {
    return (
      <div className="app">
        {this.state.editing ? (
          <Generator data={this.state.data} createResume={this.createResume} />
        ) : (
          <Resume data={this.state.data} editResume={this.editResume} />
        )}
      </div>
    );
  }
}

export default App;
