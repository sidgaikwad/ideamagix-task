import React, { useEffect } from "react";
import { preLoaderAnim } from "../animations";
import "./preloader.css";

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader">
      <div className="texts-container">
        <span>Ideamagix</span>
        <span>Evaluation</span>
        <span>Task.</span>
      </div>
    </div>
  );
};

export default PreLoader;