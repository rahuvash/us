import axios from "axios";
import React, { useEffect } from "react";

export default function ShowCase({ short }) {
  useEffect(() => {
    axios
      .get(`https://urlshortner.gultion.repl.co/v1/${short}`)
      .then((e) => {
        // console.log(e.data);
        let longUrl = e.data.longUrl;
        window.location.href = longUrl;
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return <div className="ShowCase"></div>;
}
