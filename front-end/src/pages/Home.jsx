import Navbar from '../components/Navbar';
import Gallery from '../components/Gallery'
import Hero from '../components/Hero';
import {useState, useEffect} from 'react';
import fetchDataFromApi from '../utils/api';

const Home = () =>{
    const [searchKeyword, setSearchKeyword] = useState('');
    const [firstVideo, setFirstVideo] = useState({});
    const [allVideo, setAllVideo] = useState([]);
    const [startingPartOfUrl, setStartingPartOfUrl] = useState('');
    useEffect(() =>{
        fetchData();
    }, [])
    const fetchData = async () =>{
        try{
            const {results} = await fetchDataFromApi('/movie/popular');
            setFirstVideo(results[0]);
            setAllVideo(results);
            setStartingPartOfUrl('https://image.tmdb.org/t/p/original');
        }catch(error){
            console.error(error);
        }
    }
    return(
        <div className="home">
            <Navbar setSearchKeyword={setSearchKeyword} />
            <Hero startingPartOfUrl={startingPartOfUrl} {...firstVideo} />
            <Gallery startingPartOfUrl={startingPartOfUrl} allVideo={allVideo} searchKeyword={searchKeyword} />
        </div>
    )
}

export default Home;