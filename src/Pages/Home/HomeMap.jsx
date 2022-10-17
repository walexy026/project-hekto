import React from "react";
import "./Home.css";

const HomeMap = ({
  cantilever,
  cantTitle,
  recyellow,
  recpink,
  recblue,
  code,
  price,
}) => {
  return (
    <div>
      <div className="homeMap">
        <div className="cantilever">{cantilever}</div>
        <div className="canSub">
          <p className="canP">{cantTitle}</p>
          <div className="ryrprb">
            <span className="recyellow">{recyellow}</span>
            <span className="recpink">{recpink}</span>
            <span className="recblue">{recblue}</span>
          </div>
          <b>{code}</b>
          <b>{price}</b>
        </div>
      </div>
    </div>
  );
};

export default HomeMap;
