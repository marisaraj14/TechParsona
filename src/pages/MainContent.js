import ManDesktop from "../assets/media/deskman.png";
import GraphLady from "../assets/media/graphlady.png";
import { serviceList } from "./data/services";
import CustomerCentric from "../assets/media/customercentric.png";
import StratergicThinking from "../assets/media/stratergicthinking.png";
import ServiceOfferings from "../assets/media/serviceofferings.png";
import Delivery from "../assets/media/optimiseddelivery.png";

export const MainContent = () => {
  return (
    <>
      <div className="main-container">
        <img src={ManDesktop} alt="Man in Desktop" className="main-img" />
        <span className="main-title">
          We provide the best{" "}
          <span className="main-highlight"> Oracle solutions</span> for you.
        </span>
      </div>
      <div className="service-container">
        <img src={GraphLady} className="service-img" />
        <div className="service-subContainer">
          <span className="service-title">
            Our <span className="service-title-highlight">Services</span>
          </span>
          <div className="service-list">
            {serviceList.map((item) => (
              <div className="service-listItem">
                <svg
                  width="19"
                  height="17"
                  viewBox="0 0 19 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.5 0L19 17H0L9.5 0Z" fill="#FEDE65" />
                </svg>

                <p className="service-listTitle">{item.title}</p>
              </div>
            ))}
          </div>
          <div className="scrolling-wrapper">
            {serviceList.map((item) => (
              <div className="service-cardContainer">
                <p className="service-cardTitle">{item.title}</p>
                <div>
                  <p className="service-cardDesc"> {item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="why-container">
        <p className="why-title">Why choose us</p>
        <div className="why-gridBox">
          <div className="why-cardContainer">
            <div className="why-imgContainer">
              <img src={CustomerCentric} className="w-full h-full" />
            </div>
            <p className="why-cardTitle">Customer Centric</p>
          </div>
          <div className="why-cardContainer">
            <div className="why-imgContainer">
              <img src={StratergicThinking} className="w-full h-full" />
            </div>
            <p className="why-cardTitle">Stratergic Thinking</p>
          </div>
          <div className="why-cardContainer">
            <div className="why-imgContainer">
              <img src={ServiceOfferings} className="w-full h-full" />
            </div>
            <p className="why-cardTitle">Service Offerings</p>
          </div>
          <div className="why-cardContainer">
            <div className="why-imgContainer">
              <img src={Delivery} className="w-full h-full" />
            </div>
            <p className="why-cardTitle">Optimized Delivery</p>
          </div>
        </div>
      </div>
    </>
  );
};
