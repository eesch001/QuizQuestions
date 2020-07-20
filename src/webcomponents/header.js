import React from "react"
import { Spring } from 'react-spring/renderprops'

function Header(){
  return (
    <Spring
      from={{ opacity: -3, margintop: -500 }}
      to={{ opacity: 1, margintop: 0 }}
    >
      {props => (
        <div style={props}>
          <div className="header">
            <h1 className="headertext">Literature Quiz!</h1>
          </div>
        </div>
      )}
    </Spring>
  );
}


  // return(
  // <div className="header">
  // <h1 className="headertext">Literature Quiz!</h1>
  // </div>
//)







export default Header
