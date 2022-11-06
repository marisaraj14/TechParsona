import "../../index.scss";
import CalculatorLady from "../media/callady.png";

export const ContactUS = () => {
  return (
    <>
      <div className="contactus-container">
        <div className="contactus-imgContainer">
          <img
            src={CalculatorLady}
            alt="Calculator Lady"
            className="w-full h-full"
          />
        </div>
        <div className="contactus-subcontainer">
          <p className="contactus-text">If you believe we are right for you</p>
          <button className="contactus-button">Contact Us</button>
        </div>
      </div>
    </>
  );
};
