import SliderBanner from "./SliderBanner/SliderBanner";
import TextBanner from "./TextBanner/TextBanner";


const Banner = () => {
    return (
        <div className="max-w-screen-2xl mx-auto mt-16 md:mt-32 p-10 bg-[#DFE7E9] ">
          <div className="flex-row md:flex justify-around items-center">
              {/* typewriter */}
          <section>
            <TextBanner></TextBanner>
            </section>  
          {/* slider */}
          <section>
            <SliderBanner></SliderBanner>
            </section>  
          </div>
        </div>
    );
};

export default Banner;