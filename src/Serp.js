import React from "react";

function Serp(props) {
  return (
    <div className="serp-preview">
      <div className="serp-url">
        {props.url} <span className="serp-arrow"></span> <span className="serp-counter" >{props.url.length}</span>
      </div>
      <div className="serp-title">{props.title}<span className="serp-counter">{props.title.length}</span></div>
      <div className="serp-description">{props.description}<span className="serp-counter">{props.description.length}</span></div>
    </div>
  );
}

export default Serp;
