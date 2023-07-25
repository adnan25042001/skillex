import React from "react";
import { Link } from "react-scroll";

const MobileNavLinks = ({ nav, setToggle }) => {
    return (
        <li className="list-none cursor-pointer mr-8">
            <Link
                to={nav.href}
                spy={true}
                smooth={true}
                duration={500}
                offset={-50}
                className="font-bold transition-all duration-300"
                onClick={(prev) => setToggle(!prev)}
            >
                {nav.link}
            </Link>
        </li>
    );
};

export default MobileNavLinks;
