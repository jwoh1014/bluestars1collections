import React from "react";

const ModalOne = () => {
  return (
    <div className="popup_informations">
      <div className="image">
        <img src="img/thumbs/4-3.jpg" alt="" />
        <div
          className="main"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "img/service/1.jpg"
            })`,
          }}
        ></div>
      </div>
      {/* End big image */}

      <div className="description">
        <h3>Text</h3>
        <p>
          text
        </p>
        <p>
      text
        </p>
        <h3>Text</h3>
        <p>
          text
        </p>
        <div className="in_list">
          <ul>
            <li>
              <p>Text</p>
            </li>
            <li>
              <p>text</p>
            </li>
            <li>
              <p>text</p>
            </li>
            <li>
              <p>text</p>
            </li>
          </ul>
        </div>
        {/* End list */}
        <p>
          text
        </p>
      </div>
    </div>
  );
};

export default ModalOne;
