import React from "react";
import { Link } from "react-scroll";

const Navlink = ({ nav }) => {
    return (
        <li className="list-none cursor-pointer mr-8">
            <Link
                to={nav.href}
                spy={true}
                smooth={true}
                duration={500}
                offset={-50}
                onClick={() => (document.title = "Skillex : " + nav.link)}
                className="font-bold transition-all duration-300"
            >
                {nav.link}
            </Link>
        </li>
    );
};

export default Navlink;
