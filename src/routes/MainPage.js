import React from "react";
import Background from "../components/Background";
import BriefProfile from "../components/BriefProfile";
// import Navbar from "../components/Navbar";
import Introduce from "../components/Introduce";

const MainPage = () => {
  return (
    <div>
      <Background />
      <BriefProfile />
      <Introduce />
    </div>
  );
};

export default MainPage;
