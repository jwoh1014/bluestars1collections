import React from "react";

const Map = () => {
  return (
    <>
      <div className="google-map">
        <iframe
          className="embed-responsive-item"
          title="my location"
          src="https://maps.google.com/maps?q=seoul&t=&z=13&ie=UTF8&iwloc=&output=embed"
        ></iframe>
      </div>
      {/* End google-map */}
    </>
  );
};

export default Map;
