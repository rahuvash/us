import React, { useEffect, useState } from "react";
import ShowCase from "../ShowCase/ShowCase";
import Final from "./Final";
import Home from "./Home";
import "./_Main.scss";
export default function Main() {
  const [short, setShort] = useState(false);
  useEffect(() => {
    // console.log(window.location);
    let sh = window.location.pathname.split("/")[2];
    setShort(sh);
    console.log(sh);
  }, []);
  return (
    <div className="Main">
      {short ? (
        <>
          {/* <Final></Final> */}
          <ShowCase short={short} />
        </>
      ) : (
        <Home />
      )}
    </div>
  );
}
