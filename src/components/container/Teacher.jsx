import React from "react";
import teacher1 from "../../assets/teacher1.png";
import teacher2 from "../../assets/teacher2.png";
import { accordions } from "../../data";
import Accordion from "./Accordion";

const Teacher = () => {
    return (
        <div className="section" id="teacher">
            <div className="grid sm:grid-cols-2 place-items-center gap-8">
                <div className="pl-5">
                    <div className="font-bold sm:text-[1.875rem] text-[1.5rem]">
                        Become <span className="text-Teal">An Instructor</span>{" "}
                        <br /> of Our Platform
                    </div>
                    <p className="text-sm leading-7 text-gray">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Nulla corrupti eveniet ad in, neque ut voluptate
                        accusantium, ea nisi quos rem aliquid! Ipsum,
                        praesentium. Repellat autem natus vel quo nulla iure
                        fuga qui ab nemo, error perspiciatis atque mollitia
                        sint, eos sequi. Mollitia, reiciendis ex?
                    </p>
                    <button className="py-3 px-4 bg-Teal text-white rounded-lg text-sm font-bold mt-4">
                        Start Teaching
                    </button>
                </div>
                <div className="py-4 md:w-3/4 sm:row-start-1">
                    <img src={teacher1} alt={teacher1} />
                </div>
                <div className="pl-5">
                    <div className="font-bold sm:text-[1.875rem] text-[1.5rem]">
                        Become <span className="text-Teal">An Instructor</span>{" "}
                        <br /> of Our Platform
                    </div>
                    <p className="text-sm leading-7 text-gray">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Iste ab et quis vero nesciunt veritatis provident
                        est totam magnam quas, ea illo quos, maxime eveniet,
                        quaerat necessitatibus possimus atque harum. Ad nihil a
                        libero eaque eum similique enim maiores molestias?
                    </p>
                    <button className="py-3 px-4 bg-Teal text-white rounded-lg text-sm font-bold mt-4">
                        Get Started
                    </button>
                </div>
                <div className="py-4 md:w-3/4">
                    <img src={teacher2} alt={teacher2} />
                </div>
            </div>
            <div className="text-center my-8 font-bold sm:text-[1.875rem] text-[1.5rem]">
                Frequently <span className="text-Teal">Asked Questions</span>
            </div>
            <div className="mt-12 max-w-[700px] mx-auto">
                {accordions &&
                    accordions.map((accordion) => (
                        <Accordion key={accordion.id} {...accordion} />
                    ))}
            </div>
        </div>
    );
};

export default Teacher;
