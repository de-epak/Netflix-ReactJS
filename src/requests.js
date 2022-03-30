const API_kEY="3e8f3488148690ff0d9a699fe8b8f549";
const requests={
    fetchTrending:`/trending/all/week?api_key=${API_kEY}&language=en-US`,
    fetchNetflixOrginals:`/discover/tv?api_key=${API_kEY}&with_networks=213`,
    fetchTopRated:`/discover/movie?api_key=${API_kEY}&language=en-us`,
    fetchActionMovies:`/discover/movie?api_key=${API_kEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_kEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_kEY}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_kEY}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${API_kEY}&with_genres=99`
}

export default requests