import { Component } from "react";
import Input from "./Input";

class Education extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.schools.map((school) => (
          <fieldset key={school.id}>
            <Input
              label="School"
              onChange={(v) => this.props.updateSchool(school, "name", v)}
              value={school.name}
            />
            <Input
              label="From"
              type="date"
              onChange={(v) => this.props.updateSchool(school, "from", v)}
              value={school.from}
            />
            <Input
              label="To"
              type="date"
              onChange={(v) => this.props.updateSchool(school, "to", v)}
              value={school.to}
            />
            <button
              type="button"
              onClick={() => this.props.removeSchool(school)}
            >
              Remove
            </button>
          </fieldset>
        ))}
        <button type="button" onClick={this.props.addSchool}>
          Add School
        </button>
      </div>
    );
  }
}

export default Education;
