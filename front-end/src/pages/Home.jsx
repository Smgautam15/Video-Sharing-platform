import Navbar from '../components/Navbar';
import Gallery from '../components/Gallery'
import Hero from '../components/Hero';
import {useState, useEffect} from 'react';
// import fetchDataFromApi from '../utils/api;
import axios from 'axios';

const Home = () =>{
    const [searchKeyword, setSearchKeyword] = useState('');
    const [firstVideo, setFirstVideo] = useState({});
    const [allVideo, setAllVideo] = useState([]);
    // const [startingPartOfUrl, setStartingPartOfUrl] = useState('');
    useEffect(() =>{
        const fetchData = async () =>{
            try {
                const response = await axios.get('http://localhost:8080/api/videos');
                setFirstVideo(response.data[0]);
                setAllVideo(response.data);
            } catch (error) {
                console.error(error);
                // Handle error
            }
        }
        fetchData();
    }, [])
    return(
        <div className="home">
            <Navbar setSearchKeyword={setSearchKeyword} />
            <Hero firstVideo={firstVideo} />
            <Gallery allVideo={allVideo} searchKeyword={searchKeyword} />
        </div>
    )
}

export default Home;