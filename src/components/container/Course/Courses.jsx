import React from "react";
import { categories, courses } from "../../../data";
import Categories from "./Categories";
import Course from "./Course";
import { motion } from "framer-motion";

const Courses = () => {
    const container = {
        hidden: {
            opacity: 0,
            scale: 0,
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.1,
            },
        },
    };
    return (
        <div className="section" id="courses">
            <div className="text-center">
                <div className="sm:text-3xl text-2xl font-bold mb-5">
                    Our Top <span className="text-Teal"> Categories</span>
                </div>
                <p className="text-sm text-gray leading-7 max-w-[700px] mx-auto">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Id, iusto nostrum? Aperiam repellendus minus eaque
                    aspernatur ex totam rem sapiente voluptatem doloremque
                    cupiditate at illum reiciendis, molestiae porro. Aut vitae
                    cum atque ratione a quos voluptatum nostrum assumenda at
                    deleniti ex voluptate beatae, dolor dicta architecto
                    suscipit impedit consequatur nulla.
                </p>
            </div>
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="visible"
                className="grid md:grid-cols-4 sm:grid-cols-2 mt-12 gap-8 p-4"
            >
                {categories &&
                    categories.map((cat) => (
                        <Categories key={cat.id} {...cat} />
                    ))}
            </motion.div>
            <div className="text-xl font-bold mt-32">Most Popular Courses</div>
            <div className="mt-12 overflow-x-hidden w-full relative">
                <div className="flex gap-8 md:w-full sm:w-[170%] xs:w-[340%] w-[480%] animate-slide">
                    {courses &&
                        courses.map((course) => (
                            <Course key={course.id} {...course} />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Courses;
