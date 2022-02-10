import { Component } from "react";
import "../styles/Resume.css";

class Resume extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Personal Information</h1>
        <p id="name">{this.props.data.name}</p>
        <p id="email">{this.props.data.email}</p>
        <p id="phone">{this.props.data.phone}</p>
        <h1>Education</h1>
        {this.props.data.schools.map((school) => (
          <div key={school.id}>
            <h2 class="school-name">{school.name}</h2>
            <p class="school-from">From: {school.from}</p>
            <p class="school-to">To: {school.to}</p>
          </div>
        ))}
        <button
          type="button"
          onClick={this.props.editResume}
        >
          Edit Resume
        </button>
      </div>
    );
  }
}

export default Resume;
