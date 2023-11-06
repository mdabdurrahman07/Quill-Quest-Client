/* eslint-disable react/no-unescaped-entities */
import Lottie from "lottie-react";
import aboutAnimation from "../../../public/about-animation/Animation - 1699304778454.json";
const About = () => {
    return (
        <div className="max-w-screen-2xl mx-auto p-5 my-10">
            <div className="flex-row lg:flex justify-center items-center gap-5">
                <section className="space-y-6 flex-1">
                    <h1 className="text-5xl font-bold">About Us </h1>
                    <p className="text-xl font-medium">At QuillQuest, We are passionate about literature and committed to serving book lovers around the world. <br /> Our mission is to provide an extensive collection of books, from timeless classics to contemporary bestsellers. <br /> With a team of dedicated bibliophiles, we strive to deliver exceptional service, <br />whether you're searching for a captivating novel, educational resources, or rare gems. We believe in the power of words to inspire, educate, and entertain, and we're here to help you discover, enjoy, and expand your literary horizons. Welcome to Books Service, where stories come to life.</p>
                    <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white font-medium text-lg">Learn More</button>
                </section>
                <section className="flex-1">
                    <Lottie animationData={aboutAnimation}></Lottie>
                </section>
            </div>
        </div>
    );
};

export default About;