const API_KEY = "96ff0fcdcfdad139b940aa2ba8fa0f7b";

const categories = [
		{
				name: "trending",
				title: "Em Alta",
				path: `/trending/all/week?api_key=${API_KEY}&language=pt-BR`
		},
		{
				name: "netflixOriginals",
				title: "Originais Netflix",
				path: `/dicovery/tv?api_key=${API_KEY}&with_networks=213`
		},
		{
				name: "topRated",
				title: "Populares",
				path: `/movie/top_rated?api_key=${API_KEY}&language=pt-BR`
		},
		{
				name: "comedy",
				title: "Comedias",
				path: `/dicovery/tv?api_key=${API_KEY}&with_genres=35`
		},
		{
				name: "romance",
				title: "Romances",
				path: `/dicovery/tv?api_key=${API_KEY}&with_genres=10749`
		},
		{
				name: "documentary",
				title: "Documentários",
				path: `/dicovery/tv?api_key=${API_KEY}&with_genres=99`
		},
		{
				name: "horror",
				title: "Terror",
				path: `/dicovery/tv?api_key=${API_KEY}&with_genres=27`
		},
];

export const getMovies = async (path) => {
    try {
<<<<<<< HEAD
    let url = `https://api.themoviedb.org/3${path}`;
=======
    let url = 'https://api.themoviedb.org/3${path}';
>>>>>>> b55964899f85775a7e6fb3e08f4df66dca0557b3
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log("error getMovies: ", error);
  }
};


export default categories;