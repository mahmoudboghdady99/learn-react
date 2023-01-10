import React from "react";
import SocialItem from "./SocialItem";

function Social()
{
    return( 
     
        <ul className="list">
           <SocialItem media= "Facbook"  id="facebook" />
           <SocialItem media= "LinkedIn"  id="linkidin"/>
           <SocialItem media= "Twitter"  id="twitter"/>
      </ul>
      )
  }
     
export default Social;
{/* <li className="list-item">
<input type="checkbox" id="linkedIn"></input>
<label for="linkedIn">linkedIn</label>
</li>

<li className="list-item">
<input type="checkbox" id="twitter"></input>
<label for="twitter">twitter</label>
</li> */}