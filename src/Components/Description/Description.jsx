import React from "react";
import "./Description.css";
import { Link } from "react-router-dom";
import arrowright from "../../Assets/arrowright.svg";
import arrowBlue from "../../Assets/arrowBlue.svg";

const Description = () => {
  return (
    
    <div className="descriptionWrapper">
    <div className="description">
      <nav className="desNav">
        <Link className="desLink line">Description</Link>
        <Link className="desLink">Additional Info</Link>
        <Link className="desLink">Reviews</Link>
        <Link className="desLink">Video</Link>
      </nav>
      <h3>Varius tempor.</h3>
      <p>
        Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare
        faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac
        est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque,
        elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam
        tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus.
        Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu
        in fringilla vulputate nunc nec. Dui, massa viverr .
      </p>
      <h3>More details</h3>

      <div>
        <div className="desdiv" >
        <img src={arrowright} alt="arrowright" />{" "}
        <b>
          Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam
          arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc
          nec. Dui, massa viverr .
        </b>
        </div>
        <div className="desdiv">
        <img src={arrowBlue} alt="arrowright" />{" "}
        <b>
          Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam
          arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc
          nec. Dui, massa viverr .
        </b>
        </div>
        <div className="desdiv">
        <img src={arrowright} alt="arrowright" />{" "}
        <b>
          Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam
          arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc
          nec. Dui, massa viverr .
        </b>
        </div>
        <div className="desdiv">
        <img src={arrowright} alt="arrowright" />{" "}
        <b>
          Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam
          arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc
          nec. Dui, massa viverr .
        </b>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Description;
