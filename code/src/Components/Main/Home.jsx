import axios from "axios";
import React, { useState } from "react";
import Final from "./Final";

export default function Home() {
  const [final, setFinal] = useState({ urlCode: false });

  const handleShort = () => {
    // setAdd(true);
    axios
      .post("https://urlshortner.gultion.repl.co/v1/shorturl", {
        longUrl: document.querySelector(".Home_url").value,
      })
      .then((res) => {
        setFinal(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return !final.urlCode ? (
    <div className="Home">
      <input className="Home_url" type="text" />
      <button onClick={handleShort} className="Home_button">
        Shortme
      </button>
    </div>
  ) : (
    <Final final={final} />
  );
}
