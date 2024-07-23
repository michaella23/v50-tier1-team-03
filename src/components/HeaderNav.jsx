import React from "react";
// Can not render locally with this import. To fix later
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const HeaderNav = () => {
    return(
        <nav>
            <ul>
                <li>About</li>
                <li>Contact</li>
                <li>Add Credits</li>
                {/* <li><FontAwesomeIcon icon={faCartShopping} /></li> */}
            </ul>
        </nav>
    )
}

export default HeaderNav;