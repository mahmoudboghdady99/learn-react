import React from "react";

function SocialItem(props){
    return (
<li className="list-item">
    <input type="checkbox" id = {props.id}></input>
    <label for={props.id}>{props.media}</label>
</li>
)
}
export default SocialItem;