import React, { useState, useEffect } from "react";

import Page1 from "../components/Slides/containers/page_1/page_1";
import Page2 from "../components/Slides/containers/page_2/page_2";
import Page3 from "../components/Slides/containers/page_3/page_3";

function Home() {
  const [repeat, setRepeat] = useState(true);
  const recursiveFunc = () => {
    setRepeat(true);
    setTimeout(() => {
      setRepeat(false);
      recursiveFunc();
    }, 18000);
  };

  useEffect(() => {
    recursiveFunc();
  }, []);

  return repeat ? (
    <div style={{ boxSizing: "border-box",
      height: "100vh",
      overflow: "hidden" }} className="App">
      <Page1 />
      <Page2 />
      <Page3 />
    </div>
  ) : null;
}

export default Home;
