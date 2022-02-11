import "../styles/Resume.css";

function Resume(props) {
  return (
    <div>
      <h1>Personal Information</h1>
      <p id="name">{props.data.personal.name}</p>
      <p id="email">{props.data.personal.email}</p>
      <p id="phone">{props.data.personal.phone}</p>
      <h1>Education</h1>
      {props.data.schools.map((school) => (
        <div key={school.id}>
          <h2 className="school-name">{school.name}</h2>
          <p className="school-from">From: {school.from}</p>
          <p className="school-to">To: {school.to}</p>
        </div>
      ))}
      <button type="button" onClick={props.editResume}>
        Edit Resume
      </button>
    </div>
  );
}

export default Resume;
