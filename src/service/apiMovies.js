import axios from 'axios';

const API_KEY = '0e0748a6c8b324a098ac6737209de7e8';

axios.defaults.baseURL = 'https://api.themoviedb.org';
axios.defaults.params = {
   api_key: API_KEY,
};
const Trends = async (page = 1) => {
   try {
      const response = await axios.get(`/3/trending/movie/week?page=${page}`);
      return response.data.results;
   } catch (error) {
      console.log('error', { error });
   }
};

const MovieDetails = async id => {
   try {
      const response = await axios.get(
         `https://api.themoviedb.org/3/movie/${id}?api_key=0e0748a6c8b324a098ac6737209de7e8&language=en-US`,
      );
      return response;
   } catch (error) {
      console.log('error', { error });
   }
};

const Cast = async id => {
   try {
      const response = await axios.get(
         `https://api.themoviedb.org/3/movie/${id}/credits?api_key=0e0748a6c8b324a098ac6737209de7e8&language=en-US`,
      );
      return response;
   } catch (error) {
      console.log('error', { error });
   }
};
const Reviews = async id => {
   try {
      const response = await axios.get(
         `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=0e0748a6c8b324a098ac6737209de7e8&language=en-US&language=en-US&page=1`,
      );
      return response;
   } catch (error) {
      console.log('error', { error });
   }
};
const Movies = async (query, page) => {
   const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=0e0748a6c8b324a098ac6737209de7e8&language=en-US&query=${query}&page=${page}&include_adult=false`,
   );

   return response.data.results;
};
const apis = { Trends, MovieDetails, Cast, Reviews, Movies };
export default apis;
