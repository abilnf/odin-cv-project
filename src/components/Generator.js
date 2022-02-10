import { Component } from "react";
import Input from "./Input";
import Education from "./Education";
import uniqid from "uniqid";

class Generator extends Component {
  constructor(props) {
    super(props);
    this.addSchool = this.addSchool.bind(this);
    this.removeSchool = this.removeSchool.bind(this);
    this.updateSchool = this.updateSchool.bind(this);
    this.updateField = this.updateField.bind(this);
  }
  state = this.props.data;

  addSchool() {
    this.setState({
      schools: this.state.schools.concat({
        id: uniqid(),
        name: "",
        from: "",
        to: "",
      }),
    });
  }

  removeSchool(school) {
    this.setState({
      schools: this.state.schools.filter((v) => v.id !== school.id),
    });
  }

  updateSchool(s, field, value) {
    this.setState({
      schools: this.state.schools.map((school) => {
        if (school.id === s.id) {
          school[field] = value;
        }
        return school;
      }),
    });
  }

  updateField(field, value) {
    this.setState({
      [field]: value,
    });
  }

  render() {
    return (
      <div>
        <form>
          <fieldset>
            <Input
              label="Full Name"
              onChange={(v) => this.updateField("name", v)}
              value={this.state.name}
            />
            <Input
              label="Phone Number"
              type="tel"
              onChange={(v) => this.updateField("phone", v)}
              value={this.state.phone}
            />
            <Input
              label="Email"
              type="email"
              onChange={(v) => this.updateField("email", v)}
              value={this.state.email}
            />
          </fieldset>

          <fieldset>
            <Education
              schools={this.state.schools}
              addSchool={this.addSchool}
              removeSchool={this.removeSchool}
              updateSchool={this.updateSchool}
            />
          </fieldset>
          <button
            type="button"
            onClick={() => this.props.createResume(this.state)}
          >
            Create Resume
          </button>
        </form>
      </div>
    );
  }
}

export default Generator;
