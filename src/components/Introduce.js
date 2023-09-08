import "./Introduce.css";
// import { FaHome } from "react-icons/fa";
import "./Navbar.css";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";
import img4 from "../assets/images/img4.png";
import img5 from "../assets/images/img5.png";
import img6 from "../assets/images/img6.png";
import img7 from "../assets/images/img7.png";

import {
  FaHome,
  FaUser,
  FaFileAlt,
  FaBriefcase,
  FaCogs,
  FaEnvelope,
} from "react-icons/fa";

import React, { useRef, useEffect } from "react";

const Introduce = () => {
  useEffect(() => {
    // This function scrolls the page to the top on component mount
    window.scrollTo(0, 0);
  }, []);

  const skillImg = {
    skill1: img2,
    skill2: img3,
    skill3: img4,
    skill4: img5,
    skill5: img6,
    skill6: img7,
  };

  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);
  const section6Ref = useRef(null);

  const handleNavItemClick = (ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const projects = [
    {
      name: "MyPortfolio",
      link: "https://github.com/barikhemanta/PORTFOLIO55",
    },
    {
      name: "Ultimate Help Portal",
      link: "https://barikhemanta.github.io/HELPYMIND",
    },
    {
      name: "E-Learning",
      link: "https://barikhemanta.github.io/cipherdemy",
    },
    {
      name: "Snake Game",
      link: "https://barikhemanta.github.io/snakegame",
    },
    {
      name: "Quote Generator",
      link: "https://barikhemanta.github.io/QuoteGenerator",
    },
    {
      name: "To-Do-List Basic",
      link: "https://barikhemanta.github.io/To-Do-List-Simple/",
    },
    {
      name: "To-Do-List Adv.",
      link: "https://barikhemanta.github.io/To-Do-List-Adv/",
    },

    // Add more projects as needed
  ];

  const handleButtonClickProject = (link) => {
    // Perform actions when a button is clicked, like navigating to the link
    window.open(link, "_blank");
  };

  const formInfo = {
    name: "Hemnata Barik",
    email: "barikhemantamarch@gmail.com",
    Mob: "7978807816",
  };

  return (
    <div className="main-intro">
      <div className="vertical-navbar">
        <ul>
          <li onClick={() => handleNavItemClick(section1Ref)}>
            <FaHome className="icon" />
          </li>
          <li onClick={() => handleNavItemClick(section2Ref)}>
            <FaUser className="icon" />
          </li>
          <li onClick={() => handleNavItemClick(section3Ref)}>
            <FaFileAlt className="icon" />
          </li>
          <li onClick={() => handleNavItemClick(section4Ref)}>
            <FaBriefcase className="icon" />
          </li>
          <li onClick={() => handleNavItemClick(section5Ref)}>
            <FaCogs className="icon" />
          </li>
          <li onClick={() => handleNavItemClick(section6Ref)}>
            <FaEnvelope className="icon" />
          </li>
        </ul>
      </div>
      <div className="main">
        <div className="sub-main">
          <div className="content">
            <div className="intro-header" ref={section1Ref}>
              <h4 className="subtitle subtitle-first">
                <FaHome className="subtitle-icon" />
                Introduce
              </h4>
              <h1 className="subtitle-text">
                Hello From <span className="name">Hemanta</span>, <br />
                Software Developer
              </h1>
              <p className="subtitle-msg">
                Crafting Clean Code, Turning Complexity into Simplicity.
              </p>
              <div className="project-exp">
                <div className="exp">
                  <h1>1</h1>
                  <p>Year Of Experience</p>
                </div>
                <div className="project">
                  <h1>3+</h1>
                  <p>Project completed</p>
                </div>
              </div>
            </div>
            <div className="about" ref={section2Ref}>
              <h4 className="subtitle">
                <FaHome />
                About
              </h4>
              <h1 className="about-text">
                Every great design begin with an even better story
              </h1>
              <p className="about-msg">
                I'm Hemanta Barik, a passionate and dedicated software developer
                with 1 year of experience. I specialize in the MERN stack
                (MongoDB, Express.js, React, Node.js), and I take pride in
                crafting innovative solutions that elevate user experiences.
                Throughout my journey, I've developed and collaborated on
                several projects using the MERN stack technology.
              </p>
            </div>
            <div className="resume" ref={section3Ref}>
              <h4 className="subtitle">
                <FaHome />
                Resume
              </h4>
              <h1 className="about-text">Education & Experience</h1>
              <div className="resume-edu-exp">
                <div>
                  <span>2021 - 2023</span>
                  <h2>MASTER OF COMPUTER APPLICATION</h2>
                  <p>FAKIR MOHAN UNIVERSITY</p>
                  <p>PERCENTAGE - 74%</p>
                </div>
                <div>
                  <span>2017 - 2021</span>
                  <h2>BACHELOR OF COMPUTER APPLICATION</h2>
                  <p>PERCENTAGE - 72.1%</p>
                </div>
                {/* <div>
                  <span>2017 - 2021</span>
                  <h2>Webflow Developer & Co-Founder</h2>
                  <p>Designflow Studio</p>
                  <h2>Web Designer</h2>
                  <p>Freelance</p>
                  <h2>Leader Team of Marketing</h2>
                  <p>AHA Marketing Agency</p>
                </div> */}
              </div>
            </div>

            <div className="work" ref={section4Ref}>
              <h4 className="subtitle">
                <FaHome />
                WORKS
              </h4>
              <h1 className="about-text">My Specializations</h1>
              <div className="work-item">
                <h2>Development</h2>
                <p>I build website go live Github.</p>
                {projects.map((project, index) => (
                  <button
                    className="project-link"
                    key={index}
                    onClick={() => handleButtonClickProject(project.link)}
                  >
                    {project.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="mySkills" ref={section5Ref}>
              <h4 className="subtitle">
                <FaHome />
                My Skills
              </h4>
              <h1 className="about-text">My Advantages</h1>
              <div className="row-skills">
                <div className="skill">
                  <div className="skill-inner">
                    <img
                      className="skill-img"
                      src={skillImg.skill1}
                      alt="pic"
                    />
                    <p className="name">HTML</p>
                  </div>
                </div>

                <div className="skill">
                  <div className="skill-inner">
                    <img
                      className="skill-img"
                      src={skillImg.skill2}
                      alt="pic"
                    />
                    <p className="name">CSS</p>
                  </div>
                </div>
                <div className="skill">
                  <div className="skill-inner">
                    <img
                      className="skill-img"
                      src={skillImg.skill3}
                      alt="pic"
                    />
                    <p className="name">Javascript</p>
                  </div>
                </div>
                <div className="skill">
                  <div className="skill-inner">
                    <img
                      className="skill-img"
                      src={skillImg.skill4}
                      alt="pic"
                    />
                    <p className="name">ReactJS</p>
                  </div>
                </div>
                <div className="skill">
                  <div className="skill-inner">
                    <img
                      className="skill-img"
                      src={skillImg.skill5}
                      alt="pic"
                    />
                    <p className="name">Bootstrap</p>
                  </div>
                </div>
                <div className="skill">
                  <div className="skill-inner">
                    <img
                      className="skill-img"
                      src={skillImg.skill6}
                      alt="pic"
                    />
                    <p className="name">NodeJS</p>
                  </div>
                </div>
                <div className="skill">
                  <div className="skill-inner">
                    <img
                      className="skill-img"
                      src={skillImg.skill1}
                      alt="pic"
                    />
                    <p className="name">ExpressJS</p>
                  </div>
                </div>
                <div className="skill">
                  <div className="skill-inner">
                    <img
                      className="skill-img"
                      src={skillImg.skill1}
                      alt="pic"
                    />
                    <p className="name">MongoDB</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="intro-header" ref={section6Ref}>
              <h4 className="subtitle">
                <FaHome />
                Contact
              </h4>
              <h1>Hire Me!</h1>
              <div className="contact-details">
                <div className="details">
                  <form>
                    <input
                      type="text"
                      name="name"
                      value={formInfo.name}
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      value={formInfo.email}
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      value={formInfo.Mob}
                      required
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
