import React from "react";

export default props => (
  <div className="card well mt-4 p-4">
    <h4>{props.name}</h4>
    <p>{props.description}</p>
    <a
      href={"https://maps.google.com/?q=" + props.location[0] + "," + props.location[1]}
      className="btn btn-primary"
      target="_blank"
    >
      See on Maps
    </a>
  </div>
);
