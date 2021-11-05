import React from "react";

const educationContent = [
  {
    year: "2015",
    degree: "ENGINEERING DEGREE",
    institute: "대학명",
    details: `Text`,
  },
  {
    year: "2012",
    degree: "MASTER DEGREE",
    institute: "대학명",
    details: `Text`,
  },
  {
    year: "2009",
    degree: "BACHELOR DEGREE ",
    institute: "대학명",
    details: `Text`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <img src="img/about/book.png" alt="icon" />
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
