import About from "../Components/About/About";
import Banner from "../Components/Banner/Banner";
import Contact from "../Components/Contact/Contact";

const Home = () => {
    return (
        <div>
            {/* Banner */}
            <Banner></Banner>
            <About></About>
            <Contact></Contact>
        </div>
    );
};

export default Home;