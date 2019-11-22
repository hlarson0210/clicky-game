import React from "react";
import "./style.css";

let style = {
  "height": "160px",
  "width": "160px"
}

let style2 = {
  "width": "12rem",
  "height": "12rem"
}

function FriendCard(props) {
  return (
        <div style={style2} className="card">
          <img onClick={() => props.shuffleArr(props.id)} style={style} alt={props.name} src={props.image} id={props.id} key={props.key} className="card-img-top mx-auto my-auto" />
        </div>
  );
}

export default FriendCard;
