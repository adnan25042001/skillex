import React from "react";
import {
    Navbar,
    Home,
    About,
    Courses,
    Teacher,
    Contact,
    Footer,
} from "./components/index";

const App = () => {
    return (
        <div className="font-Poppins bg-Solitude">
            <Navbar />
            <Home />
            <About />
            <Courses />
            <Teacher />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
