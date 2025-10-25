// import CarouselComponent from "../pages/Carousel";
import Cards from "../cards/Cards";
import SwiperSlider from "./SwiperSlider";
import ContactForm from "./ContactForm";
import Information from "./Information";

const Home = () => {
  return (
    <>
      <title>Toytopia Home</title>
      {/* <CarouselComponent /> */}
      <SwiperSlider />
      <Cards />
      <Information />
      <ContactForm />
    </>
  );
};

export default Home;
