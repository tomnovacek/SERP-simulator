import React from "react";

function Serp(props) {
  return (
    <div className="serp-preview">
      <div className="serp-url">
        {props.url} <span className="serp-arrow"></span>
      </div>
      <div className="serp-title">{props.title}</div>
      <div className="serp-description">{props.description}</div>
    </div>
  );
}

export default Serp;
