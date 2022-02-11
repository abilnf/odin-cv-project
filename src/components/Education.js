import Input from "./Input";

function Education(props) {
  return (
    <div>
      {props.schools.map((school) => (
        <fieldset key={school.id}>
          <Input
            label="School"
            onChange={(v) => props.updateSchool(school, "name", v)}
            value={school.name}
          />
          <Input
            label="From"
            type="date"
            onChange={(v) => props.updateSchool(school, "from", v)}
            value={school.from}
          />
          <Input
            label="To"
            type="date"
            onChange={(v) => props.updateSchool(school, "to", v)}
            value={school.to}
          />
          <button type="button" onClick={() => props.removeSchool(school)}>
            Remove
          </button>
        </fieldset>
      ))}
      <button type="button" onClick={props.addSchool}>
        Add School
      </button>
    </div>
  );
}

export default Education;
