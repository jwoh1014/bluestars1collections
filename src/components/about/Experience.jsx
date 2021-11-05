import React from "react";

const experienceContent = [
  {
    year: "   2018 - Present",
    position: " Web Developer",
    compnayName: "기업명",
    details: `  Text`,
  },
  {
    year: "2013 - 2018",
    position: " UI/UX Designer",
    compnayName: "기업명",
    details: `Text`,
  },
  {
    year: "2005 - 2013",
    position: "Consultant",
    compnayName: "기업명",
    details: `Text`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <img src="img/about/briefcase.png" alt="icon" />
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
