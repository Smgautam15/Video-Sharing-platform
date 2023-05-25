import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNDk4YTEwNjY5ODgyYWMyNTQ5YmM5ZWE0N2MzYzVjZSIsInN1YiI6IjY0NmU3ZmE5MDcyMTY2MDExN2VlYTY5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r5dbJH0o13VMtu5vY_B3boCOcHxtQrW6o9fO_viTbyM`;

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};

export default fetchDataFromApi;