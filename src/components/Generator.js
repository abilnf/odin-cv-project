import { useState } from "react";
import Input from "./Input";
import Education from "./Education";
import uniqid from "uniqid";

function Generator(props) {
  const [personal, setPersonal] = useState(props.data.personal);
  const [schools, setSchools] = useState(props.data.schools);

  function addSchool() {
    setSchools(
      schools.concat({
        id: uniqid(),
        name: "",
        from: "",
        to: "",
      })
    );
  }

  function removeSchool(school) {
    setSchools(schools.filter((v) => v.id !== school.id));
  }

  function updateSchool(s, field, value) {
    setSchools(
      schools.map((school) => {
        if (school.id === s.id) {
          school[field] = value;
        }
        return school;
      })
    );
  }

  function updateField(field, value) {
    setPersonal({
      ...personal,
      [field]: value,
    });
  }

  return (
    <div>
      <form>
        <fieldset>
          <Input
            label="Full Name"
            onChange={(v) => updateField("name", v)}
            value={personal.name}
          />
          <Input
            label="Phone Number"
            type="tel"
            onChange={(v) => updateField("phone", v)}
            value={personal.phone}
          />
          <Input
            label="Email"
            type="email"
            onChange={(v) => updateField("email", v)}
            value={personal.email}
          />
        </fieldset>

        <fieldset>
          <Education
            schools={schools}
            addSchool={addSchool}
            removeSchool={removeSchool}
            updateSchool={updateSchool}
          />
        </fieldset>
        <button
          type="button"
          onClick={() => props.createResume({ personal, schools })}
        >
          Create Resume
        </button>
      </form>
    </div>
  );
}

export default Generator;
