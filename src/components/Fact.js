import React, { useEffect } from "react";

const Fact = ({ fact, image, doFetchFact, doFetchImage }) => {
  // Execute doFetchImage and doFetchFact once, on component mount.
  useEffect(() => {
    doFetchImage();
    doFetchFact();
  }, [doFetchImage, doFetchFact]);

  return (
    <div
      className="fact"
      key={image}
      style={{ backgroundImage: `url(${image})` }}
    >
      {fact.text ? (
        <blockquote key={fact._id}>
          <h1>Cat Fact #{fact._id.replace(/[^\d]*/g, "").substring(3, 7)}</h1>
          <p>&laquo;{fact.text}&raquo;</p>
        </blockquote>
      ) : null}
      <button
        onClick={() => {
          doFetchImage();
          doFetchFact();
        }}
      >
        Miau! Gimme more!!
      </button>
    </div>
  );
};

export default Fact;
