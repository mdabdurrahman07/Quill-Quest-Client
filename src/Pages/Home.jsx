import About from "../Components/About/About";
import Banner from "../Components/Banner/Banner";
import Contact from "../Components/Contact/Contact";
import PopularServices from "../Services/PopularService/PopularServices";

const Home = () => {
    return (
        <div>
            {/* Banner */}
            <Banner></Banner>
            <PopularServices></PopularServices>
            <About></About>
            <Contact></Contact>
        </div>
    );
};

export default Home;