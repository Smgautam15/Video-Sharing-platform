import Navbar from '../components/Navbar';
import Gallery from '../components/Gallery'
import Hero from '../components/Hero';

const Home = () =>{
    return(
        <div className="home">
            <Navbar />
            <Hero />
            <Gallery />
        </div>
    )
}

export default Home;