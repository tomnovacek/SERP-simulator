import React from "react";

function Serp(props) {
  return (
    <div className="serp-preview">
      <div className="serp-url">
        {props.url} <span className="serp-arrow"></span> <span className="ml-3 text-muted" style={{fontSize:"10px"}}>{props.url.length}</span>
      </div>
      <div className="serp-title">{props.title}<span className="ml-3 text-muted" style={{fontSize:"10px"}}>{props.title.length}</span></div>
      <div className="serp-description">{props.description}<span className="ml-3 text-muted" style={{fontSize:"10px"}}>{props.description.length}</span></div>
    </div>
  );
}

export default Serp;
