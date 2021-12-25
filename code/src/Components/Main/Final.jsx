import React from "react";

export default function Final({ final }) {
  const handleCopy = () => {
    navigator.clipboard.writeText(final.shortUrl);
  };
  return (
    <div className="Final">
      <div className="flex row">
        <input value={final.shortUrl} className="Final_url" type="text" />
        <button onClick={handleCopy} className="Final_button">
          Shortme
        </button>
      </div>
      <div className="Final_long">longUrl: {final.longUrl}</div>
    </div>
  );
}
