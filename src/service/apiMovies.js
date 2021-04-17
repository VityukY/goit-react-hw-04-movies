import axios from 'axios';

const apiTrends = page => {
   axios
      .get(
         `https://api.themoviedb.org/3/trending/movie/week?api_key=0e0748a6c8b324a098ac6737209de7e8&page=${page}`,
      )
      .then(response => {
         return response.data.results;
      });
};

export default apiTrends;
