import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "이름 " },
  { meta: "last name", metaInfo: "이름" },
  { meta: "Age", metaInfo: "나이" },
  { meta: "Nationality", metaInfo: "국적" },
  { meta: "Freelance", metaInfo: "직업" },
  { meta: "Address", metaInfo: "거주지" },
  { meta: "phone", metaInfo: "연락처" },
  { meta: "Email", metaInfo: "이메일" },
  // { meta: "Skype", metaInfo: " rokers.nelson" },
  // { meta: "langages", metaInfo: "French, English" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
