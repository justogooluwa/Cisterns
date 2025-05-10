import React from "react";
import hero from "../img/hero/h1_hero.png";
import about1 from "../img/gallery/about1.png";
// import case1 from "../img/gallery/case1.png"
// import case2 from "../img/gallery/case2.png"
// import case3 from "../img/gallery/case3.png"
import cistern1 from "../img/gallery/CISTERN 5.jpg";
import cistern2 from "../img/gallery/CISTERN 6.jpg";
import cistern3 from "../img/gallery/CISTERN 20.jpg";
import "./Home.css";
function Home() {
  return (
    <>
      <div className="hero1">
        <div className="text">
          <h1>
            Our Help To <br></br>The World.
          </h1>
          <p className="text2">
            Rooted in compassion-centeredness and driven by transformational
            change,<br></br>we empower communities toward self-determination and
            dignity.
          </p>
          <button className="donates">Donate</button>
        </div>
        <div className="image">
          <img src={hero} alt="" />
        </div>
      </div>

      <div className="mission">
        <h1 className="text3">What We Are Doing</h1>
        <h2 className="text4">We Are On A Mission To Help The Helpless</h2>

        <div className="boxes">
          <div className="box1">
            <h1 className="water">Clean Water</h1>
            <h2 className="service">
              The sea freight service has grown conside rably in recent years.
              We spend timetting to know your processes to.
            </h2>
          </div>

          <div className="box2">
            <h1 className="water">Clean Water</h1>
            <h2 className="service">
              The sea freight service has grown conside rably in recent years.
              We spend timetting to know your processes to.
            </h2>
          </div>

          <div className="box3">
            <h1 className="water">Clean Water</h1>
            <h2 className="service">
              The sea freight service has grown conside rably in recent years.
              We spend timetting to know your processes to.
            </h2>
          </div>
        </div>
      </div>

      <div className="about">
        <div className="foundation">
          <span>About Our Foundation</span>
          <h2>We Are On A Mission To Help The Helpless</h2>
          <p>
            CISTERNS OF LIFE Foundation, is an NGO reaching out to the less
            priviledge and the teens on issues bordering on Sex, Cultism and
            Abuse
          </p>
          <p>
            In CISTERNS OF LIFE Foundation, we counsel, mentor and defend young
            teenagers going through abuse and depression. With our mentorship
            program we re-orientate them on core values on becoming a better
            person in life
          </p>
          <button className="about-btn">About Us</button>
        </div>
        <div className="about-img">
          <img src={about1} alt="" />
        </div>
      </div>

      <div className="cause">
        <div className="causes">
          <span>Our Cases You Can See</span>
          <h2>
            Explore Our Latest Causes<br></br> That We Work On
          </h2>

          <div className="divider">
            <div className="divider1">
              <img src={cistern1} alt="" />
              <h1>Ensure Education For Every Poor Children</h1>
              <div className="progress-container">
                <div className="progress-bar" style={{ width: "70%" }}></div>
              </div>
              <div className="price">
                <p>
                  Raised:<span>$20,000</span>
                </p>
                <p>
                  Goal:<span>$30,000</span>
                </p>
              </div>
            </div>

            <div className="divider2">
              <img src={cistern2} alt="" />
              <h1>Providing Healthy Food For The Children</h1>
              <div className="progress-container">
                <div className="progress-bar" style={{ width: "30%" }}></div>
              </div>
              <div className="price">
                <p>
                  Raised:<span>$20,000</span>
                </p>
                <p>
                  Goal:<span>$30,000</span>
                </p>
              </div>
            </div>

            <div className="divider3">
              <img src={cistern3} alt="" />
              <h1>Supplying Drinking Water For The People</h1>
              <div className="progress-container">
                <div className="progress-bar" style={{ width: "50%" }}></div>
              </div>
              <div className="price">
                <p>
                  Raised:<span>$20,000</span>
                </p>
                <p>
                  Goal:<span>$30,000</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
