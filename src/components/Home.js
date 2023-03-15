import AboutUs from "./AboutUs";
import Offers from "./Offers";

const Home = () => {
    return (
      <>
      
        <section id="home">
            <div className="hero-img">
                <div className="hero-shadow"></div>
                <div className="hero-text">
                    <p>Forest Group</p>
                    <h1>Najpiękniejszy park w Twojej okolicy!</h1>
                </div>

            </div>
        </section>
        <AboutUs/>
        <Offers/>
        
      </>
    

    )
}

export default Home;