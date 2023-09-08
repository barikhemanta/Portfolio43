import "./BriefProfile.css";
import { FiLinkedin, FiGithub } from "react-icons/fi";
import img1 from "../assets/images/img1.jpg";

import React from "react";

const BriefProfile = () => {
  const profileData = {
    logo: "HEMANTA BARIK",
    role: "MERN Stack Developer",
    myPhoto: img1,
    email: "barikhemantamarch@gmail.com",
    address: "Bhubaneswar, Odisha",
    mobile: "+91 79788 07816",
    copyRight:
      "HTML • CSS • Javascript • MongoDB • ExpressJS • ReactJS • NodeJS",
    socialMedia: [
      {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/hemanta-barik-b396541a5",
        icon: <FiLinkedin />,
      },
      {
        name: "GitHub",
        link: "https://github.com/barikhemanta",
        icon: <FiGithub />,
      },
    ],
  };

  return (
    <div className="left-part">
      <div className="left-part-header">
        <span className="lph logo">{profileData.logo}</span>
        <span className="lph role">{profileData.role}</span>
      </div>
      <img className="my-pic" src={profileData.myPhoto} alt="pic" />
      <p className="copy-right">{profileData.copyRight}</p>
      <h2 className="email">{profileData.email}</h2>
      <h2 className="address">{profileData.address}</h2>
      <h2 className="address" style={{ "font-size": "1rem" }}>
        Mob-{profileData.mobile}
      </h2>
      <div className="social-media">
        <ul className="social-media-list">
          {profileData.socialMedia.map((media, index) => (
            <li className="list" key={index}>
              <a href={media.link} target="_blank" rel="noopener noreferrer">
                {media.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BriefProfile;
